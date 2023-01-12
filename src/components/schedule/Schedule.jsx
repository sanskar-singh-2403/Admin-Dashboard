import React from 'react'
import './Schedule.css'
import {
    Help,
    Boy,
    PendingActions,
    ElectricBolt,
    Videocam,
    East,
    WatchLater,
    InfoSharp,
    DoDisturbAlt

} from '@mui/icons-material'

import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useState } from 'react'

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));





function Schedule() {
    const [val, setVal] = useState(true);

    const handler = () => {
        setVal(!val);
    }

    return (
        <div className='scheduleComp'>
            <div className='item-1'>
                <span>Schedule</span>
                <span>
                    <InfoSharp sx={{
                        color: '#29375F66',
                        fontSize: '18px',
                        marginLeft: '240px'
                    }} />
                </span>
            </div>

            <hr></hr>

            <div className='item-2'>
                <div className='itemTitle1' >
                    <span className='recieve'> Recieve </span>
                    <span className='type3'>
                        <ElectricBolt sx={{
                            fontSize: '18px'
                        }} />
                        <span>Anytime Consult</span>
                    </span>
                </div>
                <InfoSharp sx={{
                    position: 'absolute',
                    left: '220px',
                    paddingLeft: '8px',
                    marginRight: '71px',
                    color: '#29375F66',
                    fontSize: '15px',
                    top: '126px'
                }} />
                <div className='switch'>
                    <FormControlLabel
                        sx={{
                            position: 'absolute',
                            left: '300px',
                            top: '115px'
                        }}
                        onClick={handler}
                        control={<Android12Switch defaultChecked />}
                        label={val ? 'Yes' : 'No'}
                    />
                </div>
            </div>

            <div className='item-4'>
                <span className='item-text-1'>
                    TODAY  •  MONDAY
                </span>
                <div className='element-1'>
                    <span className='element-text'>9:00 AM - 9:40 AM  •  40 minutes</span>
                    <span>
                        <ElectricBolt sx={{
                            fontSize: '15px',
                            paddingTop: '10px',
                            paddingRight: '16px',
                            color: '#8394B8'
                        }} />
                        <span className='sideText'>Anytime</span>
                    </span>
                </div>
                <div className='space'></div>
                <div className='element-1'>
                    <span className='element-text'>3:30 PM - 7:30 PM  •  4 hours</span>
                    <span>
                        <Videocam sx={{
                            fontSize: '15px',
                            paddingTop: '10px',
                            paddingLeft: '23px',
                            paddingRight: '16px',
                            color: '#8394B8'

                        }} />
                        <span className='sideText'>Video</span>
                    </span>
                </div>
            </div>


            <div className='item-4'>
                <span className='item-text-1'>
                    TOMORROW  •  TUESDAY
                </span>


                <div className='element-1'>
                    <span className='element-text-sh'>12:20 PM - 6:30 PM  •  6 hours</span>
                    <Boy sx={{
                        color: '#8394B8',
                    }} />
                    <span className='boyIcon'>

                        <span className='sideText'>In Person</span>
                    </span>
                </div>

                <div className='space'></div>

                <div className='element-1'>
                    <span className='element-text'>9:00 AM - 9:40 AM  •  40 minutes</span>
                    <span>
                        <ElectricBolt sx={{
                            fontSize: '15px',
                            paddingTop: '10px',
                            paddingRight: '16px',
                            color: '#8394B8'
                        }} />
                        <span className='sideText'>Anytime</span>
                    </span>
                </div>

                <div className='space'></div>

                <div className='element-2'>
                    <span className='element-text-2'>9:00 AM - 9:40 AM  •  40 minutes</span>
                    <span>
                        <DoDisturbAlt color='error' sx={{
                            fontSize: '15px',
                            paddingTop: '10px',
                            paddingRight: '16px',
                            // color:'error'
                        }} />
                        <span className='sideText-1'>Block</span>
                    </span>
                </div>
                <div className='item-4'>
                    <span className='item-text-1-wed'>
                        WEDNESDAY
                    </span>
                </div>
            </div>

            <hr className='line2'></hr>

            <div className='item-3'>
                <span className='text5'>View all Schedule </span>
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

export default Schedule