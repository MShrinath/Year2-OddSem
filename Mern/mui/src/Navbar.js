import "./Navbar.css"
function Navbar() {
    return (
        <div>
            <div className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Search">Search</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;