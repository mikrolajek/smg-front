import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../universal-components/Loaders";
import { CardPanel } from "../../../styledComponents/components";
import { GET_SINGLE_COMPANY_LOCATIONS } from "../../../../utils/graphqlQSM/queries";
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
    title: "Adres",
    dataIndex: "adres",
    key: "adres",
  },
  {
    title: "Zasób",
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

export const GetCompanyBranchesSingle = ({ id, title }: IProps) => {
  const { loading, error, data } = useQuery(GET_SINGLE_COMPANY_LOCATIONS, {
    variables: { id: id },
  });

  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  const ds = data.company_by_pk.locations.map((item: any) => ({
    id: item.id,
    adres: item?.address,
    key: `${item.id}`,
  }));

  return (
    <CardPanel style={{ maxWidth: " 700px", height: "fit-content" }}>
      <Title level={2}>{title}</Title>
      <Table dataSource={ds} columns={columns} />
    </CardPanel>
  );
};

export default GetCompanyBranchesSingle;
