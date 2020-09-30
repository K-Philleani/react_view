import React from 'react'
import styled from './TabBar.module.css'
import { AppstoreOutlined } from '@ant-design/icons';

const TabBar = () => {

  return (
      <div className={styled.container}>
        <div className={styled.symbol}>
          <div className={styled.logo}>
            <AppstoreOutlined />
          </div>
          <div>BiuBiu-System</div>
        </div>

      </div>
  )
}


export default TabBar