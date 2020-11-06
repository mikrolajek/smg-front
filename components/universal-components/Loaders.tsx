import React from "react";
import LayoutM from "./LayoutM";
import { Spin } from "antd";
import { CardPanel } from "../styledComponents/components";
import styled from "styled-components";

const CenterFlexItem = styled.div`
  margin: auto;
`;
interface props {
  selectedField: React.ReactText;
}

export const LoaderInDash = ({ selectedField }: props) => {
  return (
    <LayoutM selectedField={selectedField}>
      <CardPanel>
        <CenterFlexItem>
          <Spin size="large" />
        </CenterFlexItem>
      </CardPanel>
    </LayoutM>
  );
};

export const LoaderNoDash = () => {
  return (
    <CardPanel>
      <CenterFlexItem>
        <Spin size="large" />
      </CenterFlexItem>
    </CardPanel>
  );
};
