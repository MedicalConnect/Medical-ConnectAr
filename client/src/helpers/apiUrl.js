const { TYPE_DEPLOY } = process.env;

const apiUrl =
  TYPE_DEPLOY === "development"
    ? "https://medicalconnectapi.onrender.com"
    : "http://localhost:3001";

export default apiUrl;
