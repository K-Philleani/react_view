import React, {Fragment, useState} from 'react'
import { Menu } from 'antd'
import styled from './MenuTab.module.css'
import { useHistory } from "react-router-dom";


const MenuTab = () => {
  const history = useHistory()
  let [selectIndex, setSelectIndex] = useState('')
  const changeClick = e => {
    setSelectIndex(e.key)
    history.push(e.key)
  }
  return (
      <Fragment>
        <Menu
            onClick={changeClick}
            className={styled.menu}
            defaultSelectedKeys={[selectIndex]}
        >
          <Menu.ItemGroup key="g1" title="管理员权限">
            <Menu.Item key="/admin/user">账号管理</Menu.Item>
            <Menu.Item key="/admin/data">数据</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Fragment>
  )
}

export default MenuTab
