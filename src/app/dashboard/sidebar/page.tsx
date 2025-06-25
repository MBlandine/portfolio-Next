import React from 'react'
// import { NavItem } from '@/types'
import {navItems} from '@/data/navItems';
import {iconMap} from '@/iconMap';
import Link from 'next/link';
import '@/index.css'

const Sidebar: React.FC = () => {
  return (
    <div className='list'>
      <h3>ALL BOARDS ({navItems.length})</h3>
    <ul>
    {navItems.map((item, index) =>(
        <li key={index} className='item'><Link href={item.to}>{iconMap[item.icon]} <span>{item.label}</span></Link></li>
        
        // <div key={index} className='nav-item'>
        //     {iconMap[item.icon]}
        //     <span>{item.label}</span>
        // </div>
    ))}
    </ul>
    </div>
  )
}

export default Sidebar