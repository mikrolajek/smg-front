import { PieDatum, ResponsivePie } from "@nivo/pie";
// import { ResponsiveBar } from "@nivo/bar";
import Title from "antd/lib/typography/Title";
import React from "react";
import styled from "styled-components";
import { CardPanel } from "../styledComponents/components";

interface props {
  title: string;
  data: PieDatum[];
}

export const PieDiagramCard = ({ title, data }: props) => {
  return (
    <CardPanel>
      <Title level={4} style={{ alignSelf: "center" }}>
        {title}
      </Title>
      <BigBoxForDiagrams>
        <ResponsivePie
          colors={{ scheme: "paired" }}
          margin={{ top: 25, bottom: 25, right: 25, left: 25 }}
          data={data}
        />
      </BigBoxForDiagrams>
    </CardPanel>
  );
};

const BigBoxForDiagrams = styled.div`
  width: 330px;
  height: 250px;
  display: flex;
  align-self: center;
`;
