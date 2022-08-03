import React from "react";

const Section = ({ title, items }) => {
    return (
        <section>
            <h3>{title}</h3>
            <ul>
                {items &&
                    items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </section>
    );
};

export default Section;
