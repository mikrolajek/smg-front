import React from "react";
import { useQuery } from "@apollo/client";
import LayoutM from "../../../components/universal-components/LayoutM";
import { Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { CardPanel } from "../../../components/styledComponents/components";
import { useRouter } from "next/router";
import { GET_COMPANIES } from "../../../utils/graphqlQSM/queries";
import { LoaderInDash } from "../../../components/universal-components/Loaders";

const Firmy = () => {
  // const CardPanel = styled.div`
  //   background-color: white;
  //   padding: 50px;
  //   border-radius: 5px;
  //   max-width: 500px;
  // `;
  const { loading, error, data } = useQuery(GET_COMPANIES);

  const columns = [
    {
      title: "Oddział",
      dataIndex: "branchAddress",
      key: "branchAddress",
    },
    {
      title: "Firma",
      dataIndex: "companyName",
      key: "companyName",
    },
  ];

  if (loading) {
    return <LoaderInDash selectedField={selectedField.LISTA_FIRMY} />;
  }

  if (error) {
    const router = useRouter();
    router.push("/");
  }

  if (!loading) {
    const dataSourcev2 = data.company.map((company: any) => ({
      companyName: company.name,
      branchAddress: company.id,
      key: `${company.id}`,
    }));

    console.log(dataSourcev2);
    return (
      <LayoutM selectedField={selectedField.LISTA_FIRMY}>
        <CardPanel>
          <h1>Oddziały</h1>
          <Table dataSource={dataSourcev2} columns={columns} />
        </CardPanel>
      </LayoutM>
    );
  }
};
export default Firmy;
