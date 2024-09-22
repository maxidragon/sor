import { Competition as ICompetition } from "@wca/helpers";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWcif } from "../../logic/competitions";
import LoadingPage from "../../Components/LoadingPage";
import { Box, Paper, Typography } from "@mui/material";
import { SORWithPosition } from "../../logic/interfaces";
import SORTable from "./Components/SORTable";
import { calculateSor } from "../../logic/sor";

const Competition = () => {
    const { id } = useParams<{ id: string }>();
    const [wcif, setWcif] = useState<ICompetition | null>(null);
    const [sor, setSor] = useState<SORWithPosition[]>([]);

    useEffect(() => {
        if (!id) return;
        getWcif(id).then((data) => {
            setWcif(data);
            const calculatedSor = calculateSor(data);
            setSor(calculatedSor);
        });
    }, [id]);

    if (!wcif) return <LoadingPage />;

    return (
        <Box sx={{
            py: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            textAlign: "center",
            alignItems: "center",

        }}>
            <Typography variant="h4">{wcif.name}</Typography>
            <Paper sx={{p: 2, maxHeight: "80vh", overflow: "auto"}}>    
                <SORTable data={sor} />
            </Paper>
        </Box>
    );
};

export default Competition;