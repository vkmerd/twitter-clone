import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabase } from '../../Supa';

const Home = () => {
  const supabase = useSupabase();
  const navigate = useNavigate();

  useEffect(() => {
    const processLogin = async () => {
      const { data, error } = await supabase.auth.getSessionFromUrl({ storeSession: true });
      if (error) {
        console.error('Error getting session from URL:', error.message);
        navigate('/login');
      } else {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    processLogin();
  }, [supabase, navigate]);

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <h1 className="text-3xl">Welcome to Home Page</h1>
    </div>
  );
};

export default Home;