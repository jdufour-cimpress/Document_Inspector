import React from "react";
import pouchdb from "pouchdb";
import DocumentRepository from "./documentRepository";

const documentdb = new pouchdb("documents");
const documentRepository = new DocumentRepository(documentdb);
export const documentContext = React.createContext({
  documentRepository: documentRepository
});

export default ({ children }) => (
  <documentContext.Provider value={documentRepository}>
    {children}
  </documentContext.Provider>
);
