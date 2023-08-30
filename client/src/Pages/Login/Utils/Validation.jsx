import "../../../styles/Validation.css";

export default function Validation(userData) {
  const errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = (
      <span className="error">Please enter a valid e-mail address</span>
    );
  }
  if (!userData.email) {
    errors.email = (
      <span className="error">Your e-mail address is required</span>
    );
  }
  if (userData.email.length > 35) {
    errors.email = (
      <span className="error">The e-mail must not exceed 35 characters</span>
    );
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = (
      <span className="error">
        la contraseña debe contener al menos un número
      </span>
    );
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = (
      <span className="error">
        la contraseña debe tener un tamaño entre 6 y 10 caracteres
      </span>
    );
  }
  if (!userData.password) {
    errors.password = (
      <span className="error">You cannot access without your password</span>
    );
  }

  return errors;
}
