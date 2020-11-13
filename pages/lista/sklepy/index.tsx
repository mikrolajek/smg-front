import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import LayoutM from "../../../components/universal-components/LayoutM";
import { Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { GET_LOCATIONS } from "../../../utils/graphqlQSM/queries";
import { useRouter } from "next/router";
import { CardPanel } from "../../../components/styledComponents/components";
import { LoaderInDash } from "../../../components/universal-components/Loaders";
import Link from "next/link";
import getColumnSearchProps from "../../../utils/GetColumnsSearchProps";
import { Typography } from "antd";
const { Title } = Typography;

const Sklepy = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  const getColumnSearchProp: (arg: string) => any = getColumnSearchProps(
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn
  );

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  const columns = [
    {
      title: "Sklep",
      dataIndex: "adres",
      key: "adres",
      ...getColumnSearchProp("adres"),
    },
    {
      title: "Firma",
      dataIndex: "firma",
      key: "firma",
      ...getColumnSearchProp("firma"),
    },
    {
      title: "Odnośnik ",
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <span>
          <Link href={`/lista/sklepy/[id]`} as={`/lista/sklepy/${text}`}>
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
    router.push("/login");
  }

  if (!loading) {
    const dataSourcev2 = data.location.map((location: any) => ({
      firma: location.company.name,
      adres: location.address,
      id: location.id,
      key: `${location.company.id}-${location.id}`,
    }));

    return (
      <LayoutM selectedField={selectedField.LISTA_ODDZIALY}>
        <CardPanel style={{ maxWidth: "600px", width: "500px" }}>
          <Title level={2}>Sklepy</Title>
          <Table dataSource={dataSourcev2} columns={columns} />
        </CardPanel>
      </LayoutM>
    );
  }
};
export default Sklepy;
