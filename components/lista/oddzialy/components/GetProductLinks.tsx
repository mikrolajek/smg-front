import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../universal-components/Loaders";
import { CardPanel } from "../../../styledComponents/components";
import { GET_SINGLE_PRODUCT_LINKS } from "../../../../utils/graphqlQSM/queries";
// GET_SINGLE_PRODUCT_CODES,
import dayjs from "dayjs";

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
    title: "Url",
    dataIndex: "url",
    key: "uid",
  },
  {
    title: "Ważny od",
    dataIndex: "from_date",
    key: "from_date",
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

export const GetProductLinks = ({ id, title }: IProps) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT_LINKS, {
    variables: { id: id },
  });

  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    if (!loading) {
      const ds = data.product_by_pk.groups.map((item: any) => ({
        id: item.link.id,
        url: item?.link.url,
        from_date: dayjs(item?.from_date).format("DD/MM/YYYY"),
        key: `${item.link.id}`,
      }));

      return (
        <CardPanel style={{ maxWidth: " 700px" }}>
          <h1>{title}</h1>
          <Table dataSource={ds} columns={columns} />
        </CardPanel>
      );
    }
  }

  return <></>;
};

export default GetProductLinks;
