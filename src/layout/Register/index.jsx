import React, {Fragment} from "react";
import { Form, Input, Button, message, Modal } from 'antd'
import styled from './Register.module.css'
import axios from '../../axios'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

const Register = (props) => {
  const [ from ] = Form.useForm()
  const submit = values => {
    let { username, password, phone} = values
    axios({
      method: 'post',
      url: '/create',
      data: {
        userAccount: username,
        userPwd: password,
        userPhone: phone
      }
    }).then(res => {
      if (res.code === -1) {
        message.info(res.message)
        return
      }
      if (res.code === 1) {
        Modal.success({
          title: '注册成功',
          content: '账号注册成功',
          okText: '去登陆',
          onOk() {
            props.toLogin()
          },

        })
      }
    })
  }

  return (
      <Fragment>
        <Form
            {...layout}
            form={from}
            onFinish={submit}
        >
          <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入账号' }]}
              className={styled.input}
          >
            <Input placeholder="请输入注册账号" />
          </Form.Item>

          <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
              className={styled.input}
          >
            <Input.Password placeholder="请输入注册密码" />
          </Form.Item>

          <Form.Item
              label="确认密码"
              name="password_confirm"
              className={styled.input}
              rules={[
                  {
                    required: true,
                    message: '请输入确认密码'
                  },
                ({ getFieldValue }) => ({
                  validator(rule,value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject('两次密码输入不一致')
                  }
                })
                  ]}
          >
            <Input.Password placeholder="请输入确认注册密码" />
          </Form.Item>

          <Form.Item
              label="联系方式"
              name="phone"
              rules={[{ required: true, message: '请输入联系方式' }]}
              className={styled.input}
          >
            <Input placeholder="请输入联系方式" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className={styled.btn}>注册</Button>
        </Form>
        <span>已有账号</span>
        <span className={styled.login} onClick={props.toLogin}> 去登录</span>

      </Fragment>
  )
}

export default Register