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

const theme: any = {
  // fontSize: 14,
  legends: { text: { fontSize: 14, fontWeight: "bold" } },
};

export const PieDiagramCard = ({ title, data }: props) => {
  return (
    <CardPanel style={{ flex: 1 }}>
      <Title level={4} style={{ alignSelf: "center" }}>
        {title}
      </Title>
      <BigBoxForDiagrams>
        <ResponsivePie
          colors={{ scheme: "paired" }}
          slicesLabelsTextColor={"#000000"}
          padAngle={1}
          innerRadius={0.35}
          cornerRadius={5}
          theme={{
            labels: {
              text: {
                fontSize: 14,
                fontWeight: 600,
              },
            },
          }}
          margin={{ top: 25, bottom: 25, right: 25, left: 25 }}
          data={data}
        />
      </BigBoxForDiagrams>
    </CardPanel>
  );
};

const BigBoxForDiagrams = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  align-self: center;
`;
