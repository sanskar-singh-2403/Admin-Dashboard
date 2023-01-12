import React from 'react'
import './Activity.css'
import { Notifications, ManageAccounts, ListAlt, SecurityUpdate } from '@mui/icons-material'
import image from "./Rectangle.png"


function Activity() {
    return (
        <div className='activityComp'>
            <div className='hospitalImg'>
                <img className='Hospitalimg' src={image} />
            </div>
            <div className='actTitle'>
                <Notifications sx={{
                    color: '#5F88D2'
                }} />
                <span className='actText'>Activity</span>
            </div>
            <div className='actListDad'>
                <div className='actList'>
                    <ManageAccounts className='circleIcon' sx={{
                        marginLeft: '24px',
                        marginRight: '30px',
                        color: '#BFD2F3',
                        fontSize: '33px'
                    }} />
                    <div className='ListTextDad'>
                        <div className='ListText'>
                            <span className='ListText-1'>User Activity</span>
                            <span className='ListText-2'>  •  12:32</span>
                        </div>
                        <div className='ListTextp2'>
                            Vivek Kumar accepted the invitation
                        </div>
                    </div>
                </div>
                <div className='actList'>
                    <ManageAccounts className='circleIcon' sx={{
                        marginLeft: '24px',
                        marginRight: '30px',
                        color: '#BFD2F3',
                        fontSize: '33px'
                    }} />
                    <div className='ListTextDad'>
                        <div className='ListText'>
                            <span className='ListText-1'>User Activity</span>
                            <span className='ListText-2'>  •  8:16</span>
                        </div>
                        <div className='ListTextp2'>
                            Ritu M, blocked their calendar for 15th September
                        </div>
                    </div>
                </div>
                <div className='actList'>
                    <ListAlt className='circleIcon' sx={{
                        marginLeft: '24px',
                        marginRight: '30px',
                        color: '#BFD2F3',
                        fontSize: '33px'
                    }} />
                    <div className='ListTextDad'>
                        <div className='ListText'>
                            <span className='ListText-1'>Summary</span>
                            <span className='ListText-2'>  •  8:00</span>
                        </div>
                        <div className='ListTextp2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt
                        </div>
                    </div>
                </div>
                <div className='actList'>
                    <SecurityUpdate className='circleIcon' sx={{
                        marginLeft: '24px',
                        marginRight: '30px',
                        color: '#BFD2F3',
                        fontSize: '33px'
                    }} />
                    <div className='ListTextDad'>
                        <div className='ListText'>
                            <span className='ListText-1'>Application Update</span>
                            <span className='ListText-2'>  •  yesterday</span>
                        </div>
                        <div className='ListTextp2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt
                        </div>
                    </div>
                </div>
                <div className='actList'>
                    <ManageAccounts className='circleIcon' sx={{
                        marginLeft: '24px',
                        marginRight: '30px',
                        color: '#BFD2F3',
                        fontSize: '33px'
                    }} />
                    <div className='ListTextDad'>
                        <div className='ListText'>
                            <span className='ListText-1'>User Activity</span>
                            <span className='ListText-2'>  •  2 days ago</span>
                        </div>
                        <div className='ListTextp2'>
                            Vivek Kumar accepted the invitation
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Activity