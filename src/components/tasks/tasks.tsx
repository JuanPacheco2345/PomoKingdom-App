import { Box, Button, List, ListItem, ListItemButton, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import API from "../../services/api-call"
import './tasks.css'

export interface Task {
    _id: string,
    name: string
}

interface Props {
    taskName: string
}

function Task({taskName}: Props){
    return (
        <ListItemButton>
            {taskName}
        </ ListItemButton>
    )
}
function Tasks(){
    const [tasks, setTasks] = useState<Task[] | undefined>([])
    const [task, setTask] = useState("")

    const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }
    
    const addTask = (event: any) => {
        event.preventDefault()
        API.postTask(task).then(result =>  {
            const taskAdded = result.data.task;
            setTasks(tasks?.concat(taskAdded))
        })
    }

    useEffect(() => {
        API.getTask().then(res => {
            const tasks: Task[] = res.data.tasks
            setTasks(tasks)
        })
    }, [])

    return(
        <Box 
        className="tasks-display-bg"
        sx={{
            boxShadow: 1
        }}
        
        >
            <div className="h-stack tasks-display">
                <List className="h-stack task-list">
                        {tasks?.map((task: Task) => <Task key={task._id} taskName={task.name} />)}
                </List>
                <Box className="v-stack add-task">

                    <form>
                        <TextField 
                            onChange={handleTaskInputChange}
                            variant="outlined"
                            size="small"
                        />
                        <Button 
                            variant="outlined" 
                            onClick={addTask}
                            size="small"
                        >
                            +
                        </Button>
                    </form>

                </Box>
            </div>
        </Box>
    )
}

export default Tasks