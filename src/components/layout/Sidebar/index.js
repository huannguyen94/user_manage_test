import React,{useState} from "react";
import {
	Layout,
	Menu,
  } from "antd";

import 'antd/dist/antd.css';
import {
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	PicCenterOutlined,
	TeamOutlined,
	BarChartOutlined,
} from '@ant-design/icons';

import './../index.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import DieuHanh from "../../DieuHanh/index";

import haivan from "../../../assets/images/logo.HV.svg";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({className}) => {
	const [collapsed,setCollapsed] = useState(false);
		
	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className={className}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div style={{display:"flex",height:50}}>
					{ 
						collapsed ? "" : <div className="header" style={{width:"85%"}}><img alt="HAI VAN" className="logoHV" src={haivan} /></div>
					}
					<Header className="site-layout-background" style={{ padding: 0, left: 0,marginTop:-5}} onClick={toggle}>
						{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
						})}
					</Header>
				</div>

					
				<Menu  defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor:'#f0f2f5'}}>
					<Menu.Item  key="0" icon={<PicCenterOutlined />}>
						<Link to="/dieu_hanh">Điều hành</Link>
					</Menu.Item>
					<SubMenu className="sub-menu" key="sub1" icon={<AppstoreOutlined />} title="Đơn hàng">
						<Menu.Item key="1"><Link to="/nhan_hang">Nhận hàng</Link></Menu.Item>
						<Menu.Item key="2">Phát hàng</Menu.Item>
						<Menu.Item key="3">Kho tổng</Menu.Item>
					</SubMenu>
					<SubMenu className="sub-menu" key="sub2" icon={<AppstoreOutlined />} title="Đặt hàng">
						<Menu.Item key="4">Yêu cầu đặt hàng</Menu.Item>
						<Menu.Item key="5">Danh sách đơn gửi</Menu.Item>
						<Menu.Item key="6">Kho tổng</Menu.Item>
					</SubMenu>
					<SubMenu className="sub-menu" key="sub3" icon={<AppstoreOutlined />} title="Phát hàng tại nhà">
						<Menu.Item key="7">Danh sách phát</Menu.Item>
						<Menu.Item key="8">Bảng kê phát</Menu.Item>
						<Menu.Item key="9">Bàn giao văn phòng</Menu.Item>
						<Menu.Item key="10">Thu tiền shipper</Menu.Item>
					</SubMenu>
					<SubMenu className="sub-menu" key="sub4" icon={<AppstoreOutlined />} title="Vận hành">
						<Menu.Item key="11">Xe tuyến</Menu.Item>
						<Menu.Item key="12">Trung chuyển</Menu.Item>
						<Menu.Item key="13">Nhập hàng</Menu.Item>
						<Menu.Item key="14">Điều độ</Menu.Item>
						<SubMenu className="sub-menu2" key="sub5" title="CSKH">
							<Menu.Item key="11">Option 11</Menu.Item>
							<Menu.Item key="12">Option 12</Menu.Item>
						</SubMenu>
					</SubMenu>
				</Menu>
			</Sider>


		</div>
			
				
	);
};


export default styled(Sidebar)`
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
	background-color: #FFC20E;
	color:black;
	border-right: 3px solid #FFC20E;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected a{
	color:black;
}

.ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, 
.ant-menu-inline .ant-menu-item::after{
	border-right: 3px solid #FFC20E;
}

`;

