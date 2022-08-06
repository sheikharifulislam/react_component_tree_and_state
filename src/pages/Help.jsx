import React from "react";
import Layout from "../components/layout/Layout";

const Help = () => {
    const data = [
        {
            name: "Ariful",
            email: "sheikh@gmail.com",
        },
        {
            name: "Mery",
            email: "mery@gmail.com",
        },
        {
            name: "Smith",
            email: "smith@gmail.com",
        },
    ];

    return (
        <Layout>
            {data.length ? (
                <ul>
                    {data.map((user, index) => (
                        <div key={index}>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                        </div>
                    ))}
                </ul>
            ) : (
                <h1>no data found</h1>
            )}
        </Layout>
    );
};

export default Help;
