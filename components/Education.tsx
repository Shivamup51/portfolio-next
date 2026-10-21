export default function Education() {
  return (
<section className="wrap" id="education" style={{ paddingTop: '112px' }}>
<h2 className="disp sh" style={{ marginBottom: '32px' }}>Where I <span className="outline">started</span></h2>
<div className="card c12" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'center' }}>
<div>
<span className="tag">B.Tech, Computer Science</span>
<h3 className="disp" style={{ fontSize: 'clamp(24px,3vw,34px)', fontWeight: '700', margin: '10px 0 4px' }}>Raj Kumar Goel Institute of Technology</h3>
<p className="muted" style={{ fontSize: '15px' }}>2020 – 2024</p>
</div>
<div className="chips">
<span className="chip">7.9 SGPA</span>
<span className="chip">Ghaziabad, India</span>
</div>
</div>
</section>
  );
}
