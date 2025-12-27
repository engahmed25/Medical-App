function Button({
  children,
  onClick,
  disabled,
  className,
  type = "submit",
  withTransition = true,
  withHover = true,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
9      type={type}
      className={`
        ${className} 
        font-bold 
        rounded-[var(--main-radius)]
        ${withTransition ? "transition-colors duration-500" : ""}
        ${
          disabled
            ? "!cursor-not-allowed bg-gray-400  opacity-50 pointer-events-none"
            : "bg-[var(--main-color)] text-white cursor-pointer"
        }
        ${withHover && !disabled ? "hover:bg-[var(--main-lite-color)]" : ""}
      `}
      className={`${className} bg-[var(--main-color)] text-white font-bold rounded-[var(--main-radius)] ${
        withTransition
          ? "transition-colors duration-500 cursor-pointer"
          : "bg-gray-400 cursor-not-allowed"
      } ${withHover ? "hover:bg-[var(--main-lite-color)]" : ""} `}
    >
      {children}
    </button>
  );
}

export default Button;
