import { Link, Outlet } from "react-router";

function Layout() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/how-to-play">How to Play</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout