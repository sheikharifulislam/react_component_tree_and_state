import React, { useState } from "react";
import Buttons from "../components/buttons/Buttons";
import DisplayCount from "../components/displayCount/DisplayCount";
import Layout from "../components/layout/Layout";
import UpdateIncrementDecrement from "../components/update-input/UpdateIncrementDecrement";

const About = () => {
    const [count, setCount] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);
    const [decrementValue, setDecrementValue] = useState(1);

    const increment = () => {
        setCount((previosCount) => previosCount + incrementValue);
    };

    const decrement = () => {
        if (count >= 1) {
            setCount((previosCount) => previosCount - decrementValue);
        }
    };

    const handleIncrementChange = (e) => {
        setIncrementValue(parseInt(e.target.value));
    };

    const handleDecrementChange = (e) => {
        setDecrementValue(parseInt(e.target.value));
    };

    return (
        <Layout>
            <h1>I am About Page</h1>
            <DisplayCount count={count} />
            <Buttons increment={increment} decrement={decrement} />
            <UpdateIncrementDecrement
                incrementValue={incrementValue}
                decrementValue={decrementValue}
                handleIncrementChange={handleIncrementChange}
                handleDecrementChange={handleDecrementChange}
            />
        </Layout>
    );
};

export default About;
