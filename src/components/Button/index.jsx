const Button = ({ label, handleTest }) => {
  return (
    <button
      type="submit"
      className="w-[32.7rem] h-[5.6rem] bg-[color:var(--secondary-color)] text-[color:var(--white-color)] text-[length:var(--paragraph-font-size)] font-bold rounded-lg mb-[4rem] md:w-[37.6rem] transition-transform transform-gpu hover:scale-105 hover:bg-gradient-to-br from-[#FF6A3A] to-[#FF527B] hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-custom hover:shadow-md transition duration-300"
      onClick={handleTest}
    >
      {label}
    </button>
  );
};

export { Button };
