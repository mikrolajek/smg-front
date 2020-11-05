import React from "react";
import LayoutM from "../../components/LayoutM";
import { Spin } from "antd";
import { gql, useQuery } from "@apollo/client";
import { CardPanel } from "../../components/styledComponents/components";

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
  const { loading, error, data } = useQuery(GET_CODES);

  if (loading) {
    return (
      <LayoutM selectedField={1}>
        <CardPanel>
          <Spin size="large" />
        </CardPanel>
      </LayoutM>
    );
  }

  if (error) {
    console.log(error);
  }
  if (!loading) {
    return (
      <LayoutM selectedField={1}>
        <CardPanel>
          {data.code.map((item: any) => (
            <>
              <h1>{item.type}</h1>
              <h2>{item.uid}</h2>
            </>
          ))}
        </CardPanel>
      </LayoutM>
    );
  }
  // data.code.map((item: any) => console.log(item));
};

export default Panel;
