import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import LayoutM from "../../../components/universal-components/LayoutM";
import { Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { CardPanel } from "../../../components/styledComponents/components";
import { useRouter } from "next/router";
import { GET_COMPANIES } from "../../../utils/graphqlQSM/queries";
import { LoaderInDash } from "../../../components/universal-components/Loaders";
import getColumnSearchProps from "../../../utils/GetColumnsSearchProps";
import Link from "next/link";
import { Typography } from "antd";
const { Title } = Typography;

const Sieci = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  const getColumnSearchProp: (arg: string) => any = getColumnSearchProps(
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn
  );

  const { loading, error, data } = useQuery(GET_COMPANIES);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProp("id"),
    },
    {
      title: "Sieć",
      dataIndex: "company",
      key: "company",
      ...getColumnSearchProp("company"),
    },
    {
      title: "Odnośnik ",
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <span>
          <Link href={`/lista/sieci/[id]`} as={`/lista/sieci/${text}`}>
            <a>Więcej&nbsp;&gt;</a>
          </Link>
        </span>
      ),
    },
  ];

  if (loading) {
    return <LoaderInDash selectedField={selectedField.LISTA_FIRMY} />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    const dataSourcev2 = data.company.map((company: any) => ({
      company: company.name,
      id: company.id,
      key: `${company.id}`,
    }));

    console.log(dataSourcev2);
    return (
      <LayoutM selectedField={selectedField.LISTA_FIRMY}>
        <CardPanel>
          <Title level={2}>Sieci</Title>
          <Table dataSource={dataSourcev2} columns={columns} />
        </CardPanel>
      </LayoutM>
    );
  }
};
export default Sieci;
