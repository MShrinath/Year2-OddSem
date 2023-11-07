import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App2 = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the API endpoint
        const apiUrl = 'https://randomuser.me/api/?results=5';

        // Make an HTTP GET request using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                setUsers(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <h1>Axios Example 2</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.login.uuid}>
                        <img src={user.picture.medium} alt="User" />
                        <p>Name: {user.name.first} {user.name.last}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App2;