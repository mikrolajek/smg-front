import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../universal-components/Loaders";
import { CardPanel } from "../../../styledComponents/components";
import { GET_SINGLE_COMPANY_PRODUCTS } from "../../../../utils/graphqlQSM/queries";
import { Typography } from "antd";
const { Title } = Typography;

interface IProps {
  id: string | string[];
  title: string;
}

interface col {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string) => JSX.Element;
}

const columns: col[] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Nazwa",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Zasób",
    dataIndex: "id",
    key: "id",
    render: (text: string) => (
      <span>
        <Link href={`/lista/produkty/[id]`} as={`/lista/produkty/${text}`}>
          <a>Więcej&nbsp;&gt;</a>
        </Link>
      </span>
    ),
  },
];

export const GetCompanyProductsSingle = ({ id, title }: IProps) => {
  const { loading, error, data } = useQuery(GET_SINGLE_COMPANY_PRODUCTS, {
    variables: { id: id },
  });

  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  const ds = data.group.map((item: any) => ({
    id: item.product.id,
    name: item.product.name,
    key: `${item.product.id}`,
  }));

  return (
    <CardPanel style={{ maxWidth: " 700px" }}>
      <Title level={2}>{title}</Title>
      <Table dataSource={ds} columns={columns} />
    </CardPanel>
  );
};

export default GetCompanyProductsSingle;
