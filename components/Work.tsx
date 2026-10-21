export default function Work() {
  return (
<section className="wrap" id="work" style={{ paddingTop: '112px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
<h2 className="disp sh">Selected <span className="outline">work</span></h2>
<p className="muted" style={{ maxWidth: '360px' }}>Four systems I designed, built and shipped end to end.</p>
</div>

<div className="bento">
<article className="card c8">
<span className="tag">AI platform · Cognio Labs · 2025</span>
<h3 className="disp" style={{ fontSize: 'clamp(40px,5vw,64px)', fontWeight: '800', lineHeight: '1', margin: '14px 0' }}>DruidX</h3>
<p className="muted" style={{ maxWidth: '560px', fontSize: '17px' }}>A business AI workspace where teams build custom AI agents without writing code, with human review before work is finalized. I built the full stack across four layers: UI, services, data and orchestration.</p>
<div className="tg" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', margin: '28px 0' }}>
<div className="tile"><b>Stateful multi-agent flows</b><span>LangGraph and LangChain with parallel execution, task delegation, tool use and human-in-the-loop approvals.</span></div>
<div className="tile"><b>Cloud computer for agents</b><span>Code execution, browser automation, file operations and background tasks in one environment.</span></div>
<div className="tile"><b>RAG and artifacts</b><span>Retrieval pipelines and artifact workflows deployed on GitHub and Vercel.</span></div>
<div className="tile"><b>Billing and metering</b><span>Four FastAPI services: authentication, subscriptions, credit metering and usage tracking with Dodo Payments.</span></div>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
<div className="chips"><span className="chip">Next.js</span><span className="chip">TypeScript</span><span className="chip">FastAPI</span><span className="chip">Python</span><span className="chip">LangGraph</span></div>
<a className="link" href="https://druidx.co/" target="_blank" rel="noopener">Visit druidx.co ↗</a>
</div>
</article>

<article className="card c4" style={{ display: 'flex', flexDirection: 'column' }}>
<span className="tag">EdTech · AI tutoring</span>
<h3 className="disp" style={{ fontSize: 'clamp(36px,4vw,48px)', fontWeight: '800', lineHeight: '1', margin: '14px 0' }}>VidyaLabs</h3>
<p className="muted" style={{ fontSize: '16px' }}>A personal tutor who speaks every child's language: multilingual AI tutoring (Swarika) for students and an assistant for teachers.</p>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px', margin: '24px 0' }}>
<div className="tile" style={{ padding: '14px' }}><b style={{ fontSize: '14px', margin: '0' }}>Lesson plans</b></div>
<div className="tile" style={{ padding: '14px' }}><b style={{ fontSize: '14px', margin: '0' }}>Worksheets</b></div>
<div className="tile" style={{ padding: '14px' }}><b style={{ fontSize: '14px', margin: '0' }}>Quizzes</b></div>
<div className="tile" style={{ padding: '14px' }}><b style={{ fontSize: '14px', margin: '0' }}>Presentations</b></div>
</div>
<p className="muted" style={{ fontSize: '14px' }}>Serves schools, educators, students and NGO partners, with knowledge-gap identification.</p>
<div style={{ marginTop: 'auto', paddingTop: '24px' }}><a className="link" href="https://vidyalabs.org/" target="_blank" rel="noopener">Visit vidyalabs.org ↗</a></div>
</article>

<article className="card c7">
<span className="tag">ERP · EmployGenAI · 2026</span>
<h3 className="disp" style={{ fontSize: 'clamp(34px,4vw,52px)', fontWeight: '800', lineHeight: '1', margin: '14px 0' }}>Manufacturing ERP</h3>
<p className="muted" style={{ fontSize: '17px' }}>An event-driven manufacturing backbone that takes a sales order all the way to dispatch, built as five microservices on Kafka and Redis.</p>
<div className="tg" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', margin: '28px 0' }}>
<div className="tile"><b>Capacity-aware scheduler</b><span>Work-center queues and a Gantt view, tracking time, cost and quantity per operation.</span></div>
<div className="tile"><b>Four-state inventory ledger</b><span>On-hand, available, allocated and reserved. Fixed a silent double-submit data-loss bug.</span></div>
<div className="tile"><b>Lot, batch, serial traceability</b><span>Four layers with lot-level costing and 3-decimal precision.</span></div>
<div className="tile"><b>Multi-tenant by design</b><span>Per-company DB routing and feature flags, zero code changes per new company.</span></div>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
<div className="chips"><span className="chip">Kafka</span><span className="chip">Redis</span><span className="chip">Azure Blob</span><span className="chip">Next.js</span></div>
<a className="link" href="https://github.com/Shivamup51/ERP-BACKEND" target="_blank" rel="noopener">Backend repo ↗</a>
</div>
</article>

<article className="card c5" style={{ display: 'flex', flexDirection: 'column' }}>
<span className="tag">Open project · Multi-agent</span>
<h3 className="disp" style={{ fontSize: 'clamp(34px,4vw,44px)', fontWeight: '800', lineHeight: '1', margin: '14px 0' }}>AI Agent Platform</h3>
<p className="muted" style={{ fontSize: '16px' }}>A 15-node LangGraph system with a DAG planner and six parallel specialists, guarded by a grounding layer that rejects unsupported numbers.</p>
<div style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr) auto', gap: '16px', alignItems: 'center', margin: '26px 0' }} aria-label="Planner fans out to six agents, then synthesizes">
<div className="node">DAG<br />planner</div>
<div style={{ display: 'grid', gap: '8px' }}>
<div className="ag"></div>
<div className="ag" style={{ animationDelay: '.3s' }}></div>
<div className="ag" style={{ animationDelay: '.6s' }}></div>
<div className="ag" style={{ animationDelay: '.9s' }}></div>
<div className="ag" style={{ animationDelay: '1.2s' }}></div>
<div className="ag" style={{ animationDelay: '1.5s' }}></div>
</div>
<div className="node">Grounded<br />answer</div>
</div>
<div className="chips"><span className="chip">Qdrant RAG</span><span className="chip">SSE streaming</span><span className="chip">Composio</span><span className="chip">60 endpoints</span></div>
<div style={{ marginTop: 'auto', paddingTop: '24px' }}><a className="link" href="https://github.com/Shivamup51" target="_blank" rel="noopener">See GitHub ↗</a></div>
</article>
</div>
</section>
  );
}
