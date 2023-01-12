import { Help } from '@mui/icons-material'
import { FormControlLabel, Switch } from '@mui/material'
import React from 'react'
import './Consultation.css'
import LineChart from '../ChartComp/LineChart'

function Cosultation() {
    return (
        <div className='cosultationComp'>
            <div className='consultationComp-head'>
                <span className='consultationComp-head-text'>consultation History</span>
                <div className='sideTexty'>
                    <span className='consultationComp-head-text-2'>KR4ALL Visits</span>
                    <span className='consultationComp-FormControlLabel'>
                        <FormControlLabel sx={{
                            width: '20px'
                        }} control={<Switch defaultChecked />} label="All" />
                    </span>
                    <span className='consultationComp-Help'>
                        <Help sx={{
                            color: '#29375F4D'
                        }} />
                    </span>
                </div>


            </div>
            <div className='linee69'></div>
            <div className='chartComp-1'><LineChart /></div>
            <div className='lowerComps-3'>
                <div className='lowerComps-3-1'>
                    <div className='lowerComps-3-1-t1'>In-person Visit</div>
                    <div className='lowerComps-3-1-t2'>14 min Avg time</div>
                </div>
                <div className='lowerComps-3-2'>
                    <div className='lowerComps-3-1-t1-2'>Online Visit</div>
                    <div className='lowerComps-3-1-t2-2'>18 min Avg time</div>
                </div>
                <div className='lowerComps-3-3'>
                    <div className='lowerComps-3-1-t1-3'>Anytime Consult</div>
                    <div className='lowerComps-3-1-t2-3'>20 min Avg time</div>
                </div>
            </div>

        </div>
    )
}

export default Cosultation