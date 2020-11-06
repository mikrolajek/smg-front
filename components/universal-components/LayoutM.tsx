import React, { useState, ReactNode } from "react";
import Link from "next/link";
import { Layout, Menu, Breadcrumb } from "antd";

import {
  PlusOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { Typography } from "antd";
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type TitleFontSize = 1 | 2 | 3 | 4;
type IProps = {
  children?: ReactNode;
  selectedField: number | string;
};

const LayoutM = ({ children, selectedField }: IProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [level, setLevel] = useState<TitleFontSize>(1);
  const router = useRouter();

  router.pathname;
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
          <Menu
            selectedKeys={[`${selectedField}`]}
            theme="dark"
            defaultSelectedKeys={[`${selectedField}`]}
            mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link href="/">Zarządzaj</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
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
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px", backgroundColor: "fff" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
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
