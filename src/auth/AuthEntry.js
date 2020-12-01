import React from "react";
import { Button, TextField } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
export default ({ onSave }) => {
  const [jwt, setJwt] = React.useState("");

  const onLocalSave = React.useCallback(() => {
    onSave(jwt);
  }, [onSave, jwt]);

  const onUpdate = React.useCallback((evt) => {
    setJwt(evt.target.value);
  }, []);

  return (
    <>
      <TextField
        variant="outlined"
        label="Bearer Token"
        onChange={onUpdate}
        type="password"
        value={jwt}
        style={{ margin: "10px" }}
        size="small"
      />
      {jwt ? (
        <Button variant="contained" color="default" onClick={onLocalSave}>
          save
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          startIcon={<LaunchIcon />}
          href="https://myjwt.cimpress.io/"
          target="_blank"
        >
          Get JWT
        </Button>
      )}
    </>
  );
};
