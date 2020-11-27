import React, { useEffect, useState } from "react";
import LayoutM from "../components/universal-components/LayoutM";
import Title from "antd/lib/typography/Title";
import selectedField from "../utils/selectedPanel";
import {
  // GET_ALL_PRODUCT_POPULARITY,
  // GET_COMPANY_ENGAGEMENT,
  // GET_LOCATION_ENGAGEMENT,
  // GET_PHONE_POPULARITY,
  // GET_PRODUCT_POPULARITY,
  // GET_TAG_POPULARITY,
  // PRODUCT_POPULARITY_WITH_DATES,
  GET_PHONE_POPULARITY_WITH_DATES,
  GET_COMPANY_ENGAGEMENT_WITH_DATES,
  GET_PRODUCT_POPULARITY_WITH_DATES,
  GET_LOCATION_ENGAGEMENT_WITH_DATES,
  GET_PRODUCT_POPULARITY_WITH_DATES_TOP_FIVE,
} from "../utils/graphqlQSM/queries";
import { DiagramCombo } from "../components/diagrams/DiagramCombo";
import DiagramComboBar from "../components/diagrams/DiagramComboBar";
import styled from "styled-components";
import { DatePicker } from "antd";
import { RangeValue } from "rc-picker/lib/interface";
import dayjs from "dayjs";
import { CardPanel } from "../components/styledComponents/components";

const Flex = styled.div`
  display: flex;
  /* overflow: auto; */
  flex-flow: wrap;
  flex-wrap: wrap;
`;

export const Raporty = () => {
  const { RangePicker } = DatePicker;

  const handleDateChange = (e: RangeValue<moment.Moment>): void => {
    // e?.map((item) => console.log(dayjs(item?.toString()).format("YYYY-MM-DD")));

    // @ts-ignore
    const [fromDate, toDate] = Array.from(e);
    setDateFrom(dayjs(fromDate?.toString()).format("YYYY-MM-DD"));
    setDateTo(dayjs(toDate?.toString()).format("YYYY-MM-DD"));
    // dayjs(item?.from_date).format("DD/MM/YYYY"),
  };

  const [dateFrom, setDateFrom] = useState<string>("2020-01-01");
  const [dateTo, setDateTo] = useState<string>(
    dayjs(Date.now()).format("YYYY-MM-DD")
  );
  const [dates, setDates] = useState<string[]>([dateFrom, dateTo]);
  const logDates = (): void => {
    console.log(dateFrom, "DATE FROM ####################");
    console.log(dateTo, "DATE TO ####################");
  };

  useEffect(() => {
    setDates([dateFrom, dateTo]);
    logDates();
  }, [dateFrom, dateTo]);
  return (
    <>
      <LayoutM selectedField={selectedField.RAPORTY}>
        <CardPanel>
          <Title level={4} style={{ alignSelf: "center" }}>
            Data
          </Title>
          <h1>Od: {dates[0]}</h1>
          <br />
          <h1>Do: {dates[1]}</h1>
          <RangePicker onChange={handleDateChange} />
        </CardPanel>
        <Flex>
          <DiagramCombo
            title={"Popularność telefonów"}
            gqlQuery={GET_PHONE_POPULARITY_WITH_DATES}
            dates={dates}
          />
          <DiagramCombo
            title={"Popularność tagów nfc/qr"}
            gqlQuery={GET_PHONE_POPULARITY_WITH_DATES}
            dates={dates}
          />

          <DiagramCombo
            title={"Ilość użytych kodów w danej sieci"}
            gqlQuery={GET_COMPANY_ENGAGEMENT_WITH_DATES}
            dates={dates}
          />

          <DiagramComboBar
            style={{ flex: "5 5 900px", padding: "35px 15px" }}
            styleCardPanel={{ minWidth: "900px" }}
            title={"Popularność sklepów"}
            barProps={{
              axisBottom: {
                tickRotation: 0,
                tickPadding: 5,
              },
            }}
            gqlQuery={GET_LOCATION_ENGAGEMENT_WITH_DATES}
            dates={dates}
          />
          <DiagramComboBar
            style={{ flex: "3 3 600px" }}
            styleCardPanel={{ minWidth: "600px" }}
            title={"Popularność produktów - TOP 5"}
            gqlQuery={GET_PRODUCT_POPULARITY_WITH_DATES_TOP_FIVE}
            dates={dates}
          />
          <DiagramComboBar
            styleCardPanel={{ minWidth: "800px" }}
            barProps={{
              axisBottom: {
                tickRotation: 90,
              },
              margin: { top: 15, bottom: 100, right: 25, left: 25 },
            }}
            style={{ flex: "5 5 800px", overflow: "auto" }}
            title={"Popularność produktów - ALL"}
            gqlQuery={GET_PRODUCT_POPULARITY_WITH_DATES}
            dates={dates}
          />
        </Flex>
      </LayoutM>
    </>
  );
  // }
};

export default Raporty;
