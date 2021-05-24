import React from 'react';
import { Breadcrumb,Table } from 'antd';
import { useSelector } from 'react-redux'

const columns = [
    {
      title: 'Наименование',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Дата окончания сотрудничества',
      dataIndex: 'expiresAt',
      key: 'expiresAt',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
    },
];

export const SuppliersList = () => {
    const { suppliers } = useSelector(state => state.suppliers)
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Поставщики</Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={suppliers} columns={columns} />
        </>
    )
}
