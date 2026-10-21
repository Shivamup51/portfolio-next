const repos = [
  { name: "CHAT_APP", desc: "Real-time chat application", lang: "JavaScript", url: "https://github.com/Shivamup51/CHAT_APP", live: "https://chat-app-backend-ten-flame.vercel.app" },
  { name: "Ananda", desc: "Full-stack TypeScript web app", lang: "TypeScript", url: "https://github.com/Shivamup51/Ananda", live: "https://ananda-chi.vercel.app" },
  { name: "kusum-innovations", desc: "Company/product marketing site", lang: "TypeScript", url: "https://github.com/Shivamup51/kusum-innovations", live: "https://kusum-innovations.vercel.app" },
  { name: "Guruji", desc: "Full-stack TypeScript web app", lang: "TypeScript", url: "https://github.com/Shivamup51/Guruji", live: "https://guruji-beryl.vercel.app" },
  { name: "Passport", desc: "Full-stack TypeScript web app", lang: "TypeScript", url: "https://github.com/Shivamup51/Passport", live: "https://passport-ten-mocha.vercel.app" },
  { name: "dental-web", desc: "Dental clinic marketing website", lang: "JavaScript", url: "https://github.com/Shivamup51/dental-web", live: "https://dental-web-rose.vercel.app" },
  { name: "dental-app", desc: "Generated React app for a dental clinic", lang: "JavaScript", url: "https://github.com/Shivamup51/dental-app", live: null },
  { name: "loveable", desc: "TypeScript web app", lang: "TypeScript", url: "https://github.com/Shivamup51/loveable", live: null },
  { name: "solara-play", desc: "TypeScript web app", lang: "TypeScript", url: "https://github.com/Shivamup51/solara-play", live: null },
  { name: "gpt", desc: "AI chat app built with OpenAI's API", lang: "JavaScript", url: "https://github.com/Shivamup51/gpt", live: "https://my-gpt-ten-gray.vercel.app" },
  { name: "E-Commerce", desc: "E-commerce store backend and frontend", lang: "JavaScript", url: "https://github.com/Shivamup51/E-Commerce", live: "https://e-commerce-backend-tau-liart.vercel.app" },
  { name: "Portfolio", desc: "An earlier personal portfolio site", lang: "JavaScript", url: "https://github.com/Shivamup51/Portfolio", live: "https://project-1-psi-gold.vercel.app" },
  { name: "Webpage-ScreenShotter", desc: "Tool to capture full-page website screenshots", lang: "JavaScript", url: "https://github.com/Shivamup51/Webpage-ScreenShotter", live: null },
  { name: "Agricultural-Data-Visualization", desc: "Data visualization for agricultural datasets", lang: "TypeScript", url: "https://github.com/Shivamup51/Agricultural-Data-Visualization", live: null },
  { name: "Vibe", desc: "Social/media web app", lang: "JavaScript", url: "https://github.com/Shivamup51/Vibe", live: "https://vibe-pink-tau.vercel.app" },
  { name: "News-App", desc: "News aggregator app", lang: "JavaScript", url: "https://github.com/Shivamup51/News-App", live: "https://news-app-seven-lime.vercel.app" },
  { name: "SignatureApp", desc: "Digital signature capture app", lang: "HTML", url: "https://github.com/Shivamup51/SignatureApp", live: null },
  { name: "Food-Eat", desc: "Food ordering web app", lang: "JavaScript", url: "https://github.com/Shivamup51/Food-Eat", live: "https://food-eat-seven.vercel.app" },
  { name: "E-Learning", desc: "E-learning platform UI", lang: "JavaScript", url: "https://github.com/Shivamup51/E-Learning", live: "https://e-learning-zeta-teal.vercel.app" },
  { name: "Hyggex", desc: "E-commerce / lifestyle storefront", lang: "JavaScript", url: "https://github.com/Shivamup51/Hyggex", live: "https://hyggex-rho.vercel.app" },
  { name: "Your-Tube", desc: "YouTube-style video browsing app", lang: "JavaScript", url: "https://github.com/Shivamup51/Your-Tube", live: "https://your-tube-chi.vercel.app" },
  { name: "Weather-App", desc: "Weather forecast app", lang: "JavaScript", url: "https://github.com/Shivamup51/Weather-App", live: null },
  { name: "Sentiment-Analysis", desc: "Text sentiment analysis in Python", lang: "Python", url: "https://github.com/Shivamup51/Sentiment-Analysis", live: null },
  { name: "Magma", desc: "Frontend of the Magma webpage", lang: "JavaScript", url: "https://github.com/Shivamup51/Magma", live: null },
  { name: "bmi_calculator", desc: "BMI calculator app", lang: "JavaScript", url: "https://github.com/Shivamup51/bmi_calculator", live: null },
];

export default function MoreProjects() {
  return (
<section className="wrap" id="projects" style={{ paddingTop: '112px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
<h2 className="disp sh">More on <span className="outline">GitHub</span></h2>
<p className="muted" style={{ maxWidth: '360px' }}>{repos.length}+ smaller builds and experiments, from AI tools to e-commerce and e-learning apps.</p>
</div>
<div className="bento">
{repos.map((r) => (
<article key={r.name} className="card c4" style={{ padding: '20px' }}>
<span className="tag">{r.lang ?? "Code"}</span>
<h3 className="disp" style={{ fontSize: '20px', fontWeight: '700', margin: '10px 0 6px' }}>{r.name}</h3>
<p className="muted" style={{ fontSize: '14px', margin: '0 0 16px' }}>{r.desc}</p>
<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
<a className="link" href={r.url} target="_blank" rel="noopener" style={{ fontSize: '14px' }}>Code ↗</a>
{r.live && <a className="link" href={r.live} target="_blank" rel="noopener" style={{ fontSize: '14px' }}>Live ↗</a>}
</div>
</article>
))}
</div>
</section>
  );
}
