import jwt from "jsonwebtoken";

const SESSION_KEY = "CODE_SANDBOX_CIM_JWT_TOKEN";

export const setSessionJWT = (jwtToken) => {
  sessionStorage.setItem(SESSION_KEY, jwtToken);
};

export const getSessionJWT = () => {
  return sessionStorage.getItem(SESSION_KEY);
};

export const getDecodedJWT = () => {
  return jwt.decode(getSessionJWT());
};
