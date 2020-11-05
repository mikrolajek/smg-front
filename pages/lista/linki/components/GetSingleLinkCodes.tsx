import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../../components/LoaderInDash";
import { CardPanel } from "../../../../components/styledComponents/components";
import { GET_SINGLE_LINK_CODES } from "../../../../utils/graphqlQSM/queries";

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
    title: "Typ",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Uid",
    dataIndex: "uid",
    key: "uid",
  },
  {
    title: "Zasób",
    dataIndex: "id",
    key: "id",
    render: (text: string) => (
      <span>
        <Link href={`/lista/kody/${text}`}>
          <a>Więcej&nbsp;&gt;</a>
        </Link>
      </span>
    ),
  },
];
export const GetSingleLinkCodes = ({ id, title }: IProps) => {
  const { loading, error, data } = useQuery(GET_SINGLE_LINK_CODES, {
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
    id: item.code.id,
    type: item?.code.type,
    uid: item.code.uid,
    key: `${item.code.id}`,
  }));

  return (
    <CardPanel style={{ maxWidth: " 700px" }}>
      <h1>{title}</h1>
      <Table dataSource={ds} columns={columns} />
    </CardPanel>
  );
};

export default GetSingleLinkCodes;
