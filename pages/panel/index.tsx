import React from "react";
import LayoutM from "../../components/universal-components/LayoutM";
import { Spin } from "antd";
import { gql, useQuery } from "@apollo/client";
import { CardPanel } from "../../components/styledComponents/components";
import { Query_Root } from "../../src/generated/graphql";
import Head from "next/head";

// const CardPanel = styled.div`
//   background-color: white;
//   padding: 50px;
//   border-radius: 5px;
// `;

const GET_CODES = gql`
  query {
    code {
      type
      uid
    }
  }
`;

const Panel = () => {
  const { loading, error, data } = useQuery<Query_Root>(GET_CODES);

  if (error) {
    console.log(error);
    return <h1>Error, check console</h1>;
  }

  if (loading) {
    return (
      <>
        <Head>
          <title>Panel </title>
        </Head>
        <LayoutM selectedField={1}>
          <CardPanel>
            <Spin size="large" />
          </CardPanel>
        </LayoutM>
      </>
    );
  }

  if (error) {
    console.log(error);
  }
  if (!loading) {
    return (
      <>
        <Head>
          <title>Panel </title>
        </Head>
        <LayoutM selectedField={1}>
          <CardPanel>
            {data?.code.map((item) => (
              <>
                <h1>{item.type}</h1>
                <h2>{item.uid}</h2>
              </>
            ))}
          </CardPanel>
        </LayoutM>
      </>
    );
  }
  // data.code.map((item: any) => console.log(item));
};

export default Panel;
