import { useDispatch } from "react-redux";
import { closeAddForm } from "../taskSlice";

const AddTaskForm = () => {
    // const dispatch = useDispatch();

    return (
        <>
            <form>
                <input type="text" />
                <button>Dodaj</button>
            </form>
           
        </>
    )
};

export default AddTaskForm;