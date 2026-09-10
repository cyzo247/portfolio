import "../../css/Section.css";
import Reveal from "./Reveal";

/**
 * Shared section wrapper: renders the anchor target <section id>, an optional
 * large faint watermark number, the centered container, and an optional header
 * (number + eyebrow + title + lead).
 */
function Section({
  id,
  eyebrow,
  title,
  lead,
  number,
  alt = false,
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`section${alt ? " section--alt" : ""} ${className}`.trim()}
    >
      {number && (
        <span className="section__watermark" aria-hidden="true">
          {number}
        </span>
      )}

      <div className="section__inner">
        {(eyebrow || title || lead) && (
          <Reveal as="header" className="section__header">
            {(number || eyebrow) && (
              <p className="section__eyebrow">
                {number && <span className="section__number">{number}</span>}
                {number && eyebrow && (
                  <span className="section__slash">/</span>
                )}
                {eyebrow}
              </p>
            )}
            {title && <h2 className="section__title">{title}</h2>}
            {lead && <p className="section__lead">{lead}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
