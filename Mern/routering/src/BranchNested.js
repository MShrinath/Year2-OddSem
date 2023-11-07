// Import React and React Router components
import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function BRANCH() {
    return (
        <div>
            <h1>BRANCH PAGE</h1>
            <Outlet />
        </div>
    );

}


function CSE() {
    return (
        <div>
            <h1>CSE PAGE</h1>
            <Outlet />
        </div>
    );
}


function CSE_H() {
    return <h2>CSE-H</h2>;
}
function ECE() {
    return <h2>ECE PAGE</h2>;
}
function EEE() {
    return <h2>EEE PAGE</h2>;
}
function CIVIL() {
    return <h2>CIVIL PAGE</h2>;
}


function CSE_R() {
    return <h2>CSE-R</h2>;
}


function Navbar() {
    return (

        <nav>
            <Link to="/">BRANCH</Link><br/>
            <Link to="/CSE">CSE</Link><br/>
            <Link to="/ECE">ECE</Link><br/>
            <Link to="/EEE">EEE</Link><br/>
            <Link to="/CIVIL">CIVIL</Link><br/>
            <Link to="CSE/CSE_H">CSE_H</Link><br/>
            <Link to="CSE/CSE_R">CSE_R</Link><br/>
        </nav>
    );
}


function BranchNested() {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<BRANCH />}>
                    <Route path="ECE" element={<ECE />} />
                    <Route path="EEE" element={<EEE />} />
                    <Route path="CIVIL" element={<CIVIL />} />
                    <Route path="CSE" element={<CSE />}>
                        <Route path="CSE_H" element={<CSE_H />} />
                        <Route path="CSE_R" element={<CSE_R />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

// Export the App component
export default BranchNested;
