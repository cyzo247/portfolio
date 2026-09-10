import ProjectMedia from "./ProjectMedia";
import ProjectBlocks from "./ProjectBlocks";
import Reveal from "./Reveal";

/**
 * One project entry. `arrangement` decides whether the cover image comes
 * before or after the text block; the content blocks always follow.
 * Type, spacing and heading structure stay consistent across projects.
 */
function ProjectCard({ project }) {
  const {
    no,
    title,
    titleEn,
    subtitle,
    type = [],
    period,
    role,
    tools = [],
    tagline,
    description = [],
    purpose,
    cover,
    blocks = [],
    process = [],
    link,
    arrangement = "cover-first",
  } = project;

  const paragraphs = Array.isArray(description) ? description : [description];

  const coverEl = cover && (
    <ProjectMedia
      src={cover.src}
      alt={cover.alt ?? `${title} 대표 이미지`}
      ratio={cover.ratio ?? "16 / 10"}
      display={cover.display}
      priority
      overlay={
        <>
          <span className="project-media__title">{title}</span>
          <span className="project-media__action">{type.join(" · ")}</span>
        </>
      }
    />
  );

  const info = (
    <div className="project-card__info">
      <p className="project-card__meta">
        <span className="project-card__no">{no}</span>
        <span className="project-card__sep">/</span>
        {type.join(" · ")}
      </p>

      <h3 className="project-card__title">{title}</h3>
      {subtitle && <p className="project-card__subtitle">{subtitle}</p>}
      {titleEn && <p className="project-card__titleen">{titleEn}</p>}

      {tagline && <p className="project-card__tagline">{tagline}</p>}

      <div className="project-card__description">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      {purpose && (
        <div className="project-card__purpose">
          <span className="project-card__purpose-label">제작 목적</span>
          <p>{purpose}</p>
        </div>
      )}

      <dl className="project-card__facts">
        {period && (
          <div className="project-card__fact">
            <dt>기간</dt>
            <dd>{period}</dd>
          </div>
        )}
        {role && (
          <div className="project-card__fact">
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
        )}
        {tools.length > 0 && (
          <div className="project-card__fact">
            <dt>Tools</dt>
            <dd>{tools.join(" / ")}</dd>
          </div>
        )}
      </dl>

      {link && link.url && link.url !== "#" && (
        <a
          className="project-card__link"
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );

  return (
    <Reveal as="article" className={`project-card project-card--${arrangement}`}>
      {arrangement === "info-first" ? (
        <>
          {info}
          {coverEl}
        </>
      ) : (
        <>
          {coverEl}
          {info}
        </>
      )}
      <ProjectBlocks blocks={blocks} process={process} />
    </Reveal>
  );
}

export default ProjectCard;
