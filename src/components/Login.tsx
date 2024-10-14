import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthComponent from './Auth';
import { useUser } from '../contexts/UserContext';

const Login: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-4">Login to Your Account</h3>
        <AuthComponent />
      </div>
    </div>
  );
};

export default Login;