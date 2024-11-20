import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchTaskById } from "../taskSlice";

const TaskPage = () => {
    const {id} = useParams();
    console.log(id)
    const task = useSelector(state => searchTaskById(state, id));
    console.log(task)

    return (
        <div className="w-[40%]">  
            <p><Link to={"/"}>X</Link></p>
             <h3>{task.taskName}</h3>
             <p>{task.taskDesc}</p>
             <div>
                <p>{task.taskDate}</p>
                <p>{task.taskCategory}</p>
             </div>
        </div>
    )
};

export default TaskPage;