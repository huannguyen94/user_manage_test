import React,{useState} from "react";
import {
	Row,
	Col,
	Layout,
	Menu,
	Tooltip,
	Breadcrumb,
  } from "antd";

import 'antd/dist/antd.css';
import {
	HomeOutlined,
} from '@ant-design/icons';

import './../index.css';

import haivan from "../../../assets/images/logo.HV.svg";

const { Header, Sider, Content } = Layout;

const Headers = () => {

	return (
		<div style={{background: "#FFC20E", height: 50, width:"100%" }} >
			<Row gutter={15} className="d-flex align-items-center" style={{height:50 ,paddingLeft:15}} >
				<Col md={18} className="customerHome" style={{ display: 'flex', justifyContent: 'flex-start', flex: 1, alignItems: 'center', paddingRight: 20 }}>
					<Breadcrumb separator="/">
						<Breadcrumb.Item href="">
						<b><HomeOutlined /></b>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							<b>Trang chủ</b>
						</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
				<Col md={6} style={{ display: 'flex', justifyContent: 'flex-end', flex: 1, alignItems: 'center', paddingRight: 20 }}>
					Xin Chào Admin
					<Tooltip placement="topLeft" title="Đăng Xuất"> </Tooltip>
				</Col>
			</Row>
		</div>
	);
};

export default Headers;