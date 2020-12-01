import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AuthDisplay from "./auth/AuthDisplay";
import DocumentSelection from "./document/documentSelection";
import DocumentManagement from "./document/documentManagement";
import AppFrame from "./appFrame";
import DocumentContext from "./pouchdb/pouchdbContext";
import "./styles.css";

export default function App() {
  return (
    <DocumentContext>
      <Router>
        <div className="App">
          <AppFrame
            appBarComponents={
              <>
                <Typography variant="h6" style={{ flex: 1 }}>
                  Document Inspector
                </Typography>
                <AuthDisplay />
              </>
            }
            content={
              <Switch>
                <Route path="/documents/add">
                  <DocumentSelection />
                </Route>
                <Route path="/documents/manage">
                  <DocumentManagement />
                </Route>
              </Switch>
            }
          />
        </div>
      </Router>
    </DocumentContext>
  );
}
