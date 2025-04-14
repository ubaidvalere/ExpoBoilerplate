import * as React from "react";

const AuthContext = React.createContext(false);

export function isSignedIn() {
  const isSignedIn = React.useContext(AuthContext);
  return isSignedIn;
}

export function isSignedOut() {
  const isSignedIn = React.useContext(AuthContext);
  return !isSignedIn;
}

export default AuthContext;
