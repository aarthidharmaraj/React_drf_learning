import handleError from "../components/ErrorHandler";
export const validate = (e, persons, error, setError, setSuccess) => {
  let field = e.target.name;
  error[field] = handleError(e, persons, error);
  console.log(error[field]);
  if (error[field]) {
    setError({ [field]: error[field] });
  }
  console.log(error);
  if (!(Object.keys(error).length > 1)) {
    setSuccess(true);
  }
};
