import * as yup from "yup";

export const schema = yup.object({
    username: yup.string().required('Need username to register'),
    email: yup.string().email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Please enter a valid email address"
    ),
    password: yup
    .string()
    .required("Can't register without a password you dummy")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
})