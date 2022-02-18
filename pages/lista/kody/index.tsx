import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import LayoutM from "../../../components/universal-components/LayoutM";
import { Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { GET_CODES } from "../../../utils/graphqlQSM/queries";
import { useRouter } from "next/router";
import { CardPanel } from "../../../components/styledComponents/components";
import { LoaderInDash } from "../../../components/universal-components/Loaders";
import Link from "next/link";
import getColumnSearchProps from "../../../utils/GetColumnsSearchProps";
import { Typography } from "antd";
const { Title } = Typography;

const Kody = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  const getColumnSearchProp: (arg: string) => any = getColumnSearchProps(
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn
  );

  const { loading, error, data } = useQuery(GET_CODES);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProp("id"),
    },
    {
      title: "Kod",
      dataIndex: "uid",
      key: "uid",
      ...getColumnSearchProp("uid"),
    },
    {
      title: "Typ",
      dataIndex: "type",
      key: "type",
      ...getColumnSearchProp("type"),
    },
    {
      title: "Odnośnik ",
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <span>
          <Link href={`/lista/kody/[id]`} as={`/lista/kody/${text}`}>
            <a>Więcej&nbsp;&gt;</a>
          </Link>
        </span>
      ),
    },
  ];

  if (loading) {
    return <LoaderInDash selectedField={selectedField.LISTA_KODY} />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    const dataSourcev2 = data.code.map((code: any) => ({
      uid: code.uid,
      type: code.type,
      id: code.id,
      key: `${code.id}-${code.id}`,
    }));

    return (
      <LayoutM selectedField={selectedField.LISTA_KODY}>
        <CardPanel style={{ maxWidth: "600px", width: "500px" }}>
          <Title level={2}>Kody</Title>
          <Table dataSource={dataSourcev2} columns={columns} />
        </CardPanel>
      </LayoutM>
    );
  }
};
export default Kody;
