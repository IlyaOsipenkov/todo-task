import "./TasksFilter.css";

const TasksFilter = () => {
    return (
        <ul className="filters">
            <li>
                <button className="selected">All</button>
            </li>
            <li>
                <button className="">Active</button>
            </li>
            <li>
                <button className="">Completed</button>
            </li>
        </ul>
    );
};

export default TasksFilter;
