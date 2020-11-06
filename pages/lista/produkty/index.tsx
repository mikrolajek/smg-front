import React, { useState } from "react";
// import styled from "styled-components";
import { useQuery } from "@apollo/client";
import LayoutM from "../../../components/universal-components/LayoutM";
import { Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { useRouter } from "next/router";
import { CardPanel } from "../../../components/styledComponents/components";
import { GET_PRODUCTS } from "../../../utils/graphqlQSM/queries";
import Link from "next/link";
import { LoaderInDash } from "../../../components/universal-components/Loaders";
import getColumnSearchProps from "../../../utils/GetColumnsSearchProps";

// const CenterFlexItem = styled.div`
//   margin: auto;
// `;

const Produkty = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  const getColumnSearchProp: (arg: string) => any = getColumnSearchProps(
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn
  );

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProp("id"),
    },
    {
      title: "Produkt",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProp("name"),
    },
    {
      title: "Zasób",
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <span>
          <Link href={`/lista/produkty/${text}`}>
            <a>Więcej&nbsp;&gt;</a>
          </Link>
        </span>
      ),
    },
  ];

  if (loading) {
    return <LoaderInDash selectedField={selectedField.LISTA_ODDZIALY} />;
  }

  if (error) {
    const router = useRouter();
    router.push("/");
  }

  if (!loading) {
    const dataSourcev2 = data.product.map((product: any) => ({
      name: product.name,
      id: product.id,
      key: `${product.id}`,
    }));

    // console.log(dataSourcev2);
    return (
      <LayoutM selectedField={selectedField.LISTA_PRODUKTY}>
        <CardPanel>
          <h1>Produkty</h1>
          <Table dataSource={dataSourcev2} columns={columns} />
        </CardPanel>
      </LayoutM>
    );
  }
};
export default Produkty;
