import React from "react";
import { documentContext } from "../pouchdb/documentContext";
import { TextField, Typography, Button, Grid } from "@material-ui/core";

export default () => {
  const { documentRepository } = React.useContext(documentContext);
  const [inputValue, setInputValue] = React.useState(null);
  const [inputDocs, setInputDocs] = React.useState([]);
  const onChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const onClick = () => {
    console.log(inputDocs);
    inputDocs.forEach((doc) => documentRepository.addDocument(doc));
    setInputValue("");
    setInputDocs([]);
  };
  React.useEffect(() => {
    if (inputValue) {
      let parsedJSON = null;
      //will be more complex stuff
      try {
        parsedJSON = JSON.parse(inputValue);
      } catch (err) {
        //expected.  eat it
        setInputDocs([]);
      }
      if (parsedJSON) {
        setInputDocs([{ docJson: parsedJSON }]);
      }
    }
  }, [inputValue]);
  return (
    <>
      <Grid>
        <Grid item xs={12}>
          <TextField
            onChange={onChange}
            style={{ width: "100%" }}
            return
            label="Document Input"
            multiline
            rows={4}
            variant="outlined"
          />
          <p>
            <Typography variant="caption">
              Enter Document JSON or a list of comma or line separated UDS IDs
              or URLs
            </Typography>
          </p>
          {inputDocs.length > 0 && (
            <Button variant="outlined" color="primary" onClick={onClick}>
              Add {inputDocs.length} document{inputDocs.length > 1 && "s"} to
              your collection
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};
