import React from 'react';
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material";

export default function BrandedButton({children, variant = 'brand', sx, ...props}) {
	const theme = useTheme();
	const css = {
		backgroundColor: theme.palette[variant || 'primary' ].main,
		border: `1px solid ${theme.palette[variant || 'primary'].main}`,
		color: '#FFFFFF',
		borderRadius: '8px',
		boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
		fontFamily: 'Roboto',
		fontWeight: 500,
		fontSize: '16px',
		height: '40px',
		lineHeight: '24px',
		padding: '10px 18px',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: theme.palette[variant || 'primary'].dark,
			border: `1px solid ${theme.palette[variant || 'primary'].dark}`,
			color: '#FFFFFF',
		},
		'&:active': {
			boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
		},
		'&:focus': {
			boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
		},
		'&:disabled': {
			backgroundColor: 'var(--primary-600)',
			opacity: '0.5'
		},
		...sx
	}

	if (props.fullWidth) css.width = '100%';
	if (props.outlined) {
		css.backgroundColor = 'transparent';
		css.color = theme.palette[variant || 'primary' ].main;
		css.border = `1px solid ${theme.palette[variant || 'primary'].main}`;
		css.boxShadow = 'none';
		css['&:hover'] = {
			backgroundColor: theme.palette[variant || 'primary'].main,
			border: `1px solid ${theme.palette[variant || 'primary'].main}`,
			color: '#FFFFFF',
		}
	}

	return (
		<Button sx={css} {...props} >
			{ children }
		</Button>
	)
}
