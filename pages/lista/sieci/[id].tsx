import { useRouter } from "next/router";
import React from "react";
import LayoutM from "../../../components/universal-components/LayoutM";
import selectedPanel from "../../../utils/selectedPanel";
// import { GetSingleLocationProducts } from "../../../components/lista/oddzialy/components/GetSingleProductLocatons";
// import { CardPanel } from "../../../components/styledComponents/components";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_COMPANY } from "../../../utils/graphqlQSM/queries";
import { LoaderInDash } from "../../../components/universal-components/Loaders";
import GetCompanyProductsSingle from "../../../components/lista/firmy/components/GetCompanyProductsSingle";
import GetCompanyBranchesSingle from "../../../components/lista/firmy/components/GetCompanyBranchesSingle";

export const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(GET_SINGLE_COMPANY, {
    variables: { id: id },
  });

  if (loading) {
    return <LoaderInDash selectedField={selectedPanel.LISTA_FIRMY} />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    console.log(data);
    return (
      <LayoutM selectedField={selectedPanel.LISTA_FIRMY}>
        <GetCompanyProductsSingle id={id} title={"Produkty w sieci"} />
        <GetCompanyBranchesSingle id={id} title={"Sklepy w sieci"} />
      </LayoutM>
    );
  }
};

export default Product;

{
  /* <Title
level={1}
style={{ justifySelf: "center", width: "100%", textAlign: "center" }}>
Dodaj
</Title> */
}
