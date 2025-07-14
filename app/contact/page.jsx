"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// Contact Information
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 940 831 6491",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "deshanivanmali@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description:
      "Near Bus Stand Main Road,Dis:Amerli,Timbi-362730,Gujrat,India",
  },
  {
     icon: <RiTeamFill />,
    title:"Team",
    description:"infodeshanivanmali@gmail.com"
  }
];

// Validation Schema using Yup
const validationSchema = Yup.object({
  from_name: Yup.string().required("First name is required"),
  from_firstname: Yup.string().required("Last name is required"),
  from_email: Yup.string().email("Invalid email address").required("Email is required"),
  from_phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
    serviceType: Yup.string().required("Please select a service"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  // Formik initialization
  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_firstname: "",
      from_email: "",
      from_phone: "",
      serviceType: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {     
      const message = "Your message has been received,";
      
      toast.success(`${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",      
        transition: Bounce,
        });
      // Handle form submission, e.g., send to the backend
      emailjs.send(
        "service_zsw4311", 
        "template_etbg9zs", 
        values,
        'v0vcIADM7yFgxVZTn'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success(`✅ ${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          
          // Reset the form only after successful submission
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error(`Submission failed:`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
      )
      .finally(() => {
        setSubmitting(false);  // Enable form submission button again
      });
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4 } }}
      className="py-6"
    >
       <ToastContainer />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let`s Work Together</h3>
              <p className="text-white/50">
                Just fill the form and submit it ,I will response you within a hour.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="from_name"
                  placeholder="First name"
                  value={formik.values.from_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.from_name && formik.errors.from_name && (
                  <p className="text-red-500 text-sm">{formik.errors.from_name}</p>
                )}
                <Input
                  type="text"
                  name="from_firstname"
                  placeholder="Last name"
                  value={formik.values.from_firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.from_firstname && formik.errors.from_firstname && (
                  <p className="text-red-500 text-sm">{formik.errors.from_firstname}</p>
                )}
                <Input
                  type="email"
                  name="from_email"
                  placeholder="Email address"
                  value={formik.values.from_email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.from_email && formik.errors.from_email && (
                  <p className="text-red-500 text-sm">{formik.errors.from_email}</p>
                )}
                <Input
                  type="tel"
                  name="from_phone"
                  placeholder="Phone number"
                  value={formik.values.from_phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.from_phone && formik.errors.from_phone && (
                  <p className="text-red-500 text-sm">{formik.errors.from_phone}</p>
                )}
              </div>

              {/* Select */}
              <Select
                onValueChange={(value) =>
                  formik.setFieldValue("serviceType", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="webDevelopment">Web Development</SelectItem>
                    <SelectItem value="uiDevelopment">UI/UX</SelectItem>
                    <SelectItem value="backendDevelopment">Backend Development</SelectItem>
                    <SelectItem value="appDevelopment">App Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {formik.touched.serviceType && formik.errors.serviceType && (
                <p className="text-red-500 text-sm">{formik.errors.serviceType}</p>
              )}

              {/* Textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}

              {/* Submit Button */}
              <Button type="submit" size="md" className="max-w-40 py-3 px-4">
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-1">
            <ul className="flex flex-col gap-10">
              {info.map((info, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#24242c] text-accent rounded-md flex justify-center items-center">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 capitalize">{info.title}</p>
                      <h3 className="text-xl">{info.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
