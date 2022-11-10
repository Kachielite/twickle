import { Formik } from "formik";
import * as Yup from "yup";
import coverImage from "../assets/images/reset.jpeg";
import userIcon from "../assets/icons/User.svg";
import emailIcon from "../assets/icons/Email.svg";
import passwordIcon from "../assets/icons/Password.svg";

const ResetPassword = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain 8 Characters containing at least 1 uppercase, 1 Lowercase, 1 Number and 1 special case character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Password is required"),
  });
  return (
    // Global Container
    <div className="relative bg-bg3 min-h-screen  flex flex-row justify-center items-center text-left z-0">
      {/* Error Container */}
      {false && <><div className="absolute bg-black opacity-75 w-screen min-h-screen z-10 flex justify-center items-center"></div>
      <div className="bg-white p-3 absolute z-50">
        <p>Invalid Token</p>
      </div></>}
      {/* Reset Container */}
      <div className="flex flex-row shadow-2xl justify-center  md:p-0 rounded-xl overflow-hidden mx-6 md:max-w-4xl  md:w-[53rem] md:h-[35rem] md:mx-0">
        {/* Image Container */}
        <div className="hidden md:block md:w-[50%]">
          <img
            src={coverImage}
            alt=""
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        {/* Input Container */}
        <Formik
          initialValues={{
            name: "Kachi",
            email: "derrick.onyekachi@gmail.com",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, errors) => {
            handleSubmit(values, errors);
          }}
          validationSchema={validationSchema}>
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
          }) => {
            return (
              <form
                onSubmit={handleSubmit}
                className=" bg-white px-8 w-screen  py-8 rounded-2xl md:rounded-none md:w-[50%] md:px-10 md:py-2">
                <h1 className="text-text1 py-3 font-bold font-sans text-[1.9rem] text-left mb-[1.5rem] md:mb-20">
                  Reset Password
                </h1>
                {/* Form Container */}
                <div className="w-full flex flex-col justify-center space-y-4">
                  <div>
                    <div className="flex flex-row justify-start items-center p-2 bg-bg4">
                      <img src={userIcon} alt="" srcset="" className="mr-3" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        readOnly
                        className="w-full p-1 bg-bg4 font-sans text-text1 outline-none"
                        value={values.name}
                        onChange={handleChange("name")}
                        onBlur={handleBlur("name")}
                      />
                    </div>
                    <p className="error">{touched.name && errors.name}</p>
                  </div>
                  <div>
                    <div className="flex flex-row justify-start items-center p-2 bg-bg4">
                      <img src={emailIcon} alt="" srcset="" className="mr-3" />
                      <input
                        type="text"
                        name="email"
                        readOnly
                        placeholder="Email Address"
                        className="w-full p-1 bg-bg4 font-sans text-text1 outline-none "
                        value={values.email}
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                      />
                    </div>
                    <p className="error">{touched.email && errors.email}</p>
                  </div>
                  <div>
                    <div
                      className={`flex flex-row justify-start items-center p-2 bg-bg3 ${
                        touched.password && errors.password
                          ? "border border-red"
                          : ""
                      }`}>
                      <img
                        src={passwordIcon}
                        alt=""
                        srcset=""
                        className="mr-3"
                      />
                      <input
                        type="password"
                        name="Password"
                        placeholder="Password"
                        className="w-full p-1 bg-bg3 font-sans text-text1 outline-none"
                        value={values.password}
                        onChange={handleChange("password")}
                        onBlur={handleBlur("password")}
                      />
                    </div>
                    <p className="error">
                      {touched.password && errors.password}
                    </p>
                  </div>
                  <div>
                    <div
                      className={`flex flex-row justify-start items-center p-2 bg-bg3 ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "border border-red"
                          : ""
                      }`}>
                      <img
                        src={passwordIcon}
                        alt=""
                        srcset=""
                        className="mr-3"
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full p-1 bg-bg3 font-sans text-text1 outline-none"
                        value={values.confirmPassword}
                        onChange={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                      />
                    </div>
                    <p className="error">
                      {touched.confirmPassword && errors.confirmPassword}
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={
                    errors.password || errors.confirmPassword ? true : false
                  }
                  className={
                    errors.password || errors.confirmPassword
                      ? `bg-blue-300 rounded-md text-white text-md mt-24 w-full p-3 md:mt-8`
                      : `bg-blue1 text-white text-md mt-24 w-full p-3 rounded-md shadow-lg  shadow-blue-200 hover:shadow-none border-2 border-blue1 hover:bg-white hover:text-blue1 hover:border-2 hover:border-blue1  duration-100 md:mt-8 `
                  }>
                  Reset Password
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
