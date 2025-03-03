import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Calendar from "./pages/Calendar";
import ClassDashboard from "./pages/classes/ClassDashboard";
import Classwork from "./pages/classes/Classwork";
import Assignments from "./pages/classes/Assignment";
import Technicals from "./pages/classes/Technical";
import Grades from "./pages/classes/Grades";
import Header from "./component/Header";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <div className="flex bg-neutral-900 min-h-screen">
              <Header />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/classes" element={<Classes />} />

                  {/* Nested Class Dashboard Routes */}
                  <Route path="/dashboard/:classCode" element={<ClassDashboard />}>
                    <Route path="classwork" element={<Classwork />} />
                    <Route path="assignments" element={<Assignments />} />
                    <Route path="technicals" element={<Technicals />} />
                    <Route path="grades" element={<Grades />} />
                  </Route>

                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
