import React, { useState } from "react";
import Layout from "../components/layout/Layout";

const ClockPage = () => {
    const [time, setTime] = useState(0);
    return (
        <Layout>
            <h1>Clock</h1>
            <h1>
                {} : {} : {}
            </h1>
        </Layout>
    );
};

export default ClockPage;
