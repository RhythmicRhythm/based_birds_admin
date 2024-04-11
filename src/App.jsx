import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { lookInSession } from "./common/session";
import Success from "./pages/Success";

import Home from "./pages/Home";
import WalletChecker from "./pages/WalletChecker";
import Tasks from "./pages/Tasks";
import Entries from "./pages/Entries";
import Loader from "./pages/Loader";
export const UserContext = createContext({});

function App() {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    let userInSession = lookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ displayName: null });
  }, []);
  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<Entries />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checker" element={<WalletChecker />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
