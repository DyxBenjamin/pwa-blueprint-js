import React from 'react';
import {Stack, useTheme} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function FlexColumn({children, fullWidth, halfWidth, widths, center, transpose,  ...props}) {
	const theme = useTheme();

	const { breakpoint, option  } = transpose || { breakpoint:'sm', option:'down' };
	const breakpointReached = transpose ? useMediaQuery(theme.breakpoints[option](breakpoint)) : false;

	if ( center === true ) props = {...props, sx:{justifyContent:'center', alignItems:'center', ...props.sx} }
	if (center === 'vertical' ) props = {...props, sx:{alignItems:'center', ...props.sx} }
	if (center === 'horizontal' ) props = {...props, sx:{justifyContent:'center', ...props.sx} }

	if ( fullWidth ) props = {...props, sx:{width:'100%', ...props.sx} }
	if ( halfWidth ) props = {...props, sx:{width:'50%', ...props.sx} }

	if ( widths ) props = {...props, sx:{width: widths, ...props.sx} }

	return (
		<Stack direction={breakpointReached ? 'row' : 'column'} {...props} >
			{ children }
		</Stack>
	)
}
