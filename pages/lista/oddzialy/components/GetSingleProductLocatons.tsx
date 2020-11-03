import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../../components/LoaderInDash";
import { CardPanel } from "../../../../components/styledComponents/components";
import { GET_SINGLE_LOCATION_PRODUCTS } from "../../../../utils/graphqlQSM/queries";

export const GetSingleLocationProducts = ({
  id,
  title,
}: {
  id: string | string[];
  title: string;
}) => {
  const { loading, error, data } = useQuery(GET_SINGLE_LOCATION_PRODUCTS, {
    variables: { id: id },
  });

  const colLocation = [
    {
      title: "Id",
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
          <Link href={`/lista/produkty/${text}`}>
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
    router.push("/");
  }

  if (!loading) {
    console.log(data);
    const dsLocation = data.location_by_pk.groups.map((item: any) => ({
      name: item?.product?.name,
      id: item.product.id,
      key: `${item.product.id}`,
    }));

    return (
      <CardPanel style={{ maxWidth: " 400px" }}>
        <h1>{title}</h1>
        <Table dataSource={dsLocation} columns={colLocation} />
      </CardPanel>
    );
  }

  return <></>;
};

export default GetSingleLocationProducts;
