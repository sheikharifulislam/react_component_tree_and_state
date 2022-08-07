import { useState } from "react";
import shortid from "shortid";
import Layout from "../components//layout/Layout";
import CreateTask from "../components/tasks/CreateTask";
import ShowTasks from "../components/tasks/ShowTasks";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [visibility, setVisibility] = useState("all");

    const addNewTask = (text) => {
        setTasks((previosTasks) => [
            {
                name: text,
                isCompleted: false,
                createAt: Date.now(),
                id: shortid.generate(),
            },
            ...previosTasks,
        ]);
    };

    const isCompleted = (isComplet, id) => {
        const index = tasks.findIndex((task) => task.id === id);
        tasks[index].isCompleted = isComplet;
    };

    return (
        <Layout>
            <h1>ToDo List</h1>
            <CreateTask addNewTask={addNewTask} />
            <ShowTasks tasks={tasks} isCompleted={isCompleted} />
        </Layout>
    );
};

export default Tasks;
