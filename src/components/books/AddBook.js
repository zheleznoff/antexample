import React from 'react';
import {  useDispatch } from 'react-redux';
import {
    message,
    Form,
    Input,
    Button,
    Breadcrumb,
    DatePicker
} from 'antd';
import { addBook } from '../../store/reducers/booksSlice'

const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 15,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
};

const key = 'updatable';
export const AddBook = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const onReset = () => {
        form.resetFields();
    };
    const onFinish = (values) => {
        // message.loading({ content: 'Загрузка...', key });
        // setTimeout(() => {
        //     message.success({ content: 'Запись добавлена!', key, duration: 2 });
        //     dispatch(addBook(values))
        // }, 1000);
        console.log(values)
    };
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Добавить книгу</Breadcrumb.Item>
            </Breadcrumb>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="name"
                    label="Название"
                    rules={[
                    {
                        required: true,
                        message: 'Необходимо указать название книги!'
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="genre"
                    label="Жанр"
                    rules={[
                    {
                        required: true,
                        message: 'Необходимо указать жанр!'
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="writer"
                    label="Писатель"
                    rules={[
                    {
                        required: true,
                        message: 'Необходимо указать писателя!'
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Дата издания"
                    name = 'date'
                    rules={[
                        {
                            required: true,
                            message: 'Необходимо указать писателя!'
                        },
                        ]}
                >
                    <DatePicker
                        placeholder = { 'Введите дату' }
                        format={ 'DD.MM.YYYY' }
                    />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginRight: '15px' }}
                    >
                        Добавить
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Сбросить
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
