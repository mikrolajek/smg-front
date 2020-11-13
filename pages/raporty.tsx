import React from "react";
import LayoutM from "../components/universal-components/LayoutM";
import selectedField from "../utils/selectedPanel";
import {
  GET_COMPANY_ENGAGEMENT,
  GET_LOCATION_ENGAGEMENT,
  GET_PHONE_POPULARITY,
  GET_PRODUCT_POPULARITY,
  GET_TAG_POPULARITY,
} from "../utils/graphqlQSM/queries";
import { DiagramCombo } from "../components/diagrams/DiagramCombo";
import DiagramComboBar from "../components/diagrams/DiagramComboBar";

export const Raporty = () => {
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
          title={"Ilość użytych kodów w danej sieci"}
          gqlQuery={GET_COMPANY_ENGAGEMENT}
        />
        <DiagramComboBar
          title={"Popularność produktów top 5"}
          gqlQuery={GET_PRODUCT_POPULARITY}
        />
        <DiagramComboBar
          style={{ maxWidth: "1000px" }}
          styleCardPanel={{ width: "950px" }}
          title={"Popularność sklepów"}
          gqlQuery={GET_LOCATION_ENGAGEMENT}
        />
      </LayoutM>
    </>
  );
  // }
};

export default Raporty;
