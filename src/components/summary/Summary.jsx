import React from 'react'
import './Summary.css'
import { Description } from '@mui/icons-material'
import { MenuItem, TextField, Typography } from '@mui/material'
import { CurrencyRupee } from '@mui/icons-material'

function Summary() {
    const options = [
        {
            value: 'PRK Hospital',
            label: 'PRK Hospital',
        },
        {
            value: 'ABC Hospital',
            label: 'ABC Hospital'
        }

    ]
    const Duration = [
        {
            value: 'Yesterday',
            label: 'Yesterday'
        },
        {
            value: 'Last 7 Days',
            label: 'Last 7 Days',

        },
        {
            value: 'Last 1 Month',
            label: 'Last 1 Month'
        },
        {
            value: 'Last 6 Months',
            label: 'Last 6 Months'
        }
    ]
    return (
        <>
            <div className='summaryDiv'>
                <div className='earnings'>
                    <Description className='icon1' sx={{ display: "inline", color: '#8394B8' }} />
                    <div className='element1'>
                        <Typography sx={{ display: "inline" }}>Total earnings</Typography>
                        <div>
                            <CurrencyRupee sx={{ fontWeight: 24 }} />
                            <Typography sx={{ display: 'inline', fontSize: 24 }} >4000</Typography>
                        </div>
                    </div>

                    <div className='element2'>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Unit"
                            defaultValue="PRK Hospital"
                            inputProps={{ style: { fontSize: 40, placeContent: 'PRK Hospital' } }}
                            InputLabelProps={{ style: { fontWeight: '600' } }}
                            sx={{
                                marginRight: "24px",
                                width: 183
                            }}>
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField


                            id="outlined-select-currency"
                            select
                            label="Time Duration"
                            defaultValue="Last 7 Days"
                            inputProps={{ style: { fontSize: 40, } }}
                            InputLabelProps={{ style: { fontWeight: '600' } }}
                            sx={{
                                borderRadius: '12px',
                                width: 183,
                            }}>
                            {Duration.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                </div>
            </div>
            <div className='summaryDiv2'>
                <div className='pending'>
                    <div className='item 1'>
                        <span>Appointments</span>
                        <span className='nums'>54</span>
                    </div>
                    <div className='item 2'>
                        <span>EMR Finalised</span>
                        <span className='nums'>47</span>
                    </div>
                    <div className='item 3'>
                        <span>Patient Registrations</span>
                        <span className='nums'>120</span>
                    </div>
                    <div className='item 4'>
                        <span >KR4ALL Visits</span>
                        <span className='nums'>30</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary