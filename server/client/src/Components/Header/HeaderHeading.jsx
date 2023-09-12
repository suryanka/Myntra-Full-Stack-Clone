import { Box, Typography, styled } from '@mui/material'
import React from 'react';

const Component = styled(Box)`
float: lefComponentt;
border: hidden;
text-align: center;
padding-top: 15px;
`;

const Heading= styled(Typography)`
padding: 0 17px 28px;
text-align: center;
text-decoration: none;
font-size: 14px;
letter-spacing: .3px;
color: #282c3f;
border-bottom: none;
// -webkit-transition: left .2s ease-out,width .2s ease-out;
// transition: left .2s ease-out,width .2s ease-out;
font-weight: 700;
text-transform: uppercase;
`;

function HeaderHeading({item}) {
  return (
    <Component>
        <Heading>{item}</Heading>
    </Component>
  )
}

export default HeaderHeading