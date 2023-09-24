import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Layout>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <div>
            <p className="my-16 text-6xl">logo</p>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link>Courses</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/dashboard/studentDetails'}>Student Details</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link>Student Report</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link>Mentor List</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="text-white text-center"
            style={{
              padding: 0,
            }}
          >
            <Link to={'/'}><a className='text-xl hover:text-white'>Home</a></Link>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              className="h-screen text-black"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {/* content */}
           <Outlet/>
              {/* content */}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
