import React from "react";

const ShowTasks = ({ tasks, isCompleted }) => {
    console.log(tasks);
    return (
        <div>
            {tasks.length ? (
                <ul>
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                style={{
                                    marginRight: "10px",
                                    width: "18px",
                                    height: "18px",
                                }}
                                onChange={(e) =>
                                    isCompleted(e.target.checked, task.id)
                                }
                            />
                            <p
                                style={{
                                    marginRight: "10px",
                                    fontSize: "20px",
                                    color: `${task.id} ? 'black' : 'red'`,
                                }}
                            >
                                {task.name}
                            </p>
                            <button
                                style={{
                                    marginRight: "10px",
                                    padding: "4px 10px",
                                }}
                            >
                                Edit
                            </button>
                            <button
                                style={{
                                    marginRight: "10px",
                                    padding: "4px 10px",
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </ul>
            ) : (
                <h1>No Taks Found</h1>
            )}
        </div>
    );
};

export default ShowTasks;
