import React from "react";
import Layout from "../components/layout/Layout";
import Section from "../components/section/Section";

const Home = () => {
    const experiences = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
    ];

    const educations = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non laboriosam iste similique in assumenda delectus nisi sed adipisci provident repudiandae aliquid excepturi, architecto, unde culpa suscipit laborum quos quasi?",
    ];
    return (
        <Layout>
            <Section title="Experience" items={experiences} />
            <Section title="Education" items={educations} />
        </Layout>
    );
};

export default Home;
