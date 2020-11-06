import React from "react";
import { PieDatum } from "@nivo/pie";
import { PieDiagramCard } from "../../components/diagrams/DiagramCard";
import { DocumentNode, useQuery } from "@apollo/client";
import { LoaderNoDash } from "../universal-components/Loaders";
// import { CardPanel } from "../../components/styledComponents/components";
// const { Title } = Typography;
// import { Typography } from "antd";

interface IDiagramComboProps {
  title: string;
  gqlQuery: DocumentNode;
}

export const DiagramCombo = ({ title, gqlQuery }: IDiagramComboProps) => {
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
        <PieDiagramCard title={title} data={fillData(data)} />
      </>
    );
  }

  return <h1>error</h1>;
};

export default DiagramCombo;
