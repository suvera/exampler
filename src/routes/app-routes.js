import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import CompletedExams from '../Components/completedExams/CompletedExams';
import PendingExams from '../Components/pedingExams/PendingExams';
import { Navigate } from 'react-router-dom';
import Login from '../Components/Login/Login';
import ProtectedRoute from './ProtectedRoute'; // Import your ProtectedRoute component

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute element={<Dashboard />} />,
  },
  {
    path: '/completed-exams',
    element: <ProtectedRoute element={<CompletedExams />} />,
  },
  {
    path: '/pending-exams',
    element: <ProtectedRoute element={<PendingExams />} />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export const authRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '*',
    element: <Login />,
  },
]);
