import React, { useEffect } from "react";
import { PieDatum } from "@nivo/pie";
// import { Typography } from "antd";
// const { Title } = Typography;
import { useRouter } from "next/router";
import { DocumentNode, useQuery } from "@apollo/client";
import { LoaderNoDash } from "../universal-components/Loaders";
import { BarDiagramCard } from "./DiagramBarCard";

interface IDiagramComboProps {
  title: string;
  gqlQuery: DocumentNode;
  style?: React.CSSProperties;
  styleCardPanel?: React.CSSProperties;
  barProps?: any;
  dates: string[];
}

export const DiagramComboBar = ({
  title,
  gqlQuery,
  style,
  styleCardPanel,
  barProps,
  dates,
}: IDiagramComboProps) => {
  interface ITagPopularity {
    __typename: string;
    count: number;
    type: string;
  }
  type tagPop = {
    popularity: ITagPopularity[];
  };

  const { loading, data, error, refetch } = useQuery<tagPop>(gqlQuery, {
    variables: { fromDate: dates[0], toDate: dates[1] },
  });

  useEffect(() => {
    refetch();
  }, [dates]);

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
      id: row.type.split(";")[0],
      label: row.type,
      value: row.count,
    }));

    return dataChartTagPop;
  };

  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    return (
      <>
        <BarDiagramCard
          barProps={barProps}
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
