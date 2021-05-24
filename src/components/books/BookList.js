import React from 'react';
import { Breadcrumb,Table } from 'antd';
import { useSelector } from 'react-redux'

const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Жанр',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Писатель',
      dataIndex: 'writer',
      key: 'writer',
    },
];

export const BookList = () => {
    const { books } = useSelector(state => state.books)
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Книги</Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={books} columns={columns} />
        </>
    )
}
