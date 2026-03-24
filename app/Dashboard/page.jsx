"use client"

import React from 'react'
import Sale from '../../components/Dashboard/firstBox.jsx';
import Pi from '../../components/Dashboard/pi&barcharts.jsx';
import Stock from '../../components/Dashboard/stock.jsx';
import SalesTarget from '../../components/Dashboard/saletarget.jsx';
import Pages from '../../components/Dashboard/FBpages.jsx';
import Recent from '../../components/Dashboard/recentsales.jsx';

export default function page() {
  return (
    <div  sx={{width:'100%',border:'2px solid red'}}>
      <Sale />
      <Pi />
      <Stock />
      <SalesTarget />
      <Pages />
      <Recent />
    </div>
  )
}
