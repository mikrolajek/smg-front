import { useRouter } from "next/router";
import React from "react";
import LayoutM from "../../../components/LayoutM";
import selectedPanel from "../../../utils/selectedPanel";
import GetProductLinks from "./components/GetProductLinks";
import GetSingleProductCodes from "./components/GetSingleProductCodes";
import GetSingleProductLocations from "./components/GetSingleProductLocatons";

export const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <LayoutM selectedField={selectedPanel.LISTA_PRODUKTY}>
      <GetSingleProductLocations id={id} title={"Lokalizacje produktu"} />
      <GetSingleProductCodes id={id} title={"Kody produktu"} />
      <GetProductLinks id={id} title={"Linki"} />
    </LayoutM>
  );
};

export default Product;
