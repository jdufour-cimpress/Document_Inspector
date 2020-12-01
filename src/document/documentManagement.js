import React from "react";
import { documentContext } from "../pouchdb/documentContext.js";
import DocumentCard from "./documentCard";
import Grid from "@material-ui/core/Grid";
export default () => {
  const [docs, setDocs] = React.useState(null);
  const { documentRepository } = React.useContext(documentContext);
  React.useEffect(() => {
    documentRepository.getAllDocuments().then((allDocs) => {
      console.log(allDocs);
      setDocs(allDocs);
    });
  }, [documentRepository]);

  return (
    <Grid container>
      {docs && docs.rows.map((doc) => <DocumentCard documentRow={doc} />)}
    </Grid>
  );
};
