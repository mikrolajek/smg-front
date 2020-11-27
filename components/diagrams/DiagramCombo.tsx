import React, { useEffect } from "react";
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
  dates: string[];
}

export const DiagramCombo = ({
  title,
  gqlQuery,
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

  // console.log(dates[0], "DIAGRAM COMBO"); DZIALA
  const { loading, data, refetch } = useQuery<tagPop>(gqlQuery, {
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
    console.log(data);
    return (
      <>
        <PieDiagramCard title={title} data={fillData(data)} />
      </>
    );
  }

  return <h1>error</h1>;
};

export default DiagramCombo;
