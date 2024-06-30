import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabase } from '../../Supa';
import Home from '../home/Home';

export default function Login() {
  const supabase = useSupabase();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/home',
      },
    });
    if (error) {
      console.log('Error logging in with Google:', error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex justify-center">
      <div className="w-3/4 flex items-center">
        <div className="basis-2/4 flex justify-center align-center">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-2/3">
            <g>
              <path fill="#FFFFFF" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className="basis-2/4 flex-column items-center">
          <h1 className="text-7xl text-white font-sans font-black">Happening Now!</h1>
          <button onClick={handleGoogleLogin} className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}