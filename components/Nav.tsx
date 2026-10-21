"use client";

import { useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#mail", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
<>
<nav className="nav" aria-label="Primary">
<a className="disp" href="#top" style={{ fontWeight: '800', fontSize: '20px' }}>SU<span className="hl">.</span></a>
<ul>
{LINKS.map((l) => (
<li key={l.href}><a href={l.href}>{l.label}</a></li>
))}
</ul>
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
<a className="btn btn-a" href="mailto:shivamupadhyay2868@gmail.com">Hire me</a>
<button
className="navbtn"
aria-label={open ? "Close menu" : "Open menu"}
aria-expanded={open}
onClick={() => setOpen((v) => !v)}
>
{open ? "✕" : "☰"}
</button>
</div>
</nav>
<div className={`navsheet${open ? " open" : ""}`} role="menu">
{LINKS.map((l) => (
<a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
))}
</div>
</>
  );
}
