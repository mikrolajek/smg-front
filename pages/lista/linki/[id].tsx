import { useRouter } from "next/router";
import React from "react";
import LayoutM from "../../../components/universal-components/LayoutM";
import selectedPanel from "../../../utils/selectedPanel";
import GetSingleLinkCodes from "../../../components/lista/linki/components/GetSingleLinkCodes";
import { GetSingleLink } from "../../../components/lista/linki/components/GetSingleLink";
import GetSingleLinkProducts from "../../../components/lista/linki/components/GetSingleLinkProducts";
import GetLSingleLinkLocations from "../../../components/lista/linki/components/GetLSingleLinkLocations";

export const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <LayoutM selectedField={selectedPanel.LISTA_PRODUKTY}>
      <GetSingleLink id={id} title={"Url: "} />
      <GetSingleLinkCodes id={id} title={"Kody linku"} />
      <GetSingleLinkProducts id={id} title={"Kody produktu"} />
      <GetLSingleLinkLocations id={id} title={"Lokacje linku"} />
    </LayoutM>
  );
};

export default Product;
