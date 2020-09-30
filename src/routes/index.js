import React from "react";
import { Redirect } from 'react-router-dom'
import Home from '../layout/Home'
import Admin from '../layout/Admin/Home'
import User from '../layout/AdminComs/User'
import Data from '../layout/AdminComs/Data'

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    render: () => (
        <Redirect to={"/"} />
    )
  },
  {
    path: "/admin",
    component: Admin,
    routes: [
      {
        path: '/admin/user',
        component: User,
      },
      {
        path: '/admin/data',
        component: Data
      }
    ]
  }


]