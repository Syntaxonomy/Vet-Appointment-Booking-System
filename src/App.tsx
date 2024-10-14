import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Calendar, Users, Settings, LogIn } from 'lucide-react';
import { UserProvider, useUser } from './contexts/UserContext';
import Dashboard from './components/Dashboard';
import AppointmentBooking from './components/AppointmentBooking';
import UserManagement from './components/UserManagement';
import AdminConfig from './components/AdminConfig';
import Login from './components/Login';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { user } = useUser();
  return user ? element : <Navigate to="/login" replace />;
};

function AppContent() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <nav className="bg-blue-600 text-white w-64 space-y-6 py-7 px-2">
        <div className="text-2xl font-semibold text-center mb-6">VetBook</div>
        <ul>
          <li>
            <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
              <Calendar size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/book" className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
              <Calendar size={20} />
              <span>Book Appointment</span>
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/users" className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
                  <Users size={20} />
                  <span>User Management</span>
                </Link>
              </li>
              <li>
                <Link to="/admin" className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
                  <Settings size={20} />
                  <span>Admin Config</span>
                </Link>
              </li>
            </>
          )}
          <li>
            <Link to="/login" className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
              <LogIn size={20} />
              <span>{user ? 'Logout' : 'Login'}</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-10">
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/book" element={<PrivateRoute element={<AppointmentBooking />} />} />
          <Route path="/users" element={<PrivateRoute element={<UserManagement />} />} />
          <Route path="/admin" element={<PrivateRoute element={<AdminConfig />} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}

export default App;