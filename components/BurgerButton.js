export default function BurgerButton({
  isOpen,
  setIsOpen,
  isProjectPage = false,
  scrolled = false,
}) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-50 lg:flex lg:flex-row lg:gap-3"
      aria-label="Toggle navigation"
    >
      <p
        className={`hidden lg:block font-sans font-bold ${isProjectPage && !scrolled && !isOpen ? "text-white" : "text-text-secondary"}`}
      >
        menu
      </p>
      <div className="flex flex-col justify-center items-end gap-1.5 group">
        <span
          className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? "bg-white" : "bg-text-primary"}`}
          style={{
            width: "28px",
            transform: isOpen ? "translateY(7px) rotate(45deg)" : "none",
          }}
        />
        <span
          className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? "bg-white" : "bg-text-primary"}`}
          style={{
            width: "20px",
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scaleX(0)" : "none",
          }}
        />
        <span
          className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? "bg-white" : "bg-text-primary"}`}
          style={{
            width: "25px",
            transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          }}
        />
      </div>
    </button>
  )
}
