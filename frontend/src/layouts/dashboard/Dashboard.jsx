import React, { useState, useEffect } from 'react'
import Sidenav from '../../components/sidenav/Sidenav'
import "./dashboard.css"
import welcome from '../../assets/dashboard/welcome.png';

import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState([]);

  const getDashboard = async () => {
    const response = await axios.get('api/dashboard')
    setDashboardData(response.data)
  }
  useEffect(() => {
    getDashboard()
  }, [])
  

  return (
    <>
      <div className='app-main-container'>
        <div className='app-main-left-container'><Sidenav /></div>
        <div className='app-main-right-container'>
          <Navbar />
          <div className='welcome-main-container'>
            <div className='welcome-left-container'>
              <p className='mng-text'>Welcome To</p>
              <p className='mng-text'>Task Management Area</p>
              <p className='mng-para'>In this task management hub, the system seamlessly orchestrates task creation, assignment, and tracking, ensuring projects move forward smoothly and collaboratively.</p>
            </div>
            <div className='welcome-right-container'>
              <img className='welcome-img' src={welcome} alt="welcome" />
            </div>
          </div>
        
        </div>
      </div>


    </>
  )
}

export default Dashboard