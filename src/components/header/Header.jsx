import { Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import './Header.css'
function Header() {

    return (
        <div className='headerComp'>
            <div className='textArea1'>
                <Typography className='text3' variant='h2'> Welcome
                    <Typography sx={{ fontWeight: 100, letterSpacing: 1 }} >Cardiology</Typography>
                </Typography>
                <Typography className='text4' variant='h2' sx={{
                    fontWeight: 500,
                    letterSpacing: 1
                }}>
                    Anil
                </Typography>

                <Typography variant='h2' sx={{
                    fontWeight: 500,
                    letterSpacing: 1
                }}>
                    Kumar
                </Typography>
            </div>
        </div>
    )
}

export default Header

// import { Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import React from 'react'

// function Header() {
//     return (
//         <>
//             <Box sx={{ width: '1446px', height: '214px', backgroundColor: "#203765",marginLeft:"77px" }}>
//                 <Box sx={{ height: "46px", width: '369px',paddingTop:'40px',paddingLeft:'100px',color:"#FFFFFF" }}>
//                     <Typography fontFamily={"Roboto"} fontStyle={"normal"} fontWeight={200} fontSize={"34px"} lineHeight={"135.19%"}>
//                         Welcome Anil Kumar
//                     </Typography>
//                 </Box>
//             </Box>

//         </>
//     )
// }

// export default Header
