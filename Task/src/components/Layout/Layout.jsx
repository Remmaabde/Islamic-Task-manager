import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded font-medium transition ${
      isActive
        ? "bg-islamicGreen text-white"
        : "text-islamicGreen hover:bg-green-100 focus:ring-2 focus:ring-islamicGreen"
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex flex-wrap justify-between items-center p-4">
          <h1 className="text-lg md:text-xl font-bold text-islamicGreen">
            📿 Islamic Task Manager
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/tasks" className={linkClasses}>Tasks</NavLink>
            <NavLink to="/completed" className={linkClasses}>Completed</NavLink>
            <NavLink to="/incompleted" className={linkClasses}>Incompleted</NavLink>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-islamicGreen text-white text-center py-4 mt-6">
        <p>🌙 Built with barakah — {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
