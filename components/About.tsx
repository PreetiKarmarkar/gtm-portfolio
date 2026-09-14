import { Fragment } from "react";
import Reveal from "./Reveal";

const STATS = [
  { number: "200+", label: "Users Researched" },
  { number: "3", label: "Products Shipped" },
  { number: "100+", label: "Community Members" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <Reveal className="about-left">
        <p className="eyebrow">About</p>
        <div className="stats">
          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && <div className="stat-divider" aria-hidden="true" />}
              <div className="stat">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </Reveal>

      <Reveal className="about-right" delay={0.15}>
        <h2 className="about-heading">Hi, I&rsquo;m Preeti.</h2>
        <div className="about-body">
          <p>
            Currently pursuing my Master&rsquo;s in Management of Technology at NYU. I&rsquo;m drawn to
            zero-to-one environments where ambiguity is high and building structure is part of the
            job.
          </p>
          <p>
            I focus on translating user behavior and data into scalable systems that drive real
            outcomes. Right now, I&rsquo;m exploring how AI can power better products, automate
            decision-making, and unlock new ways of building and scaling.
          </p>
        </div>
        <div className="about-tags">
          <span className="pill">📍 New York City</span>
          <span className="pill">🎓 New York University</span>
        </div>
      </Reveal>
    </section>
  );
}
