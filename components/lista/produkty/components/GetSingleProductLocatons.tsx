import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LoaderNoDash } from "../../../universal-components/Loaders";
import { CardPanel } from "../../../styledComponents/components";
import { GET_SINGLE_PRODUCT_LOCATIONS } from "../../../../utils/graphqlQSM/queries";

export const GetSingleProductLocations = ({
  id,
  title,
}: {
  id: string | string[];
  title: string;
}) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT_LOCATIONS, {
    variables: { id: id },
  });

  const colLocation = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Firma",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Adres",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
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

  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    if (!loading) {
      const dsLocation = data.product_by_pk.groups.map((item: any) => ({
        name: item?.location.company?.name,
        id: item.location.id,
        link: item.link.url,
        address: item.location.address,
        key: `${item.location.id}`,
      }));

      return (
        <CardPanel style={{ maxWidth: " 700px" }}>
          <h1>{title}</h1>
          <Table dataSource={dsLocation} columns={colLocation} />
        </CardPanel>
      );
    }
  }

  return <></>;
};

export default GetSingleProductLocations;
