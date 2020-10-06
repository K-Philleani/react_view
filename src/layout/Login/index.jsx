import React, {Fragment} from "react";
import styled from './Login.module.css'
import { Form, Input, Button, message } from 'antd'
import axios from '../../axios'
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

const Login = (props) => {
  const [ form ] = Form.useForm()
  const history = useHistory()
  const submit = values => {
    let { username, password } = values
    axios({
      method: 'post',
      url: '/login',
      data: {
        userAccount: username,
        userPwd: password,
      }
    }).then(res => {
      console.log(res)
      if (res.code === -1) {
        message.info(res.message)
        return
      }
      if (res.code === 0) {
        message.info(res.message)
        return
      }
      if (res.code === 1) {
        history.push('/admin/user')
      }
    })
  }
  return (
      <Fragment>
        <Form
            {...layout}
            form={form}
            onFinish={submit}
        >
          <Form.Item
              label="账号"
              name="username"
              rules={[{required: true, message: "请输入账号"}]}
              className={styled.input}
          >
            <Input  placeholder="请输入登录账号" />
          </Form.Item>

          <Form.Item
              label="密码"
              name="password"
              rules={[{required: true, message: "请输入密码"}]}
              className={styled.input}
          >
            <Input.Password placeholder="请输入登录密码" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className={styled.btn}>登录</Button>
        </Form>
        <span>还没有账号？</span>
        <span className={styled.register} onClick={props.toRegister}>去注册</span>
      </Fragment>
  )
}


export default Login