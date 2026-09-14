import Reveal from "./Reveal";

const AREAS = [
  {
    title: "GTM Engineering",
    background: "#D6EAFA", // blue pale
    skills: ["Lead sourcing", "enrichment", "scoring", "routing", "outbound systems"],
  },
  {
    title: "Revenue Operations",
    background: "#F0DDD5", // soft rose
    skills: ["CRM architecture", "lifecycle automation", "reporting", "attribution"],
  },
  {
    title: "AI & Automation",
    background: "#E4EAF0", // cool blue-gray
    skills: ["Claude", "APIs", "n8n", "Make", "Python", "workflow automation"],
  },
  {
    title: "Sales Execution",
    background: "#EDE5DC", // warm cream
    skills: ["Cold outbound", "territory growth", "full-cycle selling", "GTM strategy"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <Reveal className="section-header">
        <p className="eyebrow">What I Can Own</p>
        <h2 className="section-heading">Capabilities</h2>
      </Reveal>

      <div className="capabilities-grid">
        {AREAS.map((area, i) => (
          <Reveal
            key={area.title}
            className="capability"
            style={{ background: area.background }}
            delay={i * 0.1}
          >
            <h3 className="capability-title">{area.title}</h3>
            {/* Non-breaking space keeps each "·" on the same line as the word before it */}
            <p className="capability-skills">{area.skills.join(" · ")}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
