import { Button, ButtonGroup } from "@mui/material";
import TimerState from "./timerstate";

interface Props {
    newTimerState: (newTimerState: number) => void,
    currTimerState: TimerState;
}

function TimerButtons({newTimerState, currTimerState}: Props){

    const handleClick = (btnState: TimerState): void => {
        newTimerState(btnState);
    }

    const setButtonStyle = (btnState: TimerState): "outlined" | "contained" => {
        if(btnState === currTimerState){
            return "contained";
        }
        return "outlined";
    }

    return (
        <ButtonGroup 
        className="timer-button-container"
        sx={{
            marginTop: "1em"
        }}
        >
            <Button variant={setButtonStyle(TimerState.STUDY)} onClick={() => handleClick(TimerState.STUDY)}>Study</Button>
            <Button variant={setButtonStyle(TimerState.SHORTBREAK)} onClick={() => handleClick(TimerState.SHORTBREAK)}>Short Break</Button>
            <Button variant={setButtonStyle(TimerState.LONGBREAK)} onClick={() => handleClick(TimerState.LONGBREAK)}>Long Break</Button>
        </ButtonGroup>
    )
}

export default TimerButtons;