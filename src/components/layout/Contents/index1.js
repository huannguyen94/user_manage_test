import React,{memo } from 'react';
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
const Contents = memo(({ data,className  ,headerTable}) => {
	const columns = [
		{
			title: 'STT',
			dataIndex: 'index',
			align: 'Center',
			key: 'key',
			render:(text, record, index) => {
				return (
					<div>{index+1}</div>
				)
			}
		},
		{
		title: 'LÁI XE',
		dataIndex: 'tai_xe',
		key: 'name',
		render:(text) => {
			return (
					<div>{text?.tai_xe_name}</div>
			)
		}
		
		},
		{
		title: 'BKS',
		dataIndex: 'xe',
		key: 'name',
		render:(text) => {
			return (
					<div>{text?.xe_bien_kiem_soat}</div>
			)
		}
		},
		{
			title: 'CA',
			dataIndex: 'tc_ca',
			key: 'address',
			render:(text) => {
				return (
					<div>{text?.ten_ca}</div>
				)
			}
		},
		{
			title: 'GIỜ THỰC TẾ',
			dataIndex: 'gio_thuc_te',
			key: '',
		},
		{
			title: 'KHÁCH PHÁT SINH',
			dataIndex: 'khach_phat_sinh',
			key: 'khach_phat_sinh',
		},
		{
			title: 'NGƯỜI TẠO',
			dataIndex: 'update_by',
			key: 'update_by',
			render:(text) => {
				return (
					<div>{text?.adm_name}</div>
				)
			}
		},
		{
			title: 'GHI CHÚ',
			dataIndex: 'ghi_chu',
			key: 'ghi_chu',
		},
		{
			title: 'Chi tiết',
			dataIndex: 'address',
			key: 'address',
			render:()=> {
				return (
					<Tooltip placement="topLeft" title="Sửa">
						<Button type="link" icon={<EditOutlined />} />
					</Tooltip>
				)
			} 
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
        background-color: #000;
    }

    .ant-table-wrapper {
      margin: 20px 0px 0px 20px;
  }
`;

