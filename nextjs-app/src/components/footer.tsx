"use client";

import { Input } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Footer() {
  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "johndoe@example.com",
  );
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailFocusClick = () => {
    setEmailPlaceholder("");
  };

  const handleEmailSubmit = (event: FormEvent) => {
    setLoading(true)
    event.preventDefault(); // Prevent default form submission

    // Email validation logic
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false)
      return;
    }

    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false); // Reset the loading state
    });

    // Email is valid, proceed with submission    
    setEmail("");
    setEmailPlaceholder("johndoe@example.com");
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  return (
    <div>
      <div className="custom-shape-divider-bottom-1689628894 bg-slate-900">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="lg:mx-64 my-32 mx-10">
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl lg:text-3xl">
              Subscribe to our newsletter.
            </h1>
            <p className="lg:text-lg mt-1">
              Get notified about new features and updates.
            </p>
            <form className="mt-2">
              <div className="flex flex-col">
                <label htmlFor="emailInput" className="ml-2 text-blue-500">
                  Email
                </label>
                <div className="flex flex-col lg:flex-row items-center">
                  <input
                    id="emailInput"
                    onClick={handleEmailFocusClick}
                    value={email}
                    onChange={handleEmailChange}
                    className="transition hover:border-blue-500 rounded-2xl py-2 px-3 border-gray-300 border-2"
                    type="text"
                    placeholder={emailPlaceholder}
                  />
                  <div className="md:hidden">
                  <p className="text-rose-500 mt-1">{errorMessage}</p>

                  </div>
                  <button
                    type="submit"
                    onClick={handleEmailSubmit}
                    className="w-20 h-10 mt-4 lg:mt-0 text-blue-500 ml-4 duration-300 hero-button flex-row hover:border-blue-500 border-gray-300 border-2 transition px-3 py-1 rounded-2xl flex items-center justify-center"
                  >
                    {loading ? <Loading size="xs" /> : 'Submit'}
                  </button>
                </div>
                <div className="hidden lg:flex">
                <p className="ml-2 text-rose-500 mt-1">{errorMessage}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <p className="text-center">
        Made with ❤️ by the <span className="text-blue-500 font-semibold">UBC Booster</span> team.
        </p>
      </div>
    </div>
  );
}
