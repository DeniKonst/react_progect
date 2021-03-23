import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import { BrowserRouter, Route } from "react-router-dom";

const App = (prop) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/Profile"
            render={() => <Profile state={prop.state.profilePage} />}
          />
          <Route
            path="/Dialogs"
            render={() => (
              <Dialogs
                dialogs={prop.state.dialogsPage.dialogs}
                messages={prop.state.dialogsPage.messages}
              />
            )}
          />
          <Route path="/News" component={News} />{" "}
          <Route path="/Music" component={Music} />{" "}
          <Route path="/Setting" component={Setting} />{" "}
        </div>{" "}
      </div>{" "}
    </BrowserRouter>
  );
};
export default App;
