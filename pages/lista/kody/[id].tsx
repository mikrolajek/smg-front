import { useRouter } from "next/router";
import React from "react";
import LayoutM from "../../../components/universal-components/LayoutM";
import selectedPanel from "../../../utils/selectedPanel";
import { GetSingleCodeProduct } from "../../../components/lista/kody/components/GetSingleCodeProduct";
import { GetSingleCodeLocations } from "../../../components/lista/kody/components/GetSingleCodeLocations";
import { CardPanel } from "../../../components/styledComponents/components";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_CODE } from "../../../utils/graphqlQSM/queries";
import { LoaderInDash } from "../../../components/universal-components/Loaders";
import { Typography } from "antd";
const { Title } = Typography;

export const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(GET_SINGLE_CODE, {
    variables: { id: id },
  });

  if (loading) {
    return <LoaderInDash selectedField={selectedPanel.LISTA_KODY} />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    const { code_by_pk } = data;
    console.log(data);
    return (
      <LayoutM selectedField={selectedPanel.LISTA_KODY}>
        <CardPanel style={{ height: "200px" }}>
          <Title level={4}>UID: {code_by_pk.uid}</Title>
          <Title level={5}>Type: {code_by_pk.type}</Title>
          <span>ID: {code_by_pk.id}</span>
        </CardPanel>
        <GetSingleCodeProduct id={id} title={"Produkt kodu"} />
        <GetSingleCodeLocations id={id} title={"Lokacje kodu"} />
      </LayoutM>
    );
  }
};

export default Product;
