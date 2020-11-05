import React from "react";
import { PieDatum } from "@nivo/pie";
// import { Typography } from "antd";
import { DocumentNode, useQuery } from "@apollo/client";
import { LoaderNoDash } from "../../components/LoaderInDash";
import { BarDiagramCard } from "./DiagramBarCard";
// const { Title } = Typography;

interface IDiagramComboProps {
  title: string;
  gqlQuery: DocumentNode;
  style?: React.CSSProperties;
  styleCardPanel?: React.CSSProperties;
}

export const DiagramComboBar = ({
  title,
  gqlQuery,
  style,
  styleCardPanel,
}: IDiagramComboProps) => {
  interface ITagPopularity {
    __typename: string;
    count: number;
    type: string;
  }
  type tagPop = {
    popularity: ITagPopularity[];
  };

  const { loading, data } = useQuery<tagPop>(gqlQuery);

  const fillData = (data: tagPop | undefined) => {
    if (data === undefined) {
      // const errorData:  PieDatum[] {}
      return [
        {
          id: 1,
          label: "error",
          value: 1,
        },
      ];
    }
    const dataChartTagPop: PieDatum[] = data?.popularity.map((row) => ({
      id: row.type,
      label: row.type,
      value: row.count,
    }));

    return dataChartTagPop;
  };

  if (loading) {
    return <LoaderNoDash />;
  }

  if (!loading) {
    return (
      <>
        <BarDiagramCard
          styleCardPanel={styleCardPanel}
          style={style}
          title={title}
          data={fillData(data)}
        />
      </>
    );
  }

  return <h1>error</h1>;
};

export default DiagramComboBar;
