import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./css/signup.css";

export default function SigupForm() {
// DÙNG useState for the default implementations
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmedPassword, setconfirmedPassword] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault(); // chặn reload trang khi onSubmit={handleSubmit} ;
  //     const newUser = {
  //       // lấy ra giá trị value nhập bằng object
  //       name: name,
  //       email: email,
  //       password: password,
  //       phone: phone,
  //       confirmedPassword: confirmedPassword,
  //     };
  //     console.log(newUser);
  //   };

  //   console.log(formik.values);

  //   check lỗi useEffect khá rắc rối //
  //   useEffect(() => {
  //     if (name.length < 4) {
  //       console.log("name phải lớn hơn 4");
  //     }
  //   }, [name]);

  //  -------- Formik , Yup --------- //

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      // lấy giá trị ra thôi
      window.alert("Đăng Nhập Thành Công");
      console.log(values);
    },
  });

  console.log(formik.errors);

  //   cmm //
  return (
    <section>
      <h1 className="header">Sign Up</h1>
      <form
        className="huyform"
        //   onSubmit={handleSubmit}
        onSubmit={formik.handleSubmit}
      >
        <label>UserName</label>
        <input
          type="text"
          id="name"
          name="name"
          // onChange={(e) => setName(e.target.value)} // cơ bản
          value={formik.values.name} // cách nhanh nhất
          onChange={formik.handleChange}
          placeholder="Nhập UserName"
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          //   onChange={(e) => setEmail(e.target.value)}
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Nhập Email"
        />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}

        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          //   onChange={(e) => setPassword(e.target.value)}
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Nhập Password"
        />
        {formik.errors.password && (
          <p className="errorMsg">{formik.errors.password}</p>
        )}

        <label>Số Điện Thoại</label>
        <input
          type="number"
          id="phone"
          name="phone"
          //   onChange={(e) => setPhone(e.target.value)}
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Nhập Phone"
        />
        {formik.errors.phone && (
          <p className="errorMsg">{formik.errors.phone}</p>
        )}

        <label>ConfirmedPassword</label>
        <input
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          //   onChange={(e) => setconfirmedPassword(e.target.value)}
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Nhập confirmedPassword"
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg">{formik.errors.confirmedPassword}</p>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}
