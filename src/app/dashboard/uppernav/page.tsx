import { dashboardItems } from '@/data/upnavItem'
import { iconMap } from '@/iconMap'
import Link from 'next/link'
import React from 'react';
import "@/index.css";

const  Uppernav: React.FC = () => {
  return (
    <div className='dashbaord'>
        <div>
            <h3>ADMIN</h3>
        </div>

        <div className='task'>
            <ul>
                {dashboardItems.map((item, index) =>(
                    <li key={index} className='item'>
                        <Link href={item.to}>{iconMap[item.icon]} <span>{item.label}</span></Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Uppernav