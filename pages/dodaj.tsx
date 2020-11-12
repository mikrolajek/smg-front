import LayoutM from "../components/universal-components/LayoutM";
import CardWithIcon from "../components/universal-components/CardWithIcon";
import { HomeOutlined, TagOutlined, BankOutlined } from "@ant-design/icons";
import React from "react";
// import { CardPanel } from "../components/styledComponents/components";
import { Typography } from "antd";
const { Title } = Typography;

export const Dodaj = () => {
  return (
    <LayoutM selectedField={9}>
      <Title
        level={1}
        style={{ justifySelf: "center", width: "100%", textAlign: "center" }}>
        Dodaj
      </Title>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <CardWithIcon
          Icon={TagOutlined}
          title="Dodaj Produkt"
          href="/dodaj/produkt"
        />
        <CardWithIcon
          Icon={HomeOutlined}
          title="Dodaj Oddział"
          href="/dodaj/oddzial"
        />
        <CardWithIcon
          Icon={BankOutlined}
          title="Dodaj firmę"
          href="/dodaj/firme"
        />
      </div>
    </LayoutM>
  );
};

export default Dodaj;
