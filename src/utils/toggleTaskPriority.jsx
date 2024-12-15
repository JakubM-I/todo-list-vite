import priority1 from "../assets/priority-1-icon.png";
import priority2 from "../assets/priority-2-icon.png"

   export const toggleTaskPriority = (taskPriority) => {
        if(taskPriority === "0" || taskPriority === "1" ){
            return "";
        };

        if(taskPriority === "2"){
            return <img src={priority2} alt=""  className="w-[1.2em] h-[1.2em]"/>
        }

        return <img src={priority1} alt="" className="w-[1.2em] h-[1.2em]" /> 
    };