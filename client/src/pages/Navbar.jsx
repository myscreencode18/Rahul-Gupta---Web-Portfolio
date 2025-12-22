import React, { useState } from "react";

const TerminalNav = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 
        ${open ? "w-64 h-40" : "w-40 h-10"} 
        bg-black border border-green-400 rounded-lg shadow-lg 
        overflow-hidden cursor-pointer`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="font-mono text-green-400 text-sm p-2 h-full">
        {open ? (
          <div className="flex flex-col gap-2">
            <p
              onClick={() => handleScroll("about")}
              className="hover:text-white transition"
            >
              {">"} navigate --about
            </p>
            <p
              onClick={() => handleScroll("skills")}
              className="hover:text-white transition"
            >
              {">"} navigate --skills
            </p>
            <p
              onClick={() => handleScroll("projects")}
              className="hover:text-white transition"
            >
              {">"} navigate --projects
            </p>
            <p
              onClick={() => handleScroll("contact")}
              className="hover:text-white transition"
            >
              {">"} navigate --contact
            </p>
          </div>
        ) : (
          <p className="animate-pulse">{">"} _</p>
        )}
      </div>
    </div>
  );
};

export default TerminalNav;
