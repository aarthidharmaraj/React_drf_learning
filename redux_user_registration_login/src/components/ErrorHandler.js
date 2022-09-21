import * as regx from "constants/regx";
const calculateAge = (date) => {
  var today = new Date();
  var birthDate = new Date(date);
  var age_now = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return age_now;
};

const handleError = (e, persons, error) => {
  let field = e.target.name;
  console.log(field);
  if (field == "FULL_NAME" && !persons.FULL_NAME) {
    error.FULL_NAME = "Enter your full name";
  } else if (field == "FULL_NAME" && typeof persons.FULL_NAME !== "undefined") {
    if (!persons.FULL_NAME.match(/^[a-zA-Z]+$/)) {
      error.FULL_NAME = "Only letters are allowed";
    }
  }
  if (field == "USERNAME" && !persons.USERNAME) {
    error.USERNAME = "Username is required";
  } else if (field == "USERNAME" && persons.USERNAME.length > 50) {
    error.USERNAME = "Username should not exceed more than 50 characters";
  }
  if (field == "GENDER" && !persons.GENDER) {
    error.GENDER = "This field is required";
  }
  if (field == "DATE_OF_BIRTH" && persons.DATE_OF_BIRTH === undefined) {
    error.DATE_OF_BIRTH = "Enter your date of birth";
  } else if (
    field == "DATE_OF_BIRTH" &&
    calculateAge(persons.DATE_OF_BIRTH) < 20
  ) {
    error.DATE_OF_BIRTH = "Not Valid age";
  }
  if (field == "CONTACT_NUMBER" && !persons.CONTACT_NUMBER) {
    error.CONTACT_NUMBER = "Enter your contact details";
  } else if (
    field == "CONTACT_NUMBER" &&
    regx.phone_regx.test(persons.CONTACT_NUMBER) === false
  ) {
    error.CONTACT_NUMBER = "Contact details should contain only 10 digits";
  }
  if (field == "EMAIL_ADDRESS" && !persons.EMAIL_ADDRESS) {
    error.EMAIL_ADDRESS = "Email Address is required";
  } else if (
    field == "EMAIL_ADDRESS" &&
    regx.email_regx.test(persons.EMAIL_ADDRESS) === false
  ) {
    error.EMAIL_ADDRESS = "Enter a valid email address";
  }
  if (field == "MARITAL_STATUS" && !persons.MARITAL_STATUS) {
    error.MARITAL_STATUS = "This field is required";
  }
  if (field == "PERMANENT_ADDRESS" && !persons.PERMANENT_ADDRESS) {
    error.PERMANENT_ADDRESS = "The address field is empty";
  }
  if (field == "PASSWORD" && !persons.PASSWORD) {
    error.PASSWORD = "Password field is required";
  } else if (
    field == "PASSWORD" &&
    regx.pass_regx.test(persons.PASSWORD) === false
  ) {
    error.PASSWORD =
      "The password must contain 8 to 15 characters with atleast one upper case, lower case,with special characters";
  }
  if (field == "CONFIRM_PASSWORD" && !persons.CONFIRM_PASSWORD) {
    error.CONFIRM_PASSWORD = "Confirm Password field is required";
  } else if (
    field == "CONFIRM_PASSWORD" &&
    regx.pass_regx.test(persons.PASSWORD) === false
  ) {
    error.CONFIRM_PASSWORD =
      "Confirm password must contain 8 to 15 characters with atleast one upper case, lower case,with special characters";
  } else if (
    field == "CONFIRM_PASSWORD" &&
    !(persons.PASSWORD === persons.CONFIRM_PASSWORD)
  ) {
    error.CONFIRM_PASSWORD = "Password and Confirm Password are not matched";
  }
  return error[field];
};

export default handleError;
