import Reveal from "./Reveal";

const ROLES = [
  {
    role: "Go-to-Market (GTM) Engineer",
    company: "SODA.IO · New York City",
    date: "Jun 2025 – Present",
    pills: ["15-Min Setup", "+25% Conversions", "2x Velocity"],
    description:
      "Engineered 15-minute integration templates for developers that automatically piped test results into Soda Cloud dashboards for VPs, bridging technical proof with executive ROI. This removed trial setup friction, doubled enterprise deal velocity, and lifted trial-to-paid conversions by 25%.",
  },
  {
    role: "Go-to-Market & Product Lead",
    company: "Omnicom Media Group · New York City",
    date: "Sep – Dec 2025",
    pills: ["6-Week MVP", "6-Person Team", "-40% Turnaround"],
    description:
      "Owned product and GTM direction for an AI-powered social/review intelligence pipeline (NYU × Omnicom capstone for L'Oréal), defined the sentiment, audience, and campaign-signal taxonomy that turned Amazon, Reddit, and public data into self-serve GTM insights for media teams, cutting insight turnaround ~40%.",
  },
  {
    role: "Product Management Intern",
    company: "Wealth Note Investments · Pune",
    date: "Jan – May 2024",
    pills: ["200+ Users", "12-Week MVP", "+20% Activation"],
    description:
      "Defined product vision and MVP scope, authored PRD, launched beta within 12 weeks. Used SQL funnel analysis to identify 35% post-signup drop-off and introduced guided onboarding.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal className="section-header section-header--center">
        <p className="eyebrow">Where I&rsquo;ve Worked</p>
        <h2 className="section-heading">Experience</h2>
      </Reveal>

      <div className="timeline">
        {ROLES.map((item, i) => (
          <Reveal key={item.role} className="timeline-item" x={-20} y={0} duration={0.5} delay={i * 0.1}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-top">
              <h3 className="timeline-role">{item.role}</h3>
              <span className="timeline-date">{item.date}</span>
            </div>
            <p className="timeline-company">{item.company}</p>
            <div className="timeline-pills">
              {item.pills.map((pill) => (
                <span key={pill} className="pill">
                  {pill}
                </span>
              ))}
            </div>
            <p className="timeline-desc">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
