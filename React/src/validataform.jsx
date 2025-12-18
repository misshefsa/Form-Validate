import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
export default function validateform() {
 const formik =useFormik({
    initialValues:{
      value:"",
      firstName:"",
      lastName:"",  
      age:"",
      gender:"",
      phoneNumber:"",
      city:"",
      country:"",
      email:"",
      experience:"",
      expectedSalary:"",   },
    validationSchema:Yup.object({
      firstName:Yup.string().required("First Name is required"),
      lastName:Yup.string().required("Last Name is required"),
      age:Yup.number().required("Age is required").min(18,"You must be at least 18 years old"),
      gender:Yup.string().required("Gender is required"),
      phoneNumber:Yup.string().required("Phone Number is required"),
      city:Yup.string().required("City is required"),
      country:Yup.string().required("Country is required"),
      email:Yup.string().email("Invalid email address").required("Email is required"),
      experience:Yup.number().required("Experience is required"),
      expectedSalary:Yup.number().required("Expected Salary is required")
    }), 
    onSubmit:(values)=>{
      console.log("Form data",values);
      alert("Form Submitted Successfully");
      localStorage.setItem("formData", JSON.stringify(values));
    }
  }); 

  return (
   <form onSubmit={formik.handleSubmit}>
    <div className="container">
      <div className="box">
      <h1>Application Form</h1>
      <p>Fill this Form And Your Job If you deserve</p>
      <div className="row">
        <div className="col-lg-6"><input type="text" className="form-control" placeholder="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} name="firstName" />
        {formik.touched.firstName && formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div> : null}
        </div>
        <div className="col-lg-6"><input type="text" className="form-control" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} name="lastName" />
        {formik.touched.lastName && formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
        </div>    
        <div className="col-lg-6"><input type="number" className="form-control" placeholder="Age" name="age" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} />
        {formik.touched.age && formik.errors.age ? <div className="error">{formik.errors.age}</div> : null}
        </div>
        <div className="col-lg-6"><input type="text" className="form-control" placeholder="Gender" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender} name="gender" />
        {formik.touched.gender && formik.errors.gender ? <div className="error">{formik.errors.gender}</div> : null}
        </div>
        <div className="col-lg-6"><input type="number" className="form-control" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phoneNumber} name="phoneNumber" />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className="error">{formik.errors.phoneNumber}</div> : null}
        </div>  

        <div className="col-lg-6"><input type="text" className="form-control" placeholder="City" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} name="city" />
        {formik.touched.city && formik.errors.city ? <div className="error">{formik.errors.city}</div> : null}  
        </div>
        <div className="col-lg-6"><input type="text" className="form-control" placeholder="Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} name="country" />
        {formik.touched.country && formik.errors.country ? <div className="error">{formik.errors.country}</div> : null}
        </div>
        <div className="col-lg-6"><input type="email" placeholder="Email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control" />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
        <div className="col-lg-6"><input type="number" name="experience" placeholder="Experience" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.experience} className="form-control" />
        {formik.touched.experience && formik.errors.experience ? <div className="error">{formik.errors.experience}</div> : null}
        </div>
        <div className="col-lg-6"><input type="number" placeholder="Expected Salary" name="expectedSalary" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.expectedSalary} className="form-control" />
        {formik.touched.expectedSalary && formik.errors.expectedSalary ? <div className="error">{formik.errors.expectedSalary}</div> : null}
        </div>
        <div className="col-lg-6 cvform"><input type="text" className="form-control" placeholder="Upload CV" /></div>
</div>
        <div className="col-lg-6"><button>Submit Application</button>
        </div>
</div>
      </div>

   </form>
  )
}
