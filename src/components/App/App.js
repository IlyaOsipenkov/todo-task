import Footer from "../Footer";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import "./App.css";

const App = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <h1>Todos</h1>
            </div>
            <NewTaskForm />
            <TaskList />
            <Footer />
        </div>
    );
};

export default App;
