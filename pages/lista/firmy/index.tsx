import React from "react";
import styled from "styled-components";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import LayoutM from "../../../components/LayoutM";
import { Select, Button, Spin, Form, Input, Table } from "antd";
import selectedField from "../../../utils/selectedPanel";
import { GET_ODDZIALY_SUB } from "../../../utils/graphqlQSM/subscriptions";
import { CardPanel } from "../../../components/styledComponents/components";
import { useRouter } from "next/router";
import { GET_COMPANIES } from "../../../utils/graphqlQSM/queries";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import { ADD_BRANCH } from "../../../utils/graphqlQSM/mutations";

const Firmy = () => {
  // const CardPanel = styled.div`
  //   background-color: white;
  //   padding: 50px;
  //   border-radius: 5px;
  //   max-width: 500px;
  // `;
  const { loading, error, data } = useQuery(GET_COMPANIES);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

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
      <LayoutM selectedField={selectedField.LISTA_FIRMY}>
        <CardPanel>
          <Spin size="large" style={{ width: "100%" }} />
        </CardPanel>
      </LayoutM>
    );
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
export default Firmy;
