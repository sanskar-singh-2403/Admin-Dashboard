
import React from 'react'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Summary from '../../components/summary/Summary';
import Appointments from '../../components/appointmentsFolder/Appointments';
import Schedule from '../../components/schedule/Schedule';
import Activity from '../../components/activity/Activity';
import Cosultation from '../../components/consultationHistory/Cosultation';


function Dashboard({ current, setCurrent }) {

  return (
    <div>
      <Header />
      <Sidebar current={current} setCurrent={setCurrent} />
      <Summary />
      <Appointments />
      <Schedule />
      <Activity />
      <Cosultation />
    </div>
  )
}

export default Dashboard