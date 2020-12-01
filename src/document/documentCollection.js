const SESSION_KEY = "DOCUMENT_INSPECTOR_DOC_COLLECTION_JWT_TOKEN";

export const setSessionJWT = (jwtToken) => {
  sessionStorage.setItem(SESSION_KEY, jwtToken);
};

export const getSessionJWT = () => {
  return sessionStorage.getItem(SESSION_KEY);
};

export const getDecodedJWT = () => {
  return jwt.decode(getSessionJWT());
};
