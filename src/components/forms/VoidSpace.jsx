import styled from "@emotion/styled";
import Box from "@mui/material/Box";


const VoidSpace = styled( Box )( {
		background: 'transparent',
	},
	props => ({
		height: props.height || '24px',
		width: props.fullWidth ? '100%' : props.width || '24px',
		display: props.disabled ? 'none' : 'block'
	})
);

export default VoidSpace;
