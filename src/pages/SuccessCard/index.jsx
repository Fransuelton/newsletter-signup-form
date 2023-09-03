import iconSuccess from "../../assets/images/icon-success.svg";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import "../../styles/variables.css";
import { useLocation } from "react-router-dom";

const SuccessCard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  return (
    <section className="text-[color:var(--secondary-color)] md:bg-[color:var(--tertiary-color)] md:h-screen grid">
      <div className="pt-[14.9rem] px-6 md:pt-[6.4rem] md:px-[6.4rem] md:bg-[color:var(--white-color)] md:w-[50.4rem] md:h-[52rem] md:rounded-[3.6rem] place-self-center">
        <div>
          <img src={iconSuccess} alt="" className="mb-[4rem]" />
        </div>

        <h2 className="text-[4rem] md:text-[5.6rem] font-bold leading-[100%] mb-[2.4rem]">
          Thanks for subscribing!
        </h2>

        <p className="text-[length:var(--paragraph-font-size)] mb-[26.3rem] md:mb-[4rem]">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription
        </p>
        <Link to="/">
          <div className="text-center">
            <Button label="Dismiss message" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export { SuccessCard };
