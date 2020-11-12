import React from "react";
import LayoutM from "../../components/universal-components/LayoutM";
import {
  HomeOutlined,
  TagOutlined,
  PieChartOutlined,
  LinkOutlined,
  PlusCircleOutlined,
  BankOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import CardWithIcon from "../../components/universal-components/CardWithIcon";

const Panel = () => {
  return (
    <>
      <Head>
        <title>Panel </title>
      </Head>
      <LayoutM selectedField={9}>
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
            title="Produkty"
            description="Lista wszystkich produktów"
            href="/lista/produkty"
          />
          <CardWithIcon
            Icon={HomeOutlined}
            title="Sklepy"
            description="Lista wszystkich sklepów"
            href="/lista/oddzialy"
          />
          <CardWithIcon
            Icon={BankOutlined}
            title="Sieci"
            description="Lista wszystkich sieci"
            href="/lista/firmy"
          />
          <CardWithIcon
            Icon={LinkOutlined}
            title="Linki"
            description="Lista aktywnych linków"
            href="/lista/linki"
          />
          <CardWithIcon
            Icon={PieChartOutlined}
            title="Raporty"
            description="Wszystkie raporty"
            href="/raporty"
          />
          <CardWithIcon
            Icon={PlusCircleOutlined}
            title="Dodaj"
            description="Panel dodawania"
            href="/dodaj"
          />
        </div>
      </LayoutM>
    </>
  );
};

export default Panel;
// #1890FF
