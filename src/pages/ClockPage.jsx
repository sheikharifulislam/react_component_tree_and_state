import * as DateFns from "date-fns";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

function getTime(date) {
    return {
        hour: DateFns.getHours(date),
        minute: DateFns.getMinutes(date),
        second: DateFns.getSeconds(date),
    };
}

function formateTime(time) {
    return time < 10 ? `0${time}` : time;
}

const ClockPage = () => {
    const [date, setDate] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setDate(Date.now);
        }, 1000);
    }, [date]);

    const time = getTime(date);

    return (
        <Layout>
            <h1>Clock</h1>
            <h1>
                {formateTime(time.hour)} : {formateTime(time.minute)} :{" "}
                {formateTime(time.second)}
            </h1>
        </Layout>
    );
};

export default ClockPage;
