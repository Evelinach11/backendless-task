import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Tab from "./components/Tab";
import { tabData } from "./tabs/tabs";
import { TabContentLoader } from "./TabContentLoader";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Simple CMS</h1>
        <ul>
          {tabData.map((tab) => (
            <Tab key={tab.id} title={tab.title} path={`/${tab.id}`} />
          ))}
        </ul>
        <Routes>
          {tabData.map((tab) => (
            <Route
              key={tab.id}
              path={`/${tab.id}`}
              element={<TabContentLoader path={tab.path} />}
              // element={require(`./${tab.path}`).default}
            />
          ))}
          <Route path="/" element={<Navigate to={tabData[0].id} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
