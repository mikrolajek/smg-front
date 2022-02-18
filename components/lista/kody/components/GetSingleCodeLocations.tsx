import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../universal-components/Loaders";
import { CardPanel } from "../../../styledComponents/components";
import { GET_SINGLE_CODE_LOCATIONS } from "../../../../utils/graphqlQSM/queries";
import { Typography } from "antd";
const { Title } = Typography;
// GET_SINGLE_PRODUCT_CODES,
// import dayjs from "dayjs";

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
    title: "Firma",
    dataIndex: "firma",
    key: "firma",
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

export const GetSingleCodeLocations = ({ id, title }: IProps) => {
  const { loading, error, data } = useQuery(GET_SINGLE_CODE_LOCATIONS, {
    variables: { id: id },
  });

  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  const ds = data.code_by_pk.groups.map((item: any) => ({
    id: item?.location.id,
    adres: item?.location.address,
    firma: item?.location.company.name,
    key: `${item?.location.id}`,
  }));

  return (
    <CardPanel style={{ maxWidth: " 700px" }}>
      <Title level={2}>{title}</Title>
      <Table dataSource={ds} columns={columns} />
    </CardPanel>
  );
};

export default GetSingleCodeLocations;
