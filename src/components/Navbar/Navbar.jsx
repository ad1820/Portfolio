import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "What I Do", href: "interests" },
    { label: "Say Hello", href: "contact" },
  ];

  return (
    <nav className="site-nav">
      <a href="#home" className="site-brand">AP<span>／</span></a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>Menu</button>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map((item, index) => <a key={item.href} href={`#${item.href}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}
      </div>
    </nav>
  );
};

export default Navbar;
