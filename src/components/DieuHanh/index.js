import React,{memo } from 'react';
import './../../App.css';
import { Table, Tag, Space,Tooltip,Button   } from 'antd';
import styled from 'styled-components';
import {
    EditOutlined,
    DeleteOutlined,
    CloseOutlined,
    CheckOutlined,
    ExclamationCircleOutlined,
  } from "@ant-design/icons";
import PropTypes from "prop-types";
import App from '../../App';
const Contents = memo(({ data,className  ,headerTable}) => {
	const columns = [
		{
			title: 'Mã đơn',
			dataIndex: 'index',
			align: 'Center',
			key: 'key',
		},
		{
            title: 'Số kiện',
            dataIndex: 'tai_xe',
            key: 'name',
		},
		{
            title: 'VP nhận hàng',
            dataIndex: 'xe',
            key: 'name',
		},
		{
			title: 'NV Nhận hàng',
			dataIndex: 'tc_ca',
			key: 'address',
		},
		{
			title: 'Người gửi',
			dataIndex: 'gio_thuc_te',
			key: '',
		},
		{
			title: 'VP phát hàng',
			dataIndex: 'khach_phat_sinh',
			key: 'khach_phat_sinh',
		},
		{
			title: 'Người nhận',
			dataIndex: 'update_by',
			key: 'update_by',
		},
		{
			title: 'Tiền thu hộ COD',
			dataIndex: 'ghi_chu',
			key: 'ghi_chu',
		},
		{
			title: 'Chi tiết',
			dataIndex: 'address',
			key: 'address',
		},
	];
	return (
		<div className={className}  >
		<Table columns={columns} dataSource={data} />
		</div>
	)
})
Contents.propTypes = {
    className: PropTypes.any,
};

export default styled(Contents)`

.ant-table-thead {
	background:#FFC20E;
}

`;

