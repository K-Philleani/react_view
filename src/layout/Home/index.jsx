import React, {useState} from 'react';
import './index.css'
import { Card, Tabs } from 'antd'
import Login from '../Login'
import Register from '../Register'

const { TabPane } =  Tabs

const Home = () => {
  let [index, setIndex] = useState('login')
  const onChangeTab = (activeKey) => {
    setIndex(activeKey)
  }
  const toRegister = () => {
    setIndex('register')
  }
  const toLogin = () => {
    setIndex('login')
  }
  return (
      <div className="home-container">
        <div className="home-title">Welcome</div>
        <Card
            className="home-card"
        >
          <Tabs
              centered
              activeKey={index}
              onChange={onChangeTab}
          >
            <TabPane tab="登录" key="login">
              <Login toRegister={toRegister} />
            </TabPane>
            <TabPane tab="注册" key="register">
              <Register toLogin={toLogin} />
            </TabPane>
          </Tabs>
        </Card>
      </div>
  )
}

export default Home;