import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import { projects, moreWork } from "../../data/projects";
import "../../css/Projects.css";

function Projects() {
  return (
    <Section
      id="projects"
      number="03"
      eyebrow="Projects"
      title="작업물"
      lead="콘텐츠 디자인, SNS 콘텐츠, 웹, 썸네일 디자인 작업입니다. 기획 의도와 제작 과정이 함께 드러나도록 구성했습니다."
      alt
      className="projects"
    >
      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {moreWork.length > 0 && (
        <div className="projects__more">
          <p className="projects__more-label">더 많은 작업물</p>
          <div className="projects__more-links">
            {moreWork.map((link) => (
              <a
                key={link.label}
                className="projects__more-link"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

export default Projects;
