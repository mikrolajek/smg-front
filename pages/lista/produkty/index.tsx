import React from "react";
import styled from "styled-components";
import { useSubscription } from "@apollo/client";
import LayoutM from "../../../components/LayoutM";
import { Spin, Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { useRouter } from "next/router";
import { GET_ODDZIALY_SUB } from "../../../utils/graphqlQSM/subscriptions";
import { CardPanel } from "../../../components/styledComponents/components";
import { GET_PRODUCTS } from "../../../utils/graphqlQSM/queries";

const CenterFlexItem = styled.div`
  margin: auto;
`;

const Produkty = () => {
  const { loading, error, data } = useSubscription(GET_PRODUCTS);

  const columns = [
    {
      title: "Oddział",
      dataIndex: "branchAddress",
      key: "branchAddress",
    },
    {
      title: "Firma",
      dataIndex: "companyName",
      key: "companyName",
    },
  ];

  if (loading) {
    return (
      <LayoutM selectedField={selectedField.LISTA_PRODUKTY}>
        <CardPanel>
          <CenterFlexItem>
            <Spin size="large" />
          </CenterFlexItem>
        </CardPanel>
      </LayoutM>
    );
  }

  if (error) {
    const router = useRouter();
    router.push("/");
  }

  if (!loading) {
    const dataSourcev2 = data.product.map((product: any) => ({
      companyName: product.name,
      branchAddress: product.id,
      key: `${product.id}`,
    }));

    console.log(dataSourcev2);
    return (
      <LayoutM selectedField={selectedField.LISTA_PRODUKTY}>
        <CardPanel>
          {/* <div> */}
          <h1>Oddziały</h1>
          <Table dataSource={dataSourcev2} columns={columns} />
          {/* </div> */}
        </CardPanel>
      </LayoutM>
    );
  }
};
export default Produkty;
