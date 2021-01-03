import React, { useEffect, useState } from 'react';
import { firebaseConfig } from '../firebaseConfig.js';

export const AuthContext = React.createContext();

// function to do all the work of setting the provider and context value
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // create listener on firebase authentication
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(async (user) => {
      // add token for api calls to user
      if (user) {
        user.token = await user.getIdToken(true);
      }
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
