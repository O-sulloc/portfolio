import { Fragment, useState } from 'react';
import { Dialog, IconButton } from '@mui/material';
import { Close, OpenInNew } from '@mui/icons-material';

type Highlight = { value: string; label: string; note?: string };
type EnquiryStat = { value: string; label: string; asOf?: string; note?: string };
type LighthouseMetric = { metric: string; before: number | null; after: number | null };
type PageDiff = { name: string; before?: string; after?: string; note?: string };
type Section = { heading: string; body: string };
type DiagramStage = { label: string; sub?: string };
type Diagram = { stages: DiagramStage[]; notes?: string[] };

export type CaseStudyData = {
  teaserTitle?: string;
  teaserBlurb?: string;
  tagline?: string;
  liveUrl?: string;
  legacyUrl?: string;
  cover?: string;
  diagram?: Diagram;
  highlights?: Highlight[];
  enquiryStat?: EnquiryStat;
  lighthouse?: LighthouseMetric[];
  lighthouseNote?: string;
  pages?: PageDiff[];
  sections?: Section[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  companyName: string;
  date: string;
  data: CaseStudyData;
};

// 스크린샷이 아직 없을 때 회색 플레이스홀더로 대체 (깨진 이미지 방지)
const Shot = ({ src, alt }: { src?: string; alt: string }) => {
  const [failed, setFailed] = useState(!src);
  if (failed || !src) {
    return (
      <div className="cs-shot cs-shot--empty" role="img" aria-label={`${alt} (screenshot pending)`}>
        <span>{alt}</span>
      </div>
    );
  }
  return <img className="cs-shot" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
};

const scoreClass = (n: number) => (n >= 90 ? 'good' : n >= 50 ? 'ok' : 'poor');

// 스크린샷 대신 파이프라인 흐름을 인라인으로 그리는 다이어그램 히어로 (Odoo 케이스용)
const CaseDiagram = ({ diagram }: { diagram: Diagram }) => (
  <div className="cs-diagram">
    <div className="cs-diagram__flow">
      {diagram.stages.map((s, i) => (
        <Fragment key={s.label}>
          <div className={i === 0 ? 'cs-node cs-node--origin' : 'cs-node'}>
            <span className="cs-node__label">{s.label}</span>
            {s.sub && <span className="cs-node__sub">{s.sub}</span>}
          </div>
          {i < diagram.stages.length - 1 && (
            <span className="cs-node__arrow" aria-hidden="true">
              →
            </span>
          )}
        </Fragment>
      ))}
    </div>
    {diagram.notes && diagram.notes.length > 0 && (
      <ul className="cs-diagram__notes">
        {diagram.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    )}
  </div>
);

const ExperienceCaseStudy = ({ open, onClose, title, companyName, date, data }: Props) => {
  const lighthouse = (data.lighthouse ?? []).filter((m) => m.after != null);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      scroll="body"
      aria-labelledby="cs-title"
      PaperProps={{ className: 'cs-paper' }}
    >
      <IconButton className="cs-close" aria-label="close case study" onClick={onClose}>
        <Close />
      </IconButton>

      {/* Header */}
      <header className="cs-header">
        <p className="cs-eyebrow">
          {companyName} · {date}
        </p>
        <h2 id="cs-title" className="cs-title">
          {title}
        </h2>
        {data.tagline && <p className="cs-tagline">{data.tagline}</p>}
        {(data.liveUrl || data.legacyUrl) && (
          <div className="cs-links">
            {data.liveUrl && (
              <a className="cs-btn cs-btn--primary" href={data.liveUrl} target="_blank" rel="noopener noreferrer">
                Open live site <OpenInNew fontSize="small" />
              </a>
            )}
            {data.legacyUrl && (
              <a className="cs-btn" href={data.legacyUrl} target="_blank" rel="noopener noreferrer">
                Legacy site <OpenInNew fontSize="small" />
              </a>
            )}
          </div>
        )}
      </header>

      {/* Hero — a workflow diagram (Odoo) or a screenshot in a browser mockup (website) */}
      {data.diagram ? (
        <CaseDiagram diagram={data.diagram} />
      ) : (
        (data.cover || data.liveUrl) && (
          <div className="cs-browser">
            <div className="cs-browser__bar">
              <span className="cs-dot" />
              <span className="cs-dot" />
              <span className="cs-dot" />
              <span className="cs-browser__url">{data.liveUrl?.replace(/^https?:\/\//, '')}</span>
            </div>
            <Shot src={data.cover} alt="Live site — home" />
          </div>
        )
      )}

      {/* Highlights */}
      {data.highlights && data.highlights.length > 0 && (
        <div className="cs-stats">
          {data.highlights.map((h) => (
            <div className="cs-stat" key={h.label}>
              <div className="cs-stat__value">{h.value}</div>
              <div className="cs-stat__label">{h.label}</div>
              {h.note && <div className="cs-stat__note">{h.note}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Enquiry / AI highlight */}
      {data.enquiryStat && (
        <section className="cs-block cs-enquiry">
          <div className="cs-enquiry__value">{data.enquiryStat.value}</div>
          <div className="cs-enquiry__text">
            <p className="cs-enquiry__label">{data.enquiryStat.label}</p>
            {data.enquiryStat.asOf && <p className="cs-enquiry__asof">{data.enquiryStat.asOf}</p>}
          </div>
        </section>
      )}

      {/* Lighthouse before → after */}
      {lighthouse.length > 0 && (
        <section className="cs-block">
          <h3 className="cs-h3">Lighthouse — before → after</h3>
          {data.lighthouseNote && <p className="cs-caption">{data.lighthouseNote}</p>}
          <div className="cs-lh">
            {lighthouse.map((m) => (
              <div className="cs-lh__row" key={m.metric}>
                <span className="cs-lh__metric">{m.metric}</span>
                {m.before != null && (
                  <>
                    <span className={`cs-lh__score cs-lh__score--${scoreClass(m.before)}`}>{m.before}</span>
                    <span className="cs-lh__arrow">→</span>
                  </>
                )}
                <span className={`cs-lh__score cs-lh__score--${scoreClass(m.after as number)}`}>{m.after}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Page-by-page before/after */}
      {data.pages && data.pages.length > 0 && (
        <section className="cs-block">
          <h3 className="cs-h3">Page-by-page redesign</h3>
          {data.pages.map((p) => (
            <div className="cs-page" key={p.name}>
              <h4 className="cs-page__name">{p.name}</h4>
              <div className="cs-page__grid">
                <figure>
                  <Shot src={p.before} alt={`${p.name} — before`} />
                  <figcaption>Before</figcaption>
                </figure>
                <figure>
                  <Shot src={p.after} alt={`${p.name} — after`} />
                  <figcaption>After</figcaption>
                </figure>
              </div>
              {p.note && <p className="cs-page__note">{p.note}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Narrative sections */}
      {data.sections && data.sections.length > 0 && (
        <section className="cs-block cs-narrative">
          {data.sections.map((s) => (
            <div className="cs-narrative__item" key={s.heading}>
              <h3 className="cs-h3">{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </section>
      )}
    </Dialog>
  );
};

export default ExperienceCaseStudy;
