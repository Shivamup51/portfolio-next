const STAGES = [
  { label: "Sales Order", state: "done" },
  { label: "Production", state: "done" },
  { label: "Material Request", state: "now" },
  { label: "Goods Issue", state: "" },
  { label: "Batch", state: "" },
  { label: "Dispatch", state: "" },
];

export default function Hero() {
  return (
<header className="wrap hero" id="top">
<div>
<div className="herobadge">
<div className="avatar">SU</div>
<div>
<div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#D6CDB8' }}>
<span className="dot"></span>
<span>Senior Software Engineer</span>
</div>
<span className="mono muted" style={{ fontSize: '11.5px' }}>Delhi, India</span>
</div>
</div>
<h1 className="disp h1" style={{ marginTop: '26px' }}>I build the <span className="hl">backbone</span> behind AI agents <span className="outline">&amp; factories.</span></h1>
<p className="muted" style={{ fontSize: '18px', maxWidth: '560px' }}>Hi, I'm Shivam. Two-plus years of shipping event-driven microservices and multi-agent LLM products, from a Kafka and Redis ERP spanning 10+ services to DruidX, an agent platform for business teams.</p>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
<a className="btn btn-a" href="#work">See my work ↓</a>
<a className="btn btn-g" href="https://github.com/Shivamup51" target="_blank" rel="noopener">GitHub ↗</a>
<a className="btn btn-g" href="https://www.linkedin.com/in/shivam-upadhyay-824888246/" target="_blank" rel="noopener">LinkedIn ↗</a>
</div>
<div className="heroStats">
<div className="heroStat"><b>2+ yrs</b><span>SHIPPING PRODUCTION SYSTEMS</span></div>
<div className="heroStat"><b>10+</b><span>SERVICES ON ONE EVENT BUS</span></div>
<div className="heroStat"><b>3</b><span>AI PRODUCTS SHIPPED</span></div>
</div>
</div>

<aside className="card heroCard" style={{ padding: '26px' }} aria-label="Current role">
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
<span className="tag">Now building</span>
<span className="mono muted" style={{ fontSize: '12px' }}>Apr 2026 →</span>
</div>
<h2 className="disp" style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1.2' }}>EmployGenAI manufacturing workflow</h2>
<p className="muted" style={{ fontSize: '14px', margin: '8px 0 24px' }}>Six stages across five microservices on a Kafka and Redis event bus.</p>
<div className="stepper">
<div className="stepline"><div className="beam"></div></div>
{STAGES.map((s, i) => (
<div key={s.label} className={`steprow ${s.state}`}>
<span className="stepdot">{s.state === "done" ? "✓" : String(i + 1).padStart(2, "0")}</span>
<span>{s.label}</span>
{s.state === "now" && <span className="steptag">Live</span>}
</div>
))}
</div>
</aside>
</header>
  );
}
