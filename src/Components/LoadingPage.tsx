import { Box, CircularProgress } from "@mui/material"

const LoadingPage = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw"
        }}>
            <CircularProgress />
        </Box>
    );
};

export default LoadingPage;