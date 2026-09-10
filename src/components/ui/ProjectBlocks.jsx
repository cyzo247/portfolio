import ProjectMedia from "./ProjectMedia";
import ProjectProcess from "./ProjectProcess";

/**
 * Renders the ordered content blocks under a project.
 *   grid    → even image grid (episode covers, thumbnail series, format samples)
 *   strip   → a short row of supporting cuts
 *   stack   → narrow centered column (vertical story cuts)
 *   process → PROJECT 03 build timeline
 */
function ProjectBlocks({ blocks = [], process = [] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="project-blocks">
      {blocks.map((block, index) => {
        if (block.type === "process") {
          return <ProjectProcess key={`process-${index}`} steps={process} />;
        }

        const images = block.images ?? [];
        if (images.length === 0) return null;

        const cols = block.columns ?? 3;
        const style = {
          "--cols": cols,
          "--cols-md": block.columnsMd ?? Math.min(cols, 3),
          "--cols-sm": block.columnsSm ?? Math.min(cols, 2),
        };

        return (
          <section
            className={`project-block project-block--${block.type}`}
            key={`${block.type}-${index}`}
            style={style}
          >
            {block.label && <p className="project-block__label">{block.label}</p>}
            <div className="project-block__items">
              {images.map((image, i) => (
                <ProjectMedia
                  key={image.src + i}
                  src={image.src}
                  alt={image.alt}
                  ratio={block.ratio ?? "1 / 1"}
                  caption={image.caption}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProjectBlocks;
