import React from 'react'
import TabBar from '../../../components/TabBar'
import MenuTab from '../../../components/MenuTab'
import styled from './Home.module.css'
import { renderRoutes } from "react-router-config";

const Admin = (props) => {
  console.log(props)
  return (
      <div className={styled.container}>
        <TabBar />
        <div className={styled.content}>
          <MenuTab />
          <div className={styled.info}>
            { renderRoutes(props.route.routes) }
          </div>
        </div>



      </div>
  )
}


export default Admin