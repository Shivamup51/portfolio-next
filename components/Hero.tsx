export default function Hero() {
  return (
<header className="wrap hero" id="top">
<div>
<div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 16px', borderRadius: '999px', border: '1px solid #3A311C', fontSize: '13px', color: '#D6CDB8' }}>
<span className="dot"></span>
<span>Senior Software Engineer · Delhi, India</span>
</div>
<h1 className="disp h1" style={{ marginTop: '28px' }}>I build the <span className="hl">backbone</span> behind AI agents <span className="outline">&amp; factories.</span></h1>
<p className="muted" style={{ fontSize: '19px', maxWidth: '580px' }}>Hi, I'm Shivam. Two-plus years of shipping event-driven microservices and multi-agent LLM products, from a Kafka and Redis ERP spanning 10+ services to DruidX, an agent platform for business teams.</p>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '36px' }}>
<a className="btn btn-a" href="#work">See my work ↓</a>
<a className="btn btn-g" href="https://github.com/Shivamup51" target="_blank" rel="noopener">GitHub ↗</a>
<a className="btn btn-g" href="https://www.linkedin.com/in/shivam-upadhyay-824888246/" target="_blank" rel="noopener">LinkedIn ↗</a>
</div>
</div>

<aside className="card" style={{ padding: '26px' }} aria-label="Current role">
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
<span className="tag">Now building</span>
<span className="mono muted" style={{ fontSize: '12px' }}>Apr 2026 →</span>
</div>
<h2 className="disp" style={{ fontSize: '26px', fontWeight: '700', lineHeight: '1.15' }}>EmployGenAI manufacturing workflow</h2>
<p className="muted" style={{ fontSize: '14px', margin: '8px 0 20px' }}>Six stages across five microservices on a Kafka and Redis event bus.</p>
<div style={{ display: 'grid', gap: '8px' }}>
<div className="st" style={{ animationDelay: '0s' }}><i>01</i>Sales Order</div>
<div className="st" style={{ animationDelay: '1s' }}><i>02</i>Production</div>
<div className="st" style={{ animationDelay: '2s' }}><i>03</i>Material Request</div>
<div className="st" style={{ animationDelay: '3s' }}><i>04</i>Goods Issue</div>
<div className="st" style={{ animationDelay: '4s' }}><i>05</i>Batch</div>
<div className="st" style={{ animationDelay: '5s' }}><i>06</i>Dispatch</div>
</div>
</aside>
</header>
  );
}
