import Footer from "../Footer";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import "./App.css";

const App = () => {
    return (
        <div className="todoapp">
            <NewTaskForm />
            <div className="main">
                <TaskList />
                <Footer />
            </div>
        </div>
    );
};

export default App;
