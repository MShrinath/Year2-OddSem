
import React, { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div style={styles.clockContainer}>
            <div style={styles.clock}>
                <h2>Timer</h2>
                <div style={styles.time}>{formatTime(seconds)}</div>
            </div>
        </div>
    );
};

const styles = {
    clockContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    clock: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f0f0f0",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    time: {
        fontSize: "48px",
        fontWeight: "bold",
    },
};

export default Timer;