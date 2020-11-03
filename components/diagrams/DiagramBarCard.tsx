import { BarDatum, ResponsiveBar } from "@nivo/bar";
import Title from "antd/lib/typography/Title";
import React from "react";
import styled from "styled-components";
import { CardPanel } from "../styledComponents/components";

interface props {
  title: string;
  data: BarDatum[];
  style?: React.CSSProperties;
  styleCardPanel?: React.CSSProperties;
}

export const BarDiagramCard = ({
  title,
  data,
  style,
  styleCardPanel,
}: props) => {
  return (
    <CardPanel style={{ maxWidth: "650px", ...style }}>
      <Title level={4} style={{ alignSelf: "center" }}>
        {title}
      </Title>
      <BigBoxForDiagrams style={styleCardPanel}>
        <ResponsiveBar
          axisLeft={{
            format: (e: any) => Math.floor(e) === e && e,
          }}
          colors={{ scheme: "paired" }}
          margin={{ top: 25, bottom: 25, right: 25, left: 25 }}
          data={data}
        />
      </BigBoxForDiagrams>
    </CardPanel>
  );
};

const BigBoxForDiagrams = styled.div`
  width: 600px;
  height: 250px;
  display: flex;
  align-self: center;
`;
