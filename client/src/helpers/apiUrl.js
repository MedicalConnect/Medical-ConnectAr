const isDevelopment = process.env.NODE_ENV === "development";
const apiUrl = isDevelopment
  ? "http://localhost:3001/"
  : "https://medicalconnectapi.onrender.com/";
  
export default apiUrl;
