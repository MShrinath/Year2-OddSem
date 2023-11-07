// Import React and React Router components
import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

// Create a Home component
function Home() {
    return <h1>Home</h1>;
}

// Create an About component
function About() {
    return (
        <div>
            <h1>About</h1>
            <Outlet />
        </div>
    );
}

// Create a Team component
function Team() {
    return <h2>Team</h2>;
}

// Create a Contact component
function Contact() {
    return <h2>Contact</h2>;
}

// Create a Navbar component
function Navbar() {
    return (
        // Use a nav tag to wrap the navigation links
        <nav>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/about/team">Team</Link><br />
            <Link to="/about/contact">Contact</Link><br />
        </nav>
    );
}

// Create an App component
function Nested() {
    return (
        // Use a BrowserRouter component to wrap the routes
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

// Export the App component
export default Nested;