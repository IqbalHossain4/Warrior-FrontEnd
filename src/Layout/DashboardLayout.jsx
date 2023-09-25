import { Layout, Menu } from "antd";
import { useContext, useEffect, useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from './../providers/AuthProvider/AuthProvider';
import axios from "axios";

const DashboardLayout = () => {
  // const {user} = useContext(AuthContext)
  // console.log(user?.email);
  // useEffect(() => {
  //   axios.get(`https://warrior-beta.vercel.app/users/admin/${user?.email}`)
  //   .then((response) => {console.log(response)})
  // },[user])
  const isAdmin = false
  const isMentor = true
  const isStudent = false
  return (
    <div className="overflow-hidden">
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
          {
            isAdmin && <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to={'/dashboard'}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={'/dashboard/allHackathon'}>All Hackathon</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/dashboard/mentorDetails'}>Mentor Details</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={'/dashboard/studentDetails'}>Student Details</Link>
            </Menu.Item>
          </Menu>
          }
          {
            isMentor && <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to={'/dashboard'}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link>Post Hackathon</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/dashboard/manageHackathon'}>Manage Hackathons</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link>manage participants</Link>
            </Menu.Item>
          </Menu>
          }
          {
            isStudent && <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link>Current Hackathon</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/dashboard/studentDetails'}>Team Member</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link>Student Report</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link>Mentor List</Link>
            </Menu.Item>
          </Menu>
          }
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
    </div>
  );
};

export default DashboardLayout;
