import { Typography, Card } from "@mui/material";
import { motion } from "framer-motion";

interface RewardsProps{
    type: string,
    quantity: number
}

function RewardsAnimated({type, quantity}: RewardsProps){
    return (
        <motion.div
            animate = {{
                y: -20,
                opacity:0
            }}
            transition = {{
                duration: 1.5,
                delay: .25
            }}
            style={{marginBottom: "-1.5em"}}
        >
            <Card
            sx={{
                height: "1.5em",
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography>+ {quantity} {type} </Typography>
            </Card>
        </motion.div>
    )
}

export default RewardsAnimated;