import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "jbase";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} jwitter</footer>
    </>
  );
}

export default App;
