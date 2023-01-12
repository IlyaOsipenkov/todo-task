import TasksFilter from "../TasksFilter";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <span className="todo-count">1 items left</span>
            <TasksFilter />
            <button className="clear-completed">Clear completed</button>
        </div>
    );
};

export default Footer;
