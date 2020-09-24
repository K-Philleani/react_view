import React from "react";
import { Redirect } from 'react-router-dom'
import Home from '../layout/Home'
import First from '../layout/First/index.jsx'

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
    path: "/first",
    exact: true,
    component: First
  }


]