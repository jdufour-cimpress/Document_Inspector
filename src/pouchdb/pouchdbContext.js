import React from "react";
import pouchdb from "pouchdb";

const documentdb = new pouchdb("documents");

export const pouchdbContext = React.createContext({ documents: documentdb });
const PouchdbContext = pouchdbContext;

export default ({ children }) => (
  <PouchdbContext.Provider value={documentdb}>
    {children}
  </PouchdbContext.Provider>
);
