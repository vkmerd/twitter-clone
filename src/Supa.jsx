import React, { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext();

const supabaseUrl = 'https://upzjcplbkkbbdgfoqxfp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwempjcGxia2tiYmRnZm9xeGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MTIxODMsImV4cCI6MjAzNDI4ODE4M30.2U4pZA17lMXKmgCatrkZvLrJ_mmEHpD2mGkpIDDB6zo';
const supabase = createClient(supabaseUrl, supabaseKey);

export const SupabaseProvider = ({ children }) => {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => useContext(SupabaseContext);

export { SupabaseContext };