import "./Task.css";

const Task = () => {
    return (
        <div className="comleted editing basic">
            <input className="toggle" type="checkbox" />
            <label>
                <span className="description">Active task</span>
                <span className="created">5 sec ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    );
};

export default Task;
