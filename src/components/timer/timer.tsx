import { useEffect, useState } from "react";
import convSecondsToFancyTime from "../../services/seconds-conversion";
import TimerButtons from "./timer-buttons";
import TimerState from "./timerstate";
import './timer.css'
import { Box, Button } from "@mui/material";
import { AnimationControls } from "framer-motion";
import RewardsAnimated from "../rewards/rewards";

interface Props{
    animationControl: AnimationControls
}

function Timer({animationControl}: Props){
    const [timerRunning, setTimerRunning] = useState<boolean>(false);
    const [currTimerState, setTimerState] = useState<TimerState>(TimerState.STUDY)
    const [seconds, setSeconds] = useState<number>(currTimerState)
    const [rewardsEarned, setRewardsEarned] = useState<boolean>(false)

    const handleClick = (): void => {
        if(currTimerState === TimerState.STUDY) animationControl.start("hidden")
        if(timerRunning) animationControl.start("visible")
        setTimerRunning(!timerRunning);
    }

    const handleTimerStateChange = (newTimerState: TimerState): void => {
        if (currTimerState === TimerState.STUDY) setRewardsEarned(true)
        animationControl.start("visible")
        setTimerState(newTimerState);
        setSeconds(newTimerState);
        setTimerRunning(false);
    }
    
    useEffect(() => {
        let timeInterval: number | undefined;
        console.log(seconds === 0)
        // Running
        if (timerRunning && seconds !== 0){
            timeInterval = window.setInterval(() => setSeconds(seconds - 1), 1000);
        } 
        // Completed
        else if (timerRunning && seconds === 0) {
            clearInterval(timeInterval);
            handleTimerStateChange(TimerState.SHORTBREAK)
        }
        return () => {
            clearInterval(timeInterval)
        }
    }, [timerRunning, seconds])
    
    console.log(seconds)

    return (
        <>
            {rewardsEarned && <RewardsAnimated type="Experience Points" quantity={200} />}
            <Box 
            className="timer-container" 
            sx={{
                boxShadow: 1
            }} 
            >
                
                <span className="timer-text">{convSecondsToFancyTime(seconds)}</span>
                <TimerButtons newTimerState={handleTimerStateChange} currTimerState={currTimerState}/>
                <Button className='Button' variant='contained' onClick={handleClick}>{timerRunning?'Stop':'Start'}</Button>
            </Box>
        </>

    )
} 
export default Timer;
