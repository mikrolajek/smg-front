import React from "react";
import LayoutM from "../components/universal-components/LayoutM";
import selectedField from "../utils/selectedPanel";
import {
  GET_ALL_PRODUCT_POPULARITY,
  GET_COMPANY_ENGAGEMENT,
  GET_LOCATION_ENGAGEMENT,
  GET_PHONE_POPULARITY,
  GET_PRODUCT_POPULARITY,
  GET_TAG_POPULARITY,
} from "../utils/graphqlQSM/queries";
import { DiagramCombo } from "../components/diagrams/DiagramCombo";
import DiagramComboBar from "../components/diagrams/DiagramComboBar";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  /* overflow: auto; */
  flex-flow: wrap;
  flex-wrap: wrap;
`;

export const Raporty = () => {
  return (
    <>
      <LayoutM selectedField={selectedField.RAPORTY}>
        <Flex>
          <DiagramCombo
            title={"Popularność telefonów"}
            gqlQuery={GET_PHONE_POPULARITY}
          />
          <DiagramCombo
            title={"Popularność tagów nfc/qr"}
            gqlQuery={GET_TAG_POPULARITY}
          />
          <DiagramCombo
            title={"Ilość użytych kodów w danej sieci"}
            gqlQuery={GET_COMPANY_ENGAGEMENT}
          />
          <DiagramComboBar
            style={{ flex: "3 3 800px" }}
            styleCardPanel={{ minWidth: "800px" }}
            title={"Popularność sklepów"}
            barProps={{ axisBottom: null }}
            gqlQuery={GET_LOCATION_ENGAGEMENT}
          />
          <DiagramComboBar
            style={{ flex: "3 3 600px" }}
            styleCardPanel={{ minWidth: "600px" }}
            title={"Popularność produktów top 5"}
            gqlQuery={GET_PRODUCT_POPULARITY}
          />
          <DiagramComboBar
            styleCardPanel={{ minWidth: "800px" }}
            barProps={{ axisBottom: null }}
            style={{ flex: "5 5 800px", overflow: "auto" }}
            title={"Popularność produktów wszystkie"}
            gqlQuery={GET_ALL_PRODUCT_POPULARITY}
          />
        </Flex>
      </LayoutM>
    </>
  );
  // }
};

export default Raporty;
