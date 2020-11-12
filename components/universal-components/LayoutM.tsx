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
import { Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;
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

type TitleFontSize = 1 | 2 | 3 | 4;
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
    setLevel(level == 1 ? 4 : 1);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={handleOnCollapse}>
          <div
            style={{
              height: "60px",
              color: "white",
              textAlign: "center",
              fontWeight: 800,
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "middle",
              marginTop: "10px",
            }}
            className="logo">
            <Title level={level} style={{ color: "white" }}>
              Savoir
            </Title>
          </div>
          <StyledMenu
            selectedKeys={[`${selectedField}`]}
            theme="dark"
            defaultSelectedKeys={[`${selectedField}`]}
            mode="inline">
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
                <Link href="/dodaj/oddzial">Oddział</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link href="/dodaj/firme">Firmę</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Lista">
              <Menu.Item key="6">
                <Link href="/lista/produkty">Produkty</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link href="/lista/oddzialy">Oddzialy</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link href="/lista/firmy">Firmy</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link href="/lista/linki">Linki</Link>
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
              }}>
              <Link href="/login">Wyloguj</Link>
            </Menu.Item>
          </StyledMenu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px", backgroundColor: "fff" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {routePathSplit.map((path, index) => {
                const hrefPath = routePathSplit.slice(0, index + 1).join("/");
                return (
                  <Breadcrumb.Item key={index}>
                    <Link href={`/${hrefPath}`}>
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
          <Footer style={{ textAlign: "center" }}>Savoir Group</Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default LayoutM;
