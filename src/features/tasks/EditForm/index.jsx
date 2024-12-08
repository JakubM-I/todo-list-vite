import { useState } from "react";

const EditTaskForm = ({editedTask}) => {
    const [editTaskData, setEditTaskData] = useState(
        {
            taskName: editedTask.taskName,
        }
    ) 

    return (
        <p>Edycja zadania {editTaskData.taskName}</p>
    )
};

export default EditTaskForm;