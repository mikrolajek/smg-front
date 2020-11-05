import { useRouter } from "next/router";
import React from "react";
import LayoutM from "../../../components/LayoutM";
import selectedPanel from "../../../utils/selectedPanel";
// import GetProductLinks from "./components/GetProductLinks";
// import GetSingleProductCodes from "./components/GetSingleProductCodes";
// import GetSingleProductLocations,
import { GetSingleLocationProducts } from "./components/GetSingleProductLocatons";
import { CardPanel } from "../../../components/styledComponents/components";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_LOCATION } from "../../../utils/graphqlQSM/queries";
import { LoaderInDash } from "../../../components/LoaderInDash";
import { Typography } from "antd";
const { Title } = Typography;

export const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(GET_SINGLE_LOCATION, {
    variables: { id: id },
  });

  if (loading) {
    return <LoaderInDash selectedField={selectedPanel.LISTA_ODDZIALY} />;
  }

  if (error) {
    const router = useRouter();
    router.push("/");
  }
  if (!loading) {
    const { location_by_pk } = data;
    console.log(data);
    return (
      <LayoutM selectedField={selectedPanel.LISTA_ODDZIALY}>
        <CardPanel style={{ height: "200px" }}>
          <Title level={4}>Firma: {location_by_pk.company.name}</Title>
          <Title level={5}>Adres: </Title>
          <span>{location_by_pk.address}</span>
        </CardPanel>
        <GetSingleLocationProducts id={id} title={"Produkty w lokalizacji"} />
      </LayoutM>
    );
  }
};

export default Product;

/* <GetSingleProductLocations id={id} title={"Lokalizacje produktu"} /> */
/* <GetSingleProductCodes id={id} title={"Kody produktu"} /> */
/* <GetProductLinks id={id} title={"Linki"} /> */
