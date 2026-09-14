import type { CSSProperties } from "react";
import Reveal from "./Reveal";

type Accent = {
  number: string;
  tag: string;
  badge: string;
  title: string;
  description: string;
  subline: string;
  liveLink: string;
};

type Project = {
  number: string;
  tag: string;
  badge: string;
  title: string;
  description: string;
  subline?: string;
  image: string;
  imageScale: number;
  imagePosition: string;
  imageBg: string;
  bodyBg: string;
  /** Leave empty to hide the "View Case Study →" link. */
  caseStudyUrl?: string;
  liveUrl?: string;
  /** Optional per-card colour overrides; cards without one use the CSS defaults. */
  accent?: Accent;
};

// TODO: replace each liveUrl with the real deployed app URL.
const PROJECTS: Project[] = [
  {
    number: "01",
    tag: "AI · Fintech",
    badge: "✦ Has a built-in chatbot",
    title: "TalkMyBill",
    description:
      "AI-powered bill analyzer that breaks down any bill in plain English, flags sketchy charges, and tells you exactly what to say when you call to dispute.",
    subline: "Free. No signup. No lawyers needed. 😄",
    image: "/images/projects/talkmybill.png",
    imageScale: 1.35,
    imagePosition: "15% 8%",
    imageBg: "#EDE5DC",
    bodyBg: "#F5F0EA",
    liveUrl: "https://example.com/talkmybill",
  },
  {
    number: "02",
    tag: "AI · Sales",
    badge: "✦ AI-Powered Outreach",
    title: "OutreachIQ",
    description: "Find the pain. Show the proof. Send the email.",
    subline:
      "Paste a company name, get their real pain points with sources, and an email worth opening in seconds.",
    image: "/images/projects/outreachiq.png",
    imageScale: 1.2,
    imagePosition: "center top",
    imageBg: "#EDD8D0",
    bodyBg: "#F7F0ED",
    liveUrl: "https://example.com/outreachiq",
    accent: {
      number: "#555",
      tag: "#444",
      badge: "#7BAED4",
      title: "#111111",
      description: "#222222",
      subline: "#555555",
      liveLink: "#4A90C4",
    },
  },
  {
    number: "03",
    tag: "AI · Strategy",
    badge: "✦ Live Web Intelligence",
    title: "CompeteIQ",
    description: "Competitive intelligence, on demand.",
    subline:
      "Type any company or market — get a full competitive analysis in seconds. Threat alerts, feature gaps, user sentiment, and a one-click strategy memo. What takes a PM 2–3 days, done instantly.",
    image: "/images/projects/competeiq.png",
    imageScale: 1.2,
    imagePosition: "15% 8%",
    imageBg: "#C2CEDB",
    bodyBg: "#E4EAF0",
    liveUrl: "https://example.com/competeiq",
    accent: {
      number: "#555",
      tag: "#444",
      badge: "#A8C8E8",
      title: "#1a1a1a",
      description: "#222222",
      subline: "#555555",
      liveLink: "#A8C8E8",
    },
  },
];

function cardVars(p: Project): CSSProperties {
  const vars: Record<string, string> = {
    "--p-img-bg": p.imageBg,
    "--p-body-bg": p.bodyBg,
  };
  if (p.accent) {
    vars["--p-number"] = p.accent.number;
    vars["--p-tag"] = p.accent.tag;
    vars["--p-badge"] = p.accent.badge;
    vars["--p-title"] = p.accent.title;
    vars["--p-desc"] = p.accent.description;
    vars["--p-sub"] = p.accent.subline;
    vars["--p-live"] = p.accent.liveLink;
  }
  return vars as CSSProperties;
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <span className="vertical-label vertical-label--left" aria-hidden="true">
        Presentation · 001
      </span>
      <span className="vertical-label vertical-label--right" aria-hidden="true">
        Presentation · 003
      </span>

      <Reveal className="section-header">
        <p className="eyebrow">Selected Work</p>
        <h2 className="section-heading">Things I&rsquo;ve Built</h2>
      </Reveal>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article key={p.title} className="project-card" style={cardVars(p)}>
            <div className="project-image">
              <div className="project-image-zoom">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  style={{
                    objectPosition: p.imagePosition,
                    transform: `scale(${p.imageScale})`,
                    transformOrigin: p.imagePosition,
                  }}
                />
              </div>
            </div>

            <div className="project-body">
              <div className="project-meta">
                <span className="project-number">{p.number}</span>
                <span className="project-tag">{p.tag}</span>
              </div>
              <span className="project-badge">{p.badge}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              {p.subline && <p className="project-sub">{p.subline}</p>}
              <div className="project-links">
                {p.caseStudyUrl && (
                  <a href={p.caseStudyUrl} className="project-link project-link--case">
                    View Case Study →
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--live"
                  >
                    Try It Live ↗
                  </a>
                )}
              </div>
            </div>

            <div className="project-overlay" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
