import email_regx from "../constants/email_regx";
import phone_regx from "../constants/phone_regx";

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
  if (!persons.FULL_NAME) {
    error.FULL_NAME = "Enter your full name";
  } else if (typeof persons.FULL_NAME !== "undefined") {
    if (!persons.FULL_NAME.match(/^[a-zA-Z]+$/)) {
      error.FULL_NAME = "Only letters are allowed";
    }
  }
  if (!persons.USERNAME) {
    error.USERNAME = "Username is required";
  } else if (persons.USERNAME.length > 50) {
    error.USERNAME = "Username should not exceed more than 50 characters";
  }
  if (!persons.GENDER) {
    error.GENDER = "This field is required";
  }
  if (persons.DATE_OF_BIRTH === undefined) {
    error.DATE_OF_BIRTH = "Enter your date of birth";
  } else if (calculateAge(persons.DATE_OF_BIRTH) < 20) {
    error.DATE_OF_BIRTH = "Not Valid age";
  }
  if (!persons.CONTACT_NUMBER) {
    error.CONTACT_NUMBER = "Enter your contact details";
  } else if (phone_regx.test(persons.CONTACT_NUMBER) === false) {
    error.CONTACT_NUMBER = "Contact details should contain only 10 digits";
  }
  if (!persons.EMAIL_ADDRESS) {
    error.EMAIL_ADDRESS = "Email Address is required";
  } else if (email_regx.test(persons.EMAIL_ADDRESS) === false) {
    error.EMAIL_ADDRESS = "Enter a valid email address";
  }
  if (!persons.MARITAL_STATUS) {
    error.MARITAL_STATUS = "This field is required";
  }
  if (!persons.PERMANENT_ADDRESS) {
    error.PERMANENT_ADDRESS = "The address field is empty";
  }
  if (!persons.PASSWORD) {
    error.PASSWORD = "Password field is required";
  } else if (persons.PASSWORD.length < 10 || persons.PASSWORD.length > 30) {
    error.PASSWORD = "The password must be between 10 to 30 characters";
  }
  if (!persons.CONFIRM_PASSWORD) {
    error.CONFIRM_PASSWORD = "Confirm Password field is required";
  } else if (persons.CONFIRM_PASSWORD < 10 || persons.CONFIRM_PASSWORD > 30) {
    error.CONFIRM_PASSWORD =
      "Confirm password must be between 10 to 30 characters";
  } else if (!(persons.PASSWORD === persons.CONFIRM_PASSWORD)) {
    error.CONFIRM_PASSWORD = "Password and Confirm Password are not matched";
  }
  return error[field];
};

export default handleError;
