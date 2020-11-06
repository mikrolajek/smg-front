import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../universal-components/Loaders";
import { CardPanel } from "../../../styledComponents/components";
import { GET_SINGLE_LINK_LOCATIONS } from "../../../../utils/graphqlQSM/queries";
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
        <Link href={`/lista/oddzialy/${text}`}>
          <a>Więcej&nbsp;&gt;</a>
        </Link>
      </span>
    ),
  },
];

export const GetLSingleLinkLocations = ({ id, title }: IProps) => {
  const { loading, error, data } = useQuery(GET_SINGLE_LINK_LOCATIONS, {
    variables: { id: id },
  });

  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    const router = useRouter();
    router.push("/");
  }

  const ds = data.link_by_pk.groups.map((item: any) => ({
    id: item?.location.id,
    adres: item?.location.address,
    firma: item?.location.company.name,
    key: `${item?.location.id}`,
  }));

  return (
    <CardPanel style={{ maxWidth: " 700px" }}>
      <h1>{title}</h1>
      <Table dataSource={ds} columns={columns} />
    </CardPanel>
  );
};

export default GetLSingleLinkLocations;
