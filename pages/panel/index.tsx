import React from "react";
import LayoutM from "../../components/universal-components/LayoutM";
import { Card } from "antd";
import {
  HomeOutlined,
  TagOutlined,
  PieChartOutlined,
  LinkOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import CardWithIcon from "../../components/universal-components/CardWithIcon";

const { Meta } = Card;

const Panel = () => {
  return (
    <>
      <Head>
        <title>Panel </title>
      </Head>
      <LayoutM selectedField={9}>
        <CardWithIcon
          Icon={TagOutlined}
          title="Produkty"
          description="Lista wszystkich produktów"
          href="/lista/produkty"
        />
        <CardWithIcon
          Icon={HomeOutlined}
          title="Oddziały"
          description="Lista wszystkich oddziałów"
          href="/lista/oddzialy"
        />
        <CardWithIcon
          Icon={LinkOutlined}
          title="Linki"
          description="Lista aktywnych linków"
          href="/lista/produkty"
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
      </LayoutM>
    </>
  );
};

export default Panel;
// #1890FF
