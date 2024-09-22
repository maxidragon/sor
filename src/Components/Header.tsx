import { GitHub } from "@mui/icons-material";
import { AppBar, Box, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
    return (
        <AppBar
            position="static"
            color="primary"
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    color="inherit"
                    style={{ flexGrow: 1 }}
                    component={RouterLink}
                    to={`/`}
                    sx={{ textDecoration: "none" }}
                >
                    SOR
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton component={Link} href="https://github.com/maxidragon/sor" rel="noopener noreferrer">
                    <GitHub fontSize="large" />
                </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;