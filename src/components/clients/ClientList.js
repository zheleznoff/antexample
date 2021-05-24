import React from 'react';
import { Breadcrumb,Table } from 'antd';
import { useSelector } from 'react-redux'

const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Возраст',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
    },
];

export const ClientList = () => {
    const dataSource = useSelector(state => state.clients.clients)
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Клиенты</Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={dataSource} columns={columns} />
        </>
    )
}
