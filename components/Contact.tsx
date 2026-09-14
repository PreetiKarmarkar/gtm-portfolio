import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal>
        <h2 className="contact-heading">Let&rsquo;s build something.</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="contact-sub">
          Open to full-time GTM roles, collaborations, and good conversations.
        </p>
      </Reveal>
      <div className="contact-ctas">
        <Reveal delay={0.1}>
          <a href="mailto:ppk2035@nyu.edu" className="btn btn-contact-primary">
            ppk2035@nyu.edu ↗
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="https://linkedin.com/in/preeti-karmarkar-174370255"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contact-secondary"
          >
            LinkedIn ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
