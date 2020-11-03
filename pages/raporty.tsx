import React from "react";
import LayoutM from "../components/LayoutM";
import selectedField from "../utils/selectedPanel";
import { Typography } from "antd";
// import { CardPanel } from "../components/styledComponents/components";
// import styled from "styled-components";
// import { PieDatum, ResponsivePie } from "@nivo/pie";
// import { DiagramCard } from "../components/diagrams/DiagramCard";
import {
  GET_COMPANY_ENGAGEMENT,
  GET_LOCATION_ENGAGEMENT,
  GET_PHONE_POPULARITY,
  GET_PRODUCT_POPULARITY,
  GET_TAG_POPULARITY,
} from "../utils/graphqlQSM/queries";
import { useQuery } from "@apollo/client";
import { LoaderInDash } from "../components/LoaderInDash";
import { DiagramCombo } from "../components/diagrams/DiagramCombo";
import DiagramComboBar from "../components/diagrams/DiagramComboBar";
const { Title } = Typography;

export const Raporty = () => {
  const dataChart = [
    { id: "lalal", label: "lalal", value: 27 },
    { id: "rampam", label: "rampam", value: 25 },
    { id: "terefere", label: "terefere", value: 18 },
    { id: "lambada", label: "lambada", value: 15 },
    { id: "pomo", label: "pomo", value: 10 },
    { id: "tiki", label: "tiki", value: 5 },
  ];
  interface ITagPopularity {
    __typename: string;
    count: number;
    type: string;
  }
  type tagPop = {
    popularity: ITagPopularity[];
  };

  const { loading, error, data } = useQuery<tagPop>(GET_TAG_POPULARITY);

  if (loading) {
    return <LoaderInDash selectedField={selectedField.RAPORTY} />;
  }

  if (!loading) {
    // console.log(data);
    console.log(GET_TAG_POPULARITY.loc?.source.body);
    return (
      <>
        <LayoutM selectedField={selectedField.RAPORTY}>
          <DiagramCombo
            title={"Popularność telefonów"}
            gqlQuery={GET_PHONE_POPULARITY}
          />
          <DiagramCombo
            title={"Popularność tagów nfc/qr"}
            gqlQuery={GET_TAG_POPULARITY}
          />
          <DiagramCombo
            title={"Ilość użytych kodów w danej firmie"}
            gqlQuery={GET_COMPANY_ENGAGEMENT}
          />
          <DiagramComboBar
            title={"Popularność produktów"}
            gqlQuery={GET_PRODUCT_POPULARITY}
          />
          <DiagramComboBar
            style={{ maxWidth: "1000px" }}
            styleCardPanel={{ width: "950px" }}
            title={"Popularność lokalizacji"}
            gqlQuery={GET_LOCATION_ENGAGEMENT}
          />
        </LayoutM>
      </>
    );
  }
};

export default Raporty;
