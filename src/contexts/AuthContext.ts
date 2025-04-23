import * as React from "react";

const AuthContext = React.createContext(false);

export function useIsSignedIn() {
  const isSignedIn = React.useContext(AuthContext);
  return isSignedIn;
}

export function useIsSignedOut() {
  const isSignedIn = React.useContext(AuthContext);
  return !isSignedIn;
}

export default AuthContext;
