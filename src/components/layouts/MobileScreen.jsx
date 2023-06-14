import React from 'react';
import {Box} from "@mui/material";
export default function MobileScreen({children, sx, direction, center, ...props}) {
	if ( direction ) sx = Object.assign( sx, {flexDirection: direction} );
	if ( center ) sx = Object.assign( sx, {justifyContent:'center', alignItems:'center'} );
	
	return (
		<Box
			component={'section'}
			sx={{
				display: 'flex',
				width: '100vw',
				aspectRatio: '9/16',
				...sx
			}}
			{...props}>
            { children }
        </Box>
	)
}
