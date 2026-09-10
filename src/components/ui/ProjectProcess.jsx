import "../../css/ProjectProcess.css";

/**
 * Vertical process timeline. Used only by PROJECT 03 to show how the site
 * was actually built (weAI → VS Code → 수정 → Claude → 완성).
 */
function ProjectProcess({ steps = [], label = "Process" }) {
  if (steps.length === 0) return null;

  return (
    <div className="project-process">
      <p className="project-block__label">{label}</p>
      <ol className="project-process__list">
        {steps.map((step) => (
          <li className="project-process__step" key={step.no}>
            <span className="project-process__no">{step.no}</span>
            <div className="project-process__body">
              <span className="project-process__en">{step.en}</span>
              <span className="project-process__ko">{step.ko}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProjectProcess;
