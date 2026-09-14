import Reveal from "./Reveal";

type Item = {
  label: string;
  title: string;
  stat?: string;
  description: string;
};

const ITEMS: Item[] = [
  {
    label: "✦ Founder",
    title: "PM Club @ RCERT",
    stat: "100+ members · 15+ mentors",
    description:
      "Built the university's first product management community, organized product teardown workshops and mentorship programs.",
  },
  {
    label: "✦ Lead Strategist",
    title: "Content & Community Strategy",
    description:
      "Used insights from 80+ user and audience interviews to identify messaging and engagement gaps, shaping content, community messaging, webinars, and event strategy.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <Reveal className="section-header">
        <p className="eyebrow">Beyond the Job</p>
        <h2 className="section-heading">Leadership</h2>
      </Reveal>

      <div className="leadership-cards">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} className="leadership-card" delay={i * 0.1}>
            <p className="leadership-label">{item.label}</p>
            <h3 className="leadership-title">{item.title}</h3>
            {item.stat && <p className="leadership-stat">{item.stat}</p>}
            <p className="leadership-desc">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
