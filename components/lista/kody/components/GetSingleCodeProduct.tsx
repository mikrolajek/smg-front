import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../universal-components/Loaders";
import { CardPanel } from "../../../styledComponents/components";
import { GET_SINGLE_CODE_PRODUCT } from "../../../../utils/graphqlQSM/queries";
import { Typography } from "antd";
const { Title } = Typography;

export const GetSingleCodeProduct = ({
  id,
  title,
}: {
  id: string | string[];
  title: string;
}) => {
  const { loading, error, data } = useQuery(GET_SINGLE_CODE_PRODUCT, {
    variables: { id: id },
  });

  const colLocation = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Produkt",
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

  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    console.log(data);
    const dsLocation = data.code_by_pk.groups.map((item: any) => ({
      name: item?.product?.name,
      id: item.product.id,
      key: `${item.product.id}`,
    }));

    return (
      <CardPanel style={{ maxWidth: " 400px" }}>
        <Title level={2}>{title}</Title>
        <Table dataSource={dsLocation} columns={colLocation} />
      </CardPanel>
    );
  }

  return <></>;
};

export default GetSingleCodeProduct;
