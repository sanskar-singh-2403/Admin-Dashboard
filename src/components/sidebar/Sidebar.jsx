import React, { useState } from 'react'
import './Sidebar.css'
import { Group, EventAvailable, EventNote, Settings, CurrencyRupee, Dashboard } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import imgx3 from './Rectangle3.png'
import { useNavigate } from 'react-router-dom'

function Sidebar({ current, setCurrent }) {
  const navigate = useNavigate()

  const handleClick = (name) => {
    if (name == "eventAvailable") {
      navigate({
        pathname: "/appointment",
      })
    }

    if (name == "dashboard") {
      navigate({
        pathname: "/",
      })
    }
    setCurrent(name);
  }

  const handleLogin = () => {
    navigate({
      pathname: "/login"
    })
  }

  return (
    <div className='sidebarComp'>
      <div className='lowerBar'>
        <div className={current == 'dashboard' ? 'lowerBar-icons' : 'none'} name='dashboard'
          onClick={() => handleClick('dashboard')}
        >
          <Dashboard color='primary' sx={{ fontSize: 33, color: '#8394B8', cursor: 'pointer' }} />
        </div>

        <div className={current == 'group' ? 'lowerBar-icons' : 'none'} name='group'
          onClick={() => handleClick('group')}
        >
          <Group color='primary' sx={{ fontSize: 33, color: '#8394B8', cursor: 'pointer' }} />
        </div>

        <div className={current == 'eventAvailable' ? 'lowerBar-icons' : 'none'} name='eventAvailable'
          onClick={() => handleClick('eventAvailable')}
        >
          <EventAvailable color='primary' sx={{ fontSize: 33, color: '#8394B8', cursor: 'pointer' }} />
        </div>

        <div className={current == 'currencyRupee' ? 'lowerBar-icons' : 'none'} name='currencyRupee'
          onClick={() => handleClick('currencyRupee')}
        >
          <CurrencyRupee className='iconBG' sx={{ fontSize: 33, color: '#203765', cursor: 'pointer' }} />
        </div>

        <div className={current == 'eventNote' ? 'lowerBar-icons' : 'none'} name='eventNote'
          onClick={() => handleClick('eventNote')}
        >
          <EventNote sx={{ fontSize: 33, color: '#8394B8', cursor: 'pointer' }} />
        </div>

        <div className={current == 'settings' ? 'lowerBar-icons' : 'none'} name='settings'
          onClick={() => handleClick('settings')}
        >
          <Settings color='primary' sx={{ fontSize: 33, color: '#8394B8', cursor: 'pointer' }} />
        </div>
        <div onClick={handleLogin} >
          <Avatar sx={
            {
              marginTop: '220px',
              marginLeft: '-8px',
              cursor: 'pointer'
            }

          } alt="Remy Sharp" src={imgx3} />
        </div>

      </div>
    </div>

  )
}

export default Sidebar

