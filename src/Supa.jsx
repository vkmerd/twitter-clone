import React, { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext();

const supabaseUrl = 'https://upzjcplbkkbbdgfoqxfp.supabase.co';
const supabaseKey = 'your-supabase-key';
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