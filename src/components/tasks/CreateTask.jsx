import React, { useState } from "react";

const CreateTask = ({ addNewTask }) => {
    const [text, setText] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="type your task"
                onInput={(e) => setText(e.target.value)}
                value={text}
            />
            <button
                onClick={() => {
                    if (text) {
                        addNewTask(text);
                        setText("");
                    } else {
                        alert("Invalid text");
                    }
                }}
            >
                Create
            </button>
        </div>
    );
};

export default CreateTask;
