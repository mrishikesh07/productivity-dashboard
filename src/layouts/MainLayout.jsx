import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>

      <nav>
        <h3>Menu</h3>
        <div >
            Tailwind Working
        </div>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/habits">Habits</Link></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;