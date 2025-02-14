export const Footer = () => {
    return (
      <footer className="flex flex-col items-center justify-center w-full bg-[#000000] text-white py-6">
        <p className="text-sm mb-2">
          Hecho con ❤️ por{" "}
          <a
            href="https://www.linkedin.com/in/julian-antonio-castro-alonso-a06438304/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          >
            Julian Castro
          </a>
        </p>
        <p className="text-sm">Para Alejandra Sánchez</p>
        <div className="mt-4 text-xs opacity-75">
          <p>&copy; {new Date().getFullYear()} Julian Antonio Castro Alonso.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  