import { AppBar, Box, Toolbar, colors } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    const handleNavMenu =() => {
        navigate('/test');
    };

    return(
        <Box sx = {{flex: 1}}>
            <AppBar >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleNavMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )

};

export default Navbar;