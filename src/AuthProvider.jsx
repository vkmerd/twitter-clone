import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSupabase } from '../../Supa';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const supabase = useSupabase();
  const [session, setSession] = useState(null);
  
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};