import { useReveal } from "../../hooks/useReveal";

/**
 * Wraps children in an element that fades + slides in when scrolled into view.
 * `as` picks the element tag (default div). Extra props pass through.
 */
function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
