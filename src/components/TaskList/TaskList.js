import "./TaskList.css";
import Task from "../Task/index";
const TaskList = () => {
    return (
        <ul className="todo-list">
            <li className="completed">
                <Task />
            </li>
            <li className="editing">
                <Task />
                <input type="text" class="edit" value="Editing task" />
            </li>
            <li className="basic">
                <Task />
            </li>
        </ul>
    );
};

export default TaskList;
