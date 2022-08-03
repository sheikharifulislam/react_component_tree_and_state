import React from "react";

const UpdateIncrementDecrement = ({
    incrementValue,
    decrementValue,
    handleIncrementChange,
    handleDecrementChange,
}) => {
    return (
        <div style={{ marginTop: "30px" }}>
            <div>
                <label htmlFor="">Increment</label>
                <input
                    type="number"
                    placeholder="Increment"
                    aria-label="Increment"
                    value={incrementValue}
                    onChange={handleIncrementChange}
                />
            </div>
            <div>
                <label htmlFor="">Decrement</label>
                <input
                    type="number"
                    placeholder="Decrement"
                    aria-label="Decrement"
                    value={decrementValue}
                    onChange={handleDecrementChange}
                />
            </div>
        </div>
    );
};

export default UpdateIncrementDecrement;
