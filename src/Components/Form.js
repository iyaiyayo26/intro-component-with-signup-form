import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {
  const formik = useFormik({
    //buat initial value
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    //validation schema
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name cannot be empty"),
      lastName: Yup.string().required("Last Name cannot be empty"),
      email: Yup.string().required("Email cannot be empty").email("Looks like this is not an email"),
      password: Yup.string().required("Password cannot be empty"),
    }),
    //handle submission
    onSubmit: (values) => {
      console.log("form values", values);
    },
  });
  console.log(formik);
  return (
    <div className="xl:mx-8 xl:w-1/2 xl:mt-10">
      <div className="bg-[#6055a5] sm:rounded-lg xl:rounded-xl drop-shadow-myShadow">
        <p className="text-white text-center sm:py-5 sm:px-16 xl:py-2 sm:text-2xl xl:text-lg font-poppins">
          <span className="font-bold ">Try it free 7 days</span> then $20/mo. thereafter
        </p>
      </div>
      {/* form */}
      <div className="bg-white py-5 px-5 mt-5 rounded-xl xl:pb-14 xl:pt-12 xl:px-10 font-poppins drop-shadow-myShadow">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="flex justify-end items-center relative">
            <input type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} placeholder="First Name" className="w-full h-14 border border-solid border-gray-600 rounded-lg mt-5 " />
            {formik.errors.firstName && <img src="./assets/icon-error.svg" alt="error" className="absolute mr-5 w-8  mt-4" />}
          </div>
          {formik.errors.firstName && <p className="error text-right text-red-600 italic font-light">{formik.errors.firstName}</p>}

          <div className="flex justify-end items-center relative">
            <input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} placeholder="Last Name" className="w-full h-14 border border-solid border-gray-600 rounded-lg mt-5" />
            {formik.errors.firstName && <img src="./assets/icon-error.svg" alt="error" className="absolute mr-5 w-8  mt-4" />}
          </div>
          {formik.errors.lastName && <p className="error text-right text-red-600 italic font-light">{formik.errors.lastName}</p>}

          <div className="flex justify-end items-center relative">
            <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Email Address" className="w-full h-14 border border-solid border-gray-600 rounded-lg mt-5" />
            {formik.errors.firstName && <img src="./assets/icon-error.svg" alt="error" className="absolute mr-5 w-8  mt-4" />}
          </div>
          {formik.errors.email && <p className="error text-right text-red-600 italic font-light">{formik.errors.email}</p>}

          <div className="flex justify-end items-center relative">
            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Password" className="w-full h-14 border border-solid border-gray-600 rounded-lg mt-5" />
            {formik.errors.firstName && <img src="./assets/icon-error.svg" alt="error" className="absolute mr-5 w-8  mt-4" />}
          </div>
          {formik.errors.password && <p className="error text-right text-red-600 italic font-light">{formik.errors.password}</p>}

          <button type="submit" className="bg-[#38cc8c] w-full h-14 my-5 uppercase text-white font-semibold rounded-lg">
            claim your free trial
          </button>
        </form>
        <p className="text-gray-500 sm:text-center xl:text-left xl:text-xs px-10 ">
          By clicking the button, you are agreeing to our <span className="text-red-600 font-bold">Terms and Services</span>
        </p>
      </div>
    </div>
  );
}
