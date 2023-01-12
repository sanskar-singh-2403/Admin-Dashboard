import React from 'react'
import './Appointments.css'
import { Help, Boy, PendingActions, ElectricBolt, Videocam, East, WatchLater } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import imgx1 from './Ellipse.png'
import imgx2 from './Ellipse20.png'

function Appointments() {
    return (
        <div className='appointmentComp'>
            <div className='comp1'>
                <span>APPOINTMENTS</span>
                <span>
                    <Help sx={{
                        color: '#29375F66',
                        fontSize: '18px',
                        marginLeft: '200px'
                    }} />
                </span>
            </div>

            <hr></hr>

            <div className='comp2'>
                <span className='left'>Waiting Queue (6)</span>
                <span className='right'>View Queue</span>
                <div className='list'>
                    <div className='item1'>
                        <div className='first'>
                            <Avatar src={imgx1} />
                        </div>
                        <div className='second'>
                            <div className='name'>Prajesh</div>
                            <div className='nameLower'>
                                <Boy />
                                <span className='type'>In Person • <span className='time'>2:20 pm</span></span>
                            </div>
                        </div>
                        <div className='third'>
                            <span className='icon2'>
                                <PendingActions fontSize='8px' color='error' />
                            </span>
                            <span className='text1 part2'>To be finalized</span>
                        </div>
                    </div>
                    <div className='item2'>
                        <div className='first'>
                            <Avatar src={imgx2} />
                        </div>
                        <div className='second'>
                            <div className='name'>Risha Mahin</div>
                            <div className='nameLower'>
                                <ElectricBolt sx={{ fontSize: '18px' }} />
                                <span className='type'>Anytime Consultation • <span className='time'>2:30 pm</span></span>
                            </div>
                        </div>
                        <div className='third part'>
                            <span className='icon2'>
                                <WatchLater fontSize='8px' color='#965E0066' />
                            </span>
                            <span className='text1'>Waiting • 40 min</span>
                        </div>
                    </div>
                    <div className='item3'>
                        <div className='first'>
                            <Avatar src=''>RK</Avatar>
                        </div>
                        <div className='second'>
                            <div className='name'>Riju K</div>
                            <div className='nameLower'>
                                <Videocam sx={{ fontSize: '18px', marginLeft: '6px', marginRight: '3px', marginTop: '4px' }} />
                                <span className='type'>Video Consultation • <span className='time'>2:40 pm</span></span>
                            </div>
                        </div>
                        <div className='third part'>
                            <span className='icon2'>
                                <WatchLater fontSize='8px' color='#965E0066' />
                            </span>
                            <span className='text1'>Waiting • 40 min</span>
                        </div>
                    </div>
                    <div className='item4'>
                        <div className='first'>
                            <Avatar src='D:\React\ampcome-tech-proj\images\Ellipse.png' >SS</Avatar>
                        </div>
                        <div className='second'>
                            <div className='name'>Prajesh</div>
                            <div className='nameLower'>
                                <Videocam sx={{ fontSize: '18px', marginLeft: '6px', marginRight: '3px', marginTop: '4px' }} />
                                <span className='type'>Video Consultation • <span className='time'>2:40 pm</span></span>
                            </div>
                        </div>
                        <div className='third part'>
                            <span className='icon2'>
                                <WatchLater fontSize='8px' color='#965E0066' />
                            </span>
                            <span className='text1'>Waiting • 40 min</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='line1'></hr>
            <div className='comp3'>
                <span className='text5'>View all Appointments </span>
                <span className='iconEast'>
                    <East sx={{
                        cursor: 'pointer',
                        fontSize: '20px',
                        marginTop: '3px',
                        color: '#FC6964'
                    }} />
                </span>
            </div>
        </div>
    )
}

export default Appointments