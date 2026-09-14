"use client";

import { useEffect, useRef, useState } from "react";

type Tool =
  | { name: string; kind: "cdn"; slug: string; color: string }
  | { name: string; kind: "svg"; render: () => React.ReactNode }
  | { name: string; kind: "text"; color: string };

function SlackMark() {
  return (
    <svg viewBox="0 0 127 127" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="#E01E5A"
        d="M26.5 81.3c0 7.3-5.9 13.2-13.2 13.2S0 88.6 0 81.3s5.9-13.2 13.2-13.2h13.2v13.2zm6.6 0c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2v-33z"
      />
      <path
        fill="#36C5F0"
        d="M46.3 26.3c-7.3 0-13.2-5.9-13.2-13.2S39 0 46.3 0s13.2 5.9 13.2 13.2v13.2H46.3zm0 6.7c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2H13.2C5.9 59.4 0 53.5 0 46.2S5.9 33 13.2 33h33.1z"
      />
      <path
        fill="#2EB67D"
        d="M99.2 46.2c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2-5.9 13.2-13.2 13.2H99.2V46.2zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2V13.2C66.2 5.9 72.1 0 79.4 0s13.2 5.9 13.2 13.2v33z"
      />
      <path
        fill="#ECB22E"
        d="M79.4 99.2c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2-13.2-5.9-13.2-13.2V99.2h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2s5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2H79.4z"
      />
    </svg>
  );
}

function PowerPointMark() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="19" cy="16" r="12" fill="#D35230" />
      <path d="M19 4a12 12 0 0 1 12 12H19z" fill="#FF8F6B" />
      <path d="M19 16h12a12 12 0 0 1-12 12z" fill="#ED6C47" />
      <rect x="1" y="7" width="18" height="18" rx="2" fill="#B7472A" />
      <path
        fill="#FFFFFF"
        d="M6.4 11h4.4c2.4 0 3.8 1.2 3.8 3.3 0 2.2-1.5 3.4-3.9 3.4H8.9V21H6.4V11zm2.5 2v2.8h1.6c1 0 1.6-.5 1.6-1.4 0-.9-.6-1.4-1.6-1.4H8.9z"
      />
    </svg>
  );
}

const TOOLS: Tool[] = [
  { name: "Notion", kind: "cdn", slug: "notion", color: "000000" },
  { name: "Figma", kind: "cdn", slug: "figma", color: "F24E1E" },
  { name: "Jira", kind: "cdn", slug: "jira", color: "0052CC" },
  { name: "Trello", kind: "cdn", slug: "trello", color: "0052CC" },
  { name: "Slack", kind: "svg", render: () => <SlackMark /> },
  { name: "Miro", kind: "cdn", slug: "miro", color: "FFD02F" },
  { name: "Google Analytics", kind: "cdn", slug: "googleanalytics", color: "E37400" },
  { name: "Google Sheets", kind: "cdn", slug: "googlesheets", color: "34A853" },
  { name: "PowerPoint", kind: "svg", render: () => <PowerPointMark /> },
  { name: "Claude", kind: "text", color: "#CC785C" },
];

const COPIES = 4;

/** Brand icon from the Simple Icons CDN, falling back to the tool name if it can't load. */
function CdnIcon({ slug, color, name }: { slug: string; color: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return <span className="tool-badge-text">{name}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt=""
      loading="eager"
      onError={() => setFailed(true)}
    />
  );
}

function Badge({ tool }: { tool: Tool }) {
  if (tool.kind === "text") {
    return (
      <div className="tool-badge tool-badge--claude" title={tool.name}>
        <span style={{ color: tool.color }}>{tool.name}</span>
      </div>
    );
  }
  return (
    <div className="tool-badge" title={tool.name}>
      {tool.kind === "cdn" ? (
        <CdnIcon slug={tool.slug} color={tool.color} name={tool.name} />
      ) : (
        tool.render()
      )}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Tools I work with">
      <p className="marquee-caption">Tools I work with</p>
      <div className="marquee-viewport">
        <div className="marquee-track">
          {Array.from({ length: COPIES }).map((_, copy) => (
            <div
              key={copy}
              style={{ display: "flex" }}
              aria-hidden={copy > 0 ? "true" : undefined}
              role={copy === 0 ? "list" : undefined}
            >
              {TOOLS.map((tool) => (
                <div key={tool.name} role={copy === 0 ? "listitem" : undefined} aria-label={tool.name}>
                  <Badge tool={tool} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
