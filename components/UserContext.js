import React from 'react';

const UserContext = React.createContext({
  User: {
    email: null,
    password: null,
  },
  setUser: () => {}
});

export default UserContext;