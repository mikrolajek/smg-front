import LayoutM from "../components/universal-components/LayoutM";
import CardWithIcon from "../components/universal-components/CardWithIcon";
import {
  HomeOutlined,
  TagOutlined,
  PieChartOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import React from "react";

export const Dodaj = () => {
  return (
    <LayoutM selectedField={9}>
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
        Icon={TagOutlined}
        title="Produkty"
        href="/dodaj/produkty"
      />
      <CardWithIcon
        Icon={TagOutlined}
        title="Produkty"
        href="/dodaj/produkty"
      />
    </LayoutM>
  );
};

export default Dodaj;
