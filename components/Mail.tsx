"use client";

import { useState } from "react";

const TO = "shivamupadhyay2868@gmail.com";

export default function Mail() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${name || "a visitor"}`;
    const body = `${message}\n\n— ${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
<section className="wrap" id="mail" style={{ paddingTop: '112px' }}>
<h2 className="disp sh" style={{ marginBottom: '32px' }}>Send a <span className="outline">message</span></h2>
<div className="bento">
<div className="card c5">
<span className="tag">Direct</span>
<p className="muted" style={{ fontSize: '15px', margin: '14px 0 20px', lineHeight: '1.6' }}>Fill the form and your email client will open with everything pre-filled, or reach me directly below.</p>
<div style={{ display: 'grid', gap: '10px' }}>
<a className="link" href={`mailto:${TO}`}>{TO} ↗</a>
<a className="link" href="tel:+917297977115">+91 72979 77115 ↗</a>
<a className="link" href="https://www.linkedin.com/in/shivam-upadhyay-824888246/" target="_blank" rel="noopener">LinkedIn ↗</a>
<a className="link" href="https://github.com/Shivamup51" target="_blank" rel="noopener">GitHub ↗</a>
</div>
</div>
<form className="card c7" onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
<span className="tag">Message</span>
<input
required
placeholder="Your name"
value={name}
onChange={(e) => setName(e.target.value)}
style={{ background: '#0A0A08', border: '1px solid #2A2417', borderRadius: '12px', padding: '14px 16px', color: '#F5EFE0', fontSize: '15px', fontFamily: 'inherit' }}
/>
<input
required
type="email"
placeholder="Your email"
value={from}
onChange={(e) => setFrom(e.target.value)}
style={{ background: '#0A0A08', border: '1px solid #2A2417', borderRadius: '12px', padding: '14px 16px', color: '#F5EFE0', fontSize: '15px', fontFamily: 'inherit' }}
/>
<textarea
required
placeholder="What are you looking to build?"
rows={4}
value={message}
onChange={(e) => setMessage(e.target.value)}
style={{ background: '#0A0A08', border: '1px solid #2A2417', borderRadius: '12px', padding: '14px 16px', color: '#F5EFE0', fontSize: '15px', fontFamily: 'inherit', resize: 'vertical' }}
/>
<button type="submit" className="btn btn-a" style={{ justifySelf: 'start' }}>
{sent ? "Opening your email client ↗" : "Send message"}
</button>
</form>
</div>
</section>
  );
}
