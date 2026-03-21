import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Goals from "../pages/Goals";
import Habits from "../pages/Habits";
import Auth from "../pages/Auth";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Auth />} />
        </Route>

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/habits" element={<Habits />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;