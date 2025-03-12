import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} My App</p>
      </footer>
    </div>
  );
};

export default Footer;
