import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let timer;

    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    }

    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isSubmitted, errorMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Fill all the info");
    } else {
      setIsSubmitted(true);
      clearFormFields();
    }
  };

  const clearFormFields = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="pt-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form className="flex flex-col w-full md:w-1/2" onSubmit={handleSubmit}>
            {isSubmitted && (
              <p
                className="text-green-500 text-center text-xl animate-fade-in mb-10"
                style={{
                  animationDuration: "0.5s",
                  animationTimingFunction: "ease-in",
                }}
              >
                Form submitted. I will contact you soon!
              </p>
            )}
            {errorMessage && (
              <p className="text-red-500 text-center text-xl animate-fade-in mb-10"
              style={{
                animationDuration: "0.5s",
                animationTimingFunction: "ease-in",
              }}>{errorMessage}</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
        <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              onClick={handleSubmit}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
