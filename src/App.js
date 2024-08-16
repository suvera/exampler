import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRoutes, authRoutes } from './routes/app-routes';
import { AuthProvider, useAuth } from './routes/AuthContext'; // Adjust import path

function AppContent() {
  const { token } = useAuth();

  return (
    <RouterProvider router={token ? appRoutes : authRoutes} />
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
