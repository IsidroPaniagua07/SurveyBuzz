import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from 'react'
const Index = () => {
const emailRef = useRef('')
  const templateParams = {
    to_email: "noreply.surveybuzz@gmail.com",
    survey_id: emailRef.current.value,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value)
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC
      )
      .then(
        (result) => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...");
        }
      );
  };

  // if(r.status===200) router.push(`/survey/${server==="http://localhost:3000"?'1':"635763cd7401a7f6069015d6"}`)

  return (
    <div className="flex flex-col w-full justify-center items-center gap-2">
      <div className="text-lg">Email survey links</div>
      <input ref={emailRef} className="border border-black" required placeholder="Email"/>
      <button
        className="bg-black text-white
       px-2"
        onClick={(e) => sendEmail(e)}
      >
        Send
      </button>
    </div>
  );
};

export default Index;
