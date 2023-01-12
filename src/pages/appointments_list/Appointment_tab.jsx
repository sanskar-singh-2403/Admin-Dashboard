import React from 'react'
import './Appointment_tab.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Button, TextField, IconButton, Menu } from '@mui/material'
import { Add, Search, Videocam, ElectricBolt, Boy, MoreVert } from '@mui/icons-material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const ddate = [
    {
        value: 'This Month',
        label: 'This Month',
    },
    {
        value: 'This Year',
        label: 'This Year',
    },
    {
        value: 'This Week',
        label: 'This Week',
    },

]


const Ttype = [
    {
        value: 'All',
        label: 'All'
    },
    {
        value: 'None',
        label: 'None'
    },

]


const ITEM_HEIGHT = 20;

function Appointment_tab({ current, setCurrent }) {


    const [date, setdate] = React.useState('');

    const handleChange = (event) => {
        setdate(event.target.value);
    };

    return (
        <>
            <Sidebar current={current} setCurrent={setCurrent} />
            <div className='appointmentsComp'>
                <div className='headerText'>
                    Appointments
                </div>
                <div className='secondary-Header'>
                    <div className='secondary-text'>List of booked appointments</div>
                    <Button sx={{
                        borderRadius: '12px',
                        width: '130px',
                        height: '40px'
                    }} className='secondaryBtn' variant='outlined' color='error'>
                        add
                        <Add sx={{ color: 'white', fontSize: '15px' }} className='addIconAPP' /> </Button>
                </div>

                <hr className='lineAPP'></hr>

                <div className='appSearch'>
                    <div className='SearchBar'>
                        <input type='text' className='inpuText-2' placeholder='Search by name, number '></input>
                        <Search className='SearchBarIcon' />
                    </div>
                    <div className='TextFieldSBs'>
                        <div className='TextFieldSBs-1'>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue="This Month"
                                sx={{
                                    width: '183px',
                                }}
                                InputLabelProps={{ style: { fontWeight: '600', borderColor: 'blue' } }}
                                InputProps={{ style: { fontWeight: '400' } }}
                            >
                                {ddate.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className='TextFieldSBs-1'>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Consultation Type"
                                defaultValue="All"
                                sx={{
                                    width: '183px',
                                }}
                                InputLabelProps={{ style: { fontWeight: '600', borderColor: 'blue' } }}
                                InputProps={{ style: { fontWeight: '400' } }}
                            >
                                {Ttype.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className='TextFieldSBs-1'>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Status"
                                defaultValue="All"
                                sx={{
                                    width: '183px',
                                }}
                                InputLabelProps={{ style: { fontWeight: '600', borderColor: 'blue' } }}
                                InputProps={{ style: { fontWeight: '400' } }}
                            >
                                {Ttype.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className='TextFieldSBs-1'>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Invoice"
                                defaultValue="All"
                                sx={{
                                    width: '183px',
                                }}
                                InputLabelProps={{ style: { fontWeight: '600', borderColor: 'blue' } }}
                                InputProps={{ style: { fontWeight: '400' } }}
                            >
                                {Ttype.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                </div>

                <div className='appointmentList'>
                    <div className='appointmentList-header'>

                        {/* orders */}

                        <div className='order-id'>
                            <div className='order-id-1'>Order</div>
                            <div className='order-id-2'>2422562</div>
                            <div className='order-id-3'>2429657</div>
                            <div className='order-id-4'>2422455</div>
                            <div className='order-id-5'>2421751</div>
                            <div className='order-id-6'>2422455</div>
                            <div className='order-id-7'>2421751</div>
                        </div>

                        {/* Patient */}

                        <div className='Patient'>
                            <div className='patient-1'>
                                <div className='patient-Text'>patient</div>
                                {/* <div className='patient-info'>26, F</div> */}
                            </div>
                            <div className='patient-2'>
                                <div className='patient-Text'>Risha Mahin</div>
                                <div className='patient-info'>26, F</div>
                            </div>
                            <div className='patient-3'>
                                <div className='patient-Text'>Riju K</div>
                                <div className='patient-info'>32, M</div>
                            </div>
                            <div className='patient-4'>
                                <div className='patient-Text'>Prajeesh</div>
                                <div className='patient-info'>47, M</div>
                            </div>
                            <div className='patient-5'>
                                <div className='patient-Text'>Nikita Gandhi</div>
                                <div className='patient-info'>29, F</div>
                            </div>
                            <div className='patient-6'>
                                <div className='patient-Text'>Darshan Singh</div>
                                <div className='patient-info'>36, M</div>
                            </div>
                            <div className='patient-7'>
                                <div className='patient-Text'>Risha Mahin</div>
                                <div className='patient-info'>19, F</div>
                            </div>
                        </div>
                        {/* Consultation */}

                        <div className='Consultation'>

                            <div className='Consultation-1'>
                                <div className='upper'>
                                    Consultation
                                </div>
                                {/* <div className='lower'></div> */}
                            </div>
                            <div className='Consultation-2'>
                                <div className='upper bb'>
                                    <Videocam sx={{
                                        fontSize: '20px',
                                        marginRight: '5px'
                                    }} />
                                    <span>Video</span>
                                </div>
                                <div className='lower'>First Consultation</div>
                            </div>
                            <div className='Consultation-3'>
                                <div className='upper bb'>
                                    <Videocam sx={{
                                        fontSize: '20px',
                                        marginRight: '5px'
                                    }} />
                                    <span>Video</span>
                                </div>
                                <div className='lower'>Follow-up</div>
                            </div>
                            <div className='Consultation-4'>
                                <div className='upper bb'>
                                    <ElectricBolt sx={{
                                        fontSize: '20px',
                                        marginRight: '5px'
                                    }} />
                                    <span>Anytime Consult</span>
                                </div>
                                <div className='lower'></div>
                            </div>
                            <div className='Consultation-5'>
                                <div className='upper bb'>
                                    <Videocam sx={{
                                        fontSize: '20px',
                                        marginRight: '5px'
                                    }} />
                                    <span>Video</span>
                                </div>
                                <div className='lower'>First Consultation</div>
                            </div>
                            <div className='Consultation-6'>
                                <div className='upper bb'>
                                    <Boy sx={{
                                        fontSize: '20px',
                                        marginRight: '5px'
                                    }} />
                                    <span>In-person</span>
                                </div>
                                <div className='lower'>Second Opinion</div>
                            </div>
                            <div className='Consultation-7'>
                                <div className='upper bb'>
                                    <Videocam sx={{
                                        fontSize: '20px',
                                        marginRight: '5px'
                                    }} />
                                    <span>Video</span>
                                </div>
                                <div className='lower'>First Consultation</div>
                            </div>
                        </div>

                        {/* TEAM */}

                        <div className='team'>
                            <div className='team-1'>TEAM</div>
                            <div className='team-2'></div>
                            <div className='team-3'>Medical Camp</div>
                            <div className='team-4'></div>
                            <div className='team-5'>Medical Camp</div>
                            <div className='team-6'></div>
                            <div className='team-7'></div>
                        </div>

                        {/* DOCTOR */}

                        <div className='doctor'>
                            <div className='doctor-1'>doctor</div>
                            <div className='doctor-2'>Anil Kumar</div>
                            <div className='doctor-3'>Greg Ferguson</div>
                            <div className='doctor-4'>Pankaj Dhir</div>
                            <div className='doctor-5'>Sujata Mohan</div>
                            <div className='doctor-6'>Ram Dayanand</div>
                            <div className='doctor-7'>Prakash Jhanti</div>
                        </div>

                        {/* SLOT */}

                        <div className='slot'>
                            <div className='slot-1'>
                                <div className='slUpper'>Slot</div>

                            </div>
                            <div className='slot-2'>
                                <div className='slUpper'>Jul 3, 2021 8:53 AM</div>
                                <div className='slLower'></div>
                            </div>
                            <div className='slot-3'>
                                <div className='slUpper'>Jul 3, 2021 8:53 AM</div>
                                <div className='slLower'></div>
                            </div>
                            <div className='slot-4'>
                                <div className='slUpper'>Jul 3, 2021 8:53 AM</div>
                                <div className='slLower'></div>
                            </div>
                            <div className='slot-5'>
                                <div className='slUpper'>Jul 3, 2021 8:53 AM</div>
                                <div className='slLower'></div>
                            </div>
                            <div className='slot-6'>
                                <div className='slUpper'>Jul 3, 2021 8:53 AM</div>
                                <div className='slLower'></div>
                            </div>
                            <div className='slot-7'>
                                <div className='slUpper'>Jul 3, 2021 8:53 AM</div>
                                <div className='slLower'></div>
                            </div>
                        </div>

                        {/* status */}

                        <div className='Status'>
                            <div className='status-1 hh'>status</div>
                            <div className='status-1'>Cancelled</div>
                            <div className='status-1'>No Show</div>
                            <div className='status-1'>Completed</div>
                            <div className='status-1'>Booked</div>
                            <div className='status-1'>Completed</div>
                            <div className='status-1'>Completed</div>
                        </div>

                        {/* invoice */}

                        <div className='Invoice'>
                            <div className='invoice-1 hh'>invoice</div>
                            <div className='invoice-1'>Refunded</div>
                            <div className='invoice-1 unpaid'>Unpaid</div>
                            <div className='invoice-1 paid'>Paid</div>
                            <div className='invoice-1 paid'>Paid</div>
                            <div className='invoice-1 unpaid'>Unpaid</div>
                            <div className='invoice-1 paid'>Paid</div>
                        </div>

                        {/* ACTIONS */}

                        <div className='Actions'>
                            <div className='actionsH'>action</div>
                            <div className='actions-2'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    // aria-controls={open ? 'long-menu' : undefined}
                                    // aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                // onClick={handleClick}
                                >
                                    <MoreVert sx={{ fontSize: '20px', marginTop: '4px' }} />
                                </IconButton>
                            </div>
                            <div className='actions-2'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    // aria-controls={open ? 'long-menu' : undefined}
                                    // aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                // onClick={handleClick}
                                >
                                    <MoreVert sx={{ fontSize: '20px' }} />
                                </IconButton>
                            </div>
                            <div className='actions-2'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    // aria-controls={open ? 'long-menu' : undefined}
                                    // aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                // onClick={handleClick}
                                >
                                    <MoreVert sx={{ fontSize: '20px' }} />
                                </IconButton>
                            </div>
                            <div className='actions-2'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    // aria-controls={open ? 'long-menu' : undefined}
                                    // aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                // onClick={handleClick}
                                >
                                    <MoreVert sx={{ fontSize: '20px' }} />
                                </IconButton>
                            </div>
                            <div className='actions-2'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    // aria-controls={open ? 'long-menu' : undefined}
                                    // aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                // onClick={handleClick}
                                >
                                    <MoreVert sx={{ fontSize: '20px', marginTop: '-7px' }} />
                                </IconButton>
                            </div>
                            <div className='actions-2'>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    // aria-controls={open ? 'long-menu' : undefined}
                                    // aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                // onClick={handleClick}
                                >
                                    <MoreVert sx={{ fontSize: '20px', marginTop: '-4px' }} />
                                </IconButton>
                            </div>
                        </div>

                        <div className='lin1'></div>
                        <div className='lin2'></div>
                        <div className='lin3'></div>
                        <div className='lin4'></div>
                        <div className='lin5'></div>

                    </div>
                </div>


            </div>
        </>

    )
}

export default Appointment_tab