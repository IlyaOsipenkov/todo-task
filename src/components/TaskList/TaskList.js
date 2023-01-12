import "./TaskList.css";
import Task from "../Task/index";
const TaskList = () => {
    return (
        <ul className="todo-list">
            <li>
                <Task />
            </li>
        </ul>
    );
};

export default TaskList;
