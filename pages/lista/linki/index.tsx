import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import LayoutM from "../../../components/LayoutM";
import { Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { useRouter } from "next/router";
import { CardPanel } from "../../../components/styledComponents/components";
import { GET_LINKS } from "../../../utils/graphqlQSM/queries";
import Link from "next/link";
import { LoaderInDash } from "../../../components/LoaderInDash";
import getColumnSearchProps from "../../../utils/GetColumnsSearchProps";

const CenterFlexItem = styled.div`
  margin: auto;
`;

const Produkty = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  const getColumnSearchProp: (arg: string) => any = getColumnSearchProps(
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn
  );

  const { loading, error, data } = useQuery(GET_LINKS);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProp("id"),
    },
    {
      title: "Firma",
      dataIndex: "company",
      key: "company",
      ...getColumnSearchProp("company"),
    },
    {
      title: "Produkt",
      dataIndex: "product",
      key: "product",
      ...getColumnSearchProp("product"),
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
      ...getColumnSearchProp("url"),
      render: (linkUrl: string) => (
        <span>
          <a href={linkUrl}>{linkUrl}</a>
        </span>
      ),
    },
    {
      title: "Zasób",
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <span>
          <Link href={`/lista/linki/${text}`}>
            <a>Więcej&nbsp;&gt;</a>
          </Link>
        </span>
      ),
    },
  ];

  if (loading) {
    return <LoaderInDash selectedField={selectedField.LISTA_LINKI} />;
  }

  if (error) {
    const router = useRouter();
    router.push("/");
  }

  if (!loading) {
    const dataSource = data.group.map((item: any) => ({
      id: item.link.id,
      product: item.product.name,
      company: item.location.company.name,
      url: item.link.url,
      key: `${item.link.id}`,
    }));

    // console.log(dataSourcev2);
    return (
      <LayoutM selectedField={selectedField.LISTA_LINKI}>
        <CardPanel style={{ maxWidth: "800px" }}>
          <h1>Linki</h1>
          <Table dataSource={dataSource} columns={columns} />
        </CardPanel>
      </LayoutM>
    );
  }
};
export default Produkty;
