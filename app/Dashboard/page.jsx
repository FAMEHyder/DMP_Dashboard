"use client"

import React from 'react'
import Sale from '../../components/Dashboard/firstBox.jsx';
import Pi from '../../components/Dashboard/pi&barcharts.jsx';
import Users from '../../components/Dashboard/users.jsx';
import Pages from '../../components/Dashboard/FBpages.jsx';

export default function page() {
  return (
    <div  sx={{width:'100%',border:'2px solid red'}}>
      <Sale />
      <Pi />
      <Users />
      <Pages />
    </div>
  )
}
