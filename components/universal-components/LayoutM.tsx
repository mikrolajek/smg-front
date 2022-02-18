import React, { useState, ReactNode } from "react";
import Link from "next/link";
import { Layout, Menu, Breadcrumb } from "antd";
import Cookie from "js-cookie";
import {
  PlusOutlined,
  PieChartOutlined,
  // FileOutlined,
  TeamOutlined,
  DesktopOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
// import { Typography } from "antd";
import styled from "styled-components";
// import Image from "next/image";
// const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const StyledMenu = styled(Menu)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  &::before {
    display: flex;
  }
  &::after {
    display: flex;
  }
  &:last-child {
  }
`;

type TitleFontSize = 1 | 2 | 3 | 4 | 5;
type IProps = {
  children?: ReactNode;
  selectedField: number | string;
};

const LayoutM = ({ children, selectedField }: IProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [level, setLevel] = useState<TitleFontSize>(1);
  const router = useRouter();
  const routePathSplit = router.asPath.split("/").slice(1);
  const handleOnCollapse = () => {
    setCollapsed(!collapsed);
    setLevel(level == 1 ? 5 : 1);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={handleOnCollapse}>
          <div
            style={{
              display: "flex",
              height: "60px",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "10px",
            }}
            className="logo"
          >
            {/* <Title level={level} style={{ color: "white" }}>
              </Title> */}
            <img
              src="/logo/Samsung_wordmark.svg"
              alt="samsung logo"
              style={{ width: "100%", padding: "15px" }}
            />
          </div>
          <StyledMenu
            selectedKeys={[`${selectedField}`]}
            theme="dark"
            defaultSelectedKeys={[`${selectedField}`]}
            mode="inline"
          >
            {/* <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link href="/">Zarządzaj</Link>
            </Menu.Item> */}
            <Menu.Item key="9" icon={<DesktopOutlined />}>
              <Link href="/panel">Panel</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<PlusOutlined />} title="Dodaj">
              <Menu.Item key="3">
                <Link href="/dodaj/produkt">Produkt</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link href="/dodaj/sklep">Sklep</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link href="/dodaj/siec">Sieć</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Lista">
              <Menu.Item key="6">
                <Link href="/lista/produkty">Produkty</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link href="/lista/sklepy">Sklepy</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link href="/lista/sieci">Sieci</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link href="/lista/linki">Linki</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link href="/lista/kody">Kody</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <Link href="/raporty">Raporty</Link>
            </Menu.Item>
            <Menu.Item
              style={{ justifySelf: "flex-end" }}
              key="99"
              icon={<LogoutOutlined />}
              onClick={() => {
                console.log(
                  "PRZED localStorage",
                  localStorage.getItem("token")
                );
                console.log("PRZED", Cookie.get("token"));
                Cookie.remove("token");
                localStorage.removeItem("token");
                console.log("PO", Cookie.get("token"));
                console.log("PO localStorage", localStorage.getItem("token"));
              }}
            >
              <Link href="/login">Wyloguj</Link>
            </Menu.Item>
          </StyledMenu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              color: "white",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="/logo/savoir-logo.png"
              alt="samsung logo"
              style={{ height: "80%", marginRight: "40px" }}
            />
          </Header>
          <Content style={{ margin: "0 16px", backgroundColor: "fff" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {routePathSplit.map((path, index) => {
                const hrefPath = routePathSplit.slice(0, index + 1).join("/");
                return (
                  <Breadcrumb.Item key={index}>
                    <Link href={`/${hrefPath}`} as={`/${hrefPath}`}>
                      <a>{path}</a>
                    </Link>
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
            <div className="" style={{ display: "flex", flexWrap: "wrap" }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center", fontWeight: "lighter" }}>
            SAVOIR Group sp. z o.o., {new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default LayoutM;
