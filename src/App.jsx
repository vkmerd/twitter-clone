import React, { useEffect, useState, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { SupabaseContext } from './Supa';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const supabase = useContext(SupabaseContext);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setIsLoggedIn(true);
          navigate('/home');
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking session:', error);
        navigate('/home');
      }
    };

    if (supabase) {
      checkSession();

      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });

      return () => {
        data.subscription.unsubscribe();
      };
    }
  }, [supabase, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}