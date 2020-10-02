import React, {useEffect, useState} from 'react'
import { Card, Table, Button, Modal, Form, Input, message } from 'antd'
import styled from './User.module.css'
import axios from '../../../axios'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

const User = () => {
  let [data, setData] = useState([])
  let [visible, setVisible] = useState(false)
  let [ form ] = Form.useForm()
  let [initVal, setInitVal] = useState({})
  const { confirm } = Modal;
  const layout = {
    labelCol: { span: 5},
    wrapperCol: { span: 15 },
  }

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = () => {
    axios({
      method: 'get',
      url: '/getAll',
    }).then(res => {
      if (res.code === 1) {
        setData(old => (res.userList))
      }
    })
  }

  const editCol = (record) => {
    setInitVal(record)
    showModal()
  }
  const showModal = () => {
    setVisible(true)
  }
  const closeModel = () => {
    setVisible(false)
  }
  const onFinish = values => {
    console.log('Success:', values);
  };
  const delAip = (record) => {
    axios({
      method: 'get',
      url: '/delete',
      params: {
        user_id: record.id
      }
    }).then(res => {
      if (res.code === 1) {
        message.success('删除成功')
        getInfo()
      } else {
        message.info('删除失败')
      }
    })
  }
  const deleteItem = record => {
    console.log(record)
    confirm({
      title: "删除",
      icon: <ExclamationCircleOutlined />,
      content: '确定删除此账号吗?',
      okText: '删除',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        delAip(record)
      },

    })

  }
  const columns = [
    {
      title: '用户账号',
      dataIndex: 'user_account',
    },
    {
      title: '用户手机号',
      dataIndex: 'user_phone',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => (
            <div>
              <Button
                  type="primary"
                  className={styled.edit}
                  icon={<EditOutlined />}
                  onClick={() => editCol(record)}
              >编辑</Button>
              <Button
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => deleteItem(record)}
              >删除</Button>
            </div>
      )
    }
  ]

  return (
      <div className={styled.com}>
          <Card className={styled.card}>
            <Table
              bordered
              title={()=> (<h3>用户账号信息表</h3>)}
              dataSource={data}
              columns={columns}
              rowKey={record => record.id}
            />
          </Card>
          <Modal
              title="详情"
              visible={visible}
              onCancel={closeModel}
              onOk={form.submit}
          >
            <Form
                {...layout}
                form={form}
                onFinish={onFinish}
                initialValues={initVal}
            >
              <Form.Item label="用户账号" name="user_account">
                <span>{initVal.user_account}</span>
              </Form.Item>
              <Form.Item label="用户手机号" name="user_phone">
                <Input></Input>
              </Form.Item>
              <Form.Item label="用户密码" name="user_pwd">
                <Input></Input>
              </Form.Item>
            </Form>
          </Modal>
      </div>
  )
}


export default User