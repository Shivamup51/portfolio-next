export default function Experience() {
  return (
<section className="wrap" id="experience" style={{ paddingTop: '128px' }}>
<h2 className="disp sh" style={{ marginBottom: '40px' }}>Where I've <span className="outline">built</span></h2>

<div className="job">
<div className="mono muted" style={{ fontSize: '13px' }}>Apr 2026 – Present</div>
<div><h3 className="disp jt" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.1' }}>EmployGenAI</h3><p className="muted" style={{ fontSize: '15px' }}>Senior Software Engineer</p></div>
<ul>
<li>Architected the six-stage manufacturing workflow across five microservices on a Kafka and Redis architecture spanning 10+ services.</li>
<li>Built a scheduling engine that reschedules automatically around lunch and maintenance windows.</li>
<li>Delivered the PR → PO → GR procurement flow with Azure Blob upload and led three Next.js dashboards.</li>
</ul>
</div>
<div className="job">
<div className="mono muted" style={{ fontSize: '13px' }}>Jan 2025 – Feb 2026</div>
<div><h3 className="disp jt" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.1' }}>Cognio Labs</h3><p className="muted" style={{ fontSize: '15px' }}>Software Development Engineer</p></div>
<ul>
<li>Built DruidX end to end on Next.js, TypeScript, FastAPI and Python.</li>
<li>Designed stateful multi-agent workflows plus an agent builder with LangGraph and LangChain.</li>
<li>Shipped four FastAPI services for auth, subscriptions, credit metering and usage tracking.</li>
</ul>
</div>
<div className="job" style={{ borderBottom: '1px solid #2A2417' }}>
<div className="mono muted" style={{ fontSize: '13px' }}>Jul 2024 – Jan 2025</div>
<div><h3 className="disp jt" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.1' }}>Coco Pocco</h3><p className="muted" style={{ fontSize: '15px' }}>Full Stack Developer</p></div>
<ul>
<li>Developed the Node.js, Express and MongoDB backend for a B2B and B2C marketplace with Prometheus monitoring.</li>
<li>Introduced WebSocket live-selling for real-time product demos.</li>
<li>Integrated Twilio OTP and Razorpay, plus three-level MongoDB aggregation pipelines.</li>
</ul>
</div>
</section>
  );
}
