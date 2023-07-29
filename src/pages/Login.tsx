import { autocompleteClasses, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LoginForm from "../components/login/login-form";

function Login(){
    return (
        <>
        <motion.div
            animate={{y:300}}
        >
            <Box sx={{
                position: "absolute",
                top: "50%",
                left:" 50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(249, 249, 249, 0.4)",
                width: "25em",
                height: "20em",
                borderRadius: "15px",
                boxShadow: 1
            }}>
                    <LoginForm />
            </Box>
        </motion.div>
        </>


    )
}

export default Login;