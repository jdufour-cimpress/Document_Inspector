import React from "react";
import { Avatar, Menu, MenuItem, IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import CancelIcon from "@material-ui/icons/Cancel";
import AuthEntry from "./AuthEntry";
import jwt from "jsonwebtoken";
import md5 from "md5";
import { getSessionJWT, setSessionJWT } from "./AuthManagement";

export default () => {
  const [jwtToken, setJwtToken] = React.useState(getSessionJWT());
  const [enterTokenMode, setEnterTokenMode] = React.useState(false);
  const decodedJwt = jwt.decode(jwtToken);
  console.log(decodedJwt);
  const isLoggedIn = decodedJwt && decodedJwt.exp > new Date().getTime() / 1000;
  const onSave = React.useCallback((jwtToken) => {
    setJwtToken(jwtToken);
    setSessionJWT(jwtToken);
  }, []);

  const [focusEl, setFocusEl] = React.useState(null);
  const onAvatarClick = (element) => setFocusEl(element.target);
  const onClose = () => setFocusEl(null);
  const onClickAnonymousUser = () => setEnterTokenMode(true);
  const onCancelEntry = () => setEnterTokenMode(false);
  const onClear = React.useCallback(() => {
    onClose();
    setJwtToken("");
    setSessionJWT("");
  }, []);

  return isLoggedIn ? (
    <div>
      <div>
        <Avatar
          onClick={onAvatarClick}
          src={`https://www.gravatar.com/avatar/${md5(
            decodedJwt["https://claims.cimpress.io/email"]
          )}?default=retro`}
          alt="Gravatar"
        >
          P
        </Avatar>
        <Menu
          id="simple-menu"
          anchorEl={focusEl}
          keepMounted
          open={Boolean(focusEl)}
          onClose={onClose}
        >
          <MenuItem onClick={onClear}>Clear</MenuItem>
          <MenuItem onClick={onClear}>Enter new token</MenuItem>
        </Menu>
      </div>
    </div>
  ) : enterTokenMode ? (
    <>
      <IconButton aria-label="cancel token entry">
        <CancelIcon onClick={onCancelEntry} />
      </IconButton>
      <AuthEntry onSave={onSave} />
    </>
  ) : (
    <PersonIcon onClick={onClickAnonymousUser} />
  );
};
