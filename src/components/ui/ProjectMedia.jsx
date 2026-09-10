/**
 * A single project image frame with a subtle hover interaction.
 * - ratio "native" keeps the image's own proportions; any other value
 *   ("1 / 1", "16 / 9", …) crops to that aspect ratio.
 * - `display` "contained" limits the frame's max-width; "panel" wraps the
 *   image in a surface frame (used to present the web project as one piece).
 * - `overlay` renders a bottom gradient caption on hover (covers only).
 * - `caption` renders a small label chip on the frame (grids).
 */
function ProjectMedia({
  src,
  alt = "",
  ratio = "16 / 10",
  display,
  overlay = null,
  caption = null,
  priority = false,
}) {
  const isNative = ratio === "native";
  const className = [
    "project-media__frame",
    isNative && "project-media__frame--native",
    display && `project-media__frame--${display}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={isNative ? undefined : { aspectRatio: ratio }}
      />
      {overlay && <figcaption className="project-media__overlay">{overlay}</figcaption>}
      {caption && <figcaption className="project-media__caption">{caption}</figcaption>}
    </figure>
  );
}

export default ProjectMedia;
