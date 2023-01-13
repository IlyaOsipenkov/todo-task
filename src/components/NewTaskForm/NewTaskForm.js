import "./NewTaskForm.css";

const NewTaskForm = () => {
    return (
        <div className="todoapp">
            <div className="header">
                <h1>todos</h1>
            </div>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
            />
        </div>
    );
};

export default NewTaskForm;
