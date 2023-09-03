import React, { useState } from "react";
import { Button } from "../Button";
import MobileIllustration from "../../assets/images/illustration-sign-up-mobile.svg";
import { Link } from "react-router-dom";
import DesktopIllustration from "../../assets/images/illustration-sign-up-desktop.svg";
import "../../styles/variables.css";
import "../../styles/utils.css";

const SignupCard = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(true);
  };

  const handleTest = (event) => {
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      event.preventDefault();
    }
  };

  return (
    <section className="flex flex-col justify-center items-center text-[color:var(--secondary-color)] md:bg-[color:var(--tertiary-color)] md:h-screen">
      <div className="md:flex md:justify-center md:items-center md:flex-row-reverse md:bg-[color:var(--white-color)] md:w-[92.8rem] md:h-[64.1rem] md:rounded-[3.6rem]">
        <div className="w-full pb-10 md:pb-0 md:pr-6 select-none">
          <picture>
            <source srcSet={DesktopIllustration} media="(min-width:768px)" />
            <img
              srcSet={MobileIllustration}
              alt="placeholder"
              className="w-full"
            />
          </picture>
        </div>

        <div className="p-6 md:p-0 flex flex-col items-left md:mb-[9.8rem] md:mt-[9.7rem] md:px-[6.4rem]">
          <h1 className="text-[4rem] font-bold mb-[2.4rem] md:text-[5.6rem] select-none">
            Stay updated!
          </h1>
          <p className="text-[length:var(--paragraph-font-size)] font-normal mb-[2.4rem] select-none">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="text-[length:var(--paragraph-font-size)] custom-list-marker pr-6 md:p-0 select-none">
            <li className="mb-[1rem]">
              Product discovery and building what{" "}
              <span className="pl-[3.7rem] md:pl-0">matters</span>
            </li>
            <li className="mb-[1rem]">
              Measuring to ensure updates are a{" "}
              <span className="pl-[3.7rem] md:pl-0">success</span>
            </li>
            <li className="mb-[4rem]">And much more!</li>
          </ul>

          <form className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[12px] font-bold pb-[0.8rem] flex justify-between"
            >
              Email address
              <span className="text-[color:var(--vermellion2)] font-bold mr-[4.4rem] md:mr-0">
                {isValidEmail ? "" : "Valid email required"}
              </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              className={`pl-[2.4rem] text-[length:var(--paragraph-font-size)] placeholder:py-[1.6rem] border border-[color:var(--border-color)] rounded-lg w-[32.7rem] h-[5.6rem] md:w-[37.6rem] cursor-pointer mb-[2.4rem] outline-none ${
                !isValidEmail
                  ? "bg-[color:var(--vermellion)] text-[color:var(--vermellion2)] border-[color:var(--vermellion2)] placeholder:text-[color:var(--vermellion2)]"
                  : ""
              } `}
              value={email}
              onChange={handleEmailChange}
            />

            <Link to={isValidEmail ? `/success?email=${email}` : "#"}>
              <Button
                label="Subscribe to monthly newsletter"
                handleTest={handleTest}
              />
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export { SignupCard };
