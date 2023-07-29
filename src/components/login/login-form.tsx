import { useState } from "react";
import { Button, Card, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../../services/api-call";

export interface authform {
    auth: number,
    user_name: string,
    password: string,
    confirm_password: string
}


interface Props{
    handleChange: (e: any) => void,
    handleClick: () => void,
    setSignup: React.Dispatch<React.SetStateAction<boolean>>
}
function SignInForm({handleChange, handleClick, setSignup}: Props){
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Box sx={{
                display: "flex", 
                gap: "10px",
                flexDirection: "column",
                marginBottom: "1em",
                width: "20em"
                }}>
                <TextField name="user_name" onChange={handleChange} placeholder={'Username'} size="small" />
                <TextField name="password" onChange={handleChange} placeholder={'Password'}  size="small" />
            </Box>

            <Box className="v-stack" sx={{
                justifyContent:"space-between", 
                width: "100%", 
                padding: "1em",
                }}>
                <Button onClick={handleClick} variant="contained">Log In</Button>
                <Button onClick={() => setSignup(true)} variant="contained">Not signed up?</Button>
            </Box>
        </Box>
    )
}

function SignUpForm({handleChange, handleClick, setSignup}: Props){
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Box sx={{
                display: "flex", 
                gap: "10px",
                flexDirection: "column",
                marginBottom: "1em",
                width: "20em"
            }}>
                <TextField name="user_name" onChange={handleChange} placeholder={'Username'} size="small" ></TextField>
                <TextField name="password" onChange={handleChange} placeholder={'Password'} size="small" ></TextField>
                <TextField name="confirm_password" onChange={handleChange} placeholder={'Repeat Password'} size="small" ></TextField>
            </Box>
            <Box className="v-stack"
                sx={{
                    justifyContent:"space-between", 
                    width: "100%", 
                    padding: "1em",
                    }}
            >
                <Button onClick={handleClick} variant="contained">Sign Up</Button>
                <Button onClick={() => setSignup(false)} variant="contained">Already signed up?</Button>
            </Box>
        </Box>
    )
}

function LoginForm(){
    const navigate = useNavigate();
    const [form, setForm] = useState<authform>({ auth: 1, user_name: '', password: '', confirm_password: ''});
    const [signup, setSignup] = useState<boolean>(false);
    const handleChange = (e: any) => setForm({...form, [e.target.name]: e.target.value})
    
    const handleClick = () => {
        if (signup){
            API.signUp(form).then((res: any) => {
                navigate('/timer');
            }).catch(err => alert("User does not exist."));
        }
        else {
            API.signIn(form).then((res: any) => {
                navigate('/timer');
            }).catch(err => alert("User does not exist."));
        }
        
    }
    
    if(!signup) return <SignInForm handleChange={handleChange} handleClick={handleClick} setSignup={setSignup} />
    else        return <SignUpForm handleChange={handleChange} handleClick={handleClick} setSignup={setSignup} />
    
}
export default LoginForm;