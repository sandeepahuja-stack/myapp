import { alpha, Box, Button, InputBase, styled } from "@mui/material";

export const ModalBoxStyled = styled(Box)(({theme})=>({
	position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.common.white,
	overflow: 'hidden',
	width: '100%',
	height: '100%',
	
	[theme.breakpoints.up('md')]: {
		height: '60vh',
		width: '50%',
		
	},
}))
export const SearchStyled = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: '8px',
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},

	// width: '80%',
	// marginLeft: `calc(1em + ${theme.spacing(4)})`,
	[theme.breakpoints.up('sm')]: {
		width: '100%',
		marginLeft: 0,

	},
}));
export const ModalResultWrapper = styled(Box)(({theme})=>({
	overflowY: 'scroll',
	height: '85%',

	[theme.breakpoints.up('sm')]: {
		width: '100%',
		height: '80%',
		marginLeft: 0,

	},
}));
export const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	right: 0,
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	zIndex: 1,
	
}));

export const SearchIconBackButton = styled(Button)(({ theme }) => ({
	
	height: '100%',
	position: 'absolute',
	minWidth: '24px',
	left: 0,
	zIndex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	[theme.breakpoints.up('md')]: {
		display: 'none'

	},
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	backgroundColor: alpha(theme.palette.grey[50], 0.7),
	'& .MuiInputBase-input': {
		padding:`${theme.spacing(2, 1, 2, 1)}`,
		backgroundColor: alpha(theme.palette.grey[100], 0.7),
		// vertical padding + font size from searchIcon
		paddingLeft: ` calc(1em + ${theme.spacing(3)})`,
		
		width: '100%',
		[theme.breakpoints.up('md')]: {
			paddingLeft: ` 1em`,
	
		},
	},
}));