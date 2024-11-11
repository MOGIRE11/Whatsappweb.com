import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function closeMenu() {
    setIsOpen();
  }

  return (
    <nav className="navigation-wrapper w-[20rem] max-w-[20rem]border self-start      
    // sticky top-0 z-10
     rounded-t-md bg-white border border-neutral-200">
      <div className="p-4 h-[60px] flex items-center justify-between w-full container mx-auto">
        <div className="logo">
          <a className="tracking-wide cursor-pointer text-black font-medium" onClick={closeMenu}>
            Swedoc UI
          </a>
        </div>

        <div className="right-nav flex items-center justify-between gap-4">
          {!isOpen ? (
            <button
              type="button"
              className="menubar flex flex-col items-end gap-1 px-2 rounded-md active:translate-y-[2px]"
              onClick={toggleMenu}
            >
              <div className="line bg-black rounded-lg h-[2px] w-[21px]"></div>
              <div className="line bg-black rounded-lg h-[2px] w-[21px]"></div>
              <div className="line bg-black rounded-lg h-[2px] w-[21px]"></div>
            </button>
          ) : (
            <button
              type="button"
              className="menubar px-2 rounded-md text-5xl font-light hover:bg-[whitesmoke] active:translate-y-[2px] text-black"
              onClick={toggleMenu} 
            >
              &times;
            </button>
          )}

          {/* mobile-menu content */}
          {isOpen ? (
            <section
              id="menu-content"
              className="w-full overflow-hidden 
              transition-all
            // absolute top-[3.75rem] left-0 z-10
                pt-2 bg-neutral-100/20 backdrop-blur-lg rounded-b-md"
              onClick={toggleMenu}
            >
              <div className="content divide-y p-2 divide-neutral-200 tracking-wide flex flex-col container mx-auto bg-white rounded-b-md border border-neutral-100 text-black">
                <a onClick={toggleMenu} className="content-items">
                  Home
                </a>

                <a onClick={toggleMenu} className="content-items">
                  About Swedoc UI
                </a>

                <a onClick={toggleMenu} className="content-items">
                  Our Story
                </a>

                <a onClick={toggleMenu} className="content-items">
                  Our Manifesto
                </a>

                <a
                  onClick={toggleMenu}
                  className="content-items"
                >
                  Our Creative Team
                </a>
              </div>
            </section>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
