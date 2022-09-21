export const hideShowPassword = (passtype, setPassType) => {
  console.log("type is", passtype);
  setPassType(passtype === "text" ? "password" : "text");
};

export const hideShowConPassword = (conpasstype, setConPassType) => {
  setConPassType(conpasstype === "text" ? "password" : "text");
};
