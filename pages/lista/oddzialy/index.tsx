import React from "react";
import styled from "styled-components";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import LayoutM from "../../../components/LayoutM";
import { Select, Button, Spin, Form, Input, Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { GET_COMPANIES } from "../../../utils/graphqlQSM/queries";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import { ADD_BRANCH } from "../../../utils/graphqlQSM/mutations";
import { GET_ODDZIALY_SUB } from "../../../utils/graphqlQSM/subscriptions";
import { CardPanel } from "../../../components/styledComponents/components";

const Oddzialy = () => {
  // const CardPanel = styled.div`
  //   background-color: white;
  //   padding: 50px;
  //   border-radius: 5px;
  //   max-width: 500px;
  // `;
  const { loading, error, data } = useSubscription(GET_ODDZIALY_SUB);

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
    return (
      <LayoutM selectedField={selectedField.LISTA_ODDZIALY}>
        <CardPanel>
          <Spin size="large" />
        </CardPanel>
      </LayoutM>
    );
  }

  if (error) {
    const router = useRouter();
    router.push("/");
  }

  if (!loading) {
    const dataSourcev2 = data.location.map((location: any) => ({
      companyName: location.company.name,
      branchAddress: location.address,
      key: `${location.company.id}-${location.id}`,
    }));

    console.log(dataSourcev2);
    return (
      <LayoutM selectedField={selectedField.LISTA_ODDZIALY}>
        <CardPanel>
          <h1>Oddziały</h1>
          {/* {data.branch.map((branch: any) => (
            <div key={`${branch.id}`} style={{ padding: "10px" }}>
              <h3>{branch.company.name}</h3>
              <h5>{branch.address}</h5>
            </div>
          ))} */}
          <Table dataSource={dataSourcev2} columns={columns} />
        </CardPanel>
      </LayoutM>
    );
  }
};
export default Oddzialy;
