import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { skillGroups } from "../../data/skills";
import "../../css/Skills.css";

function Skills() {
  return (
    <Section
      id="skills"
      number="02"
      eyebrow="Skills"
      title="콘텐츠를 만드는 데 쓰는 도구들"
      lead="실제로 사용하는 것만 적었습니다. 프로그램 이름보다 어떤 작업에 쓰는지를 중심으로 정리했습니다."
      className="skills"
    >
      <div className="skills__groups">
        {skillGroups.map((group) => (
          <Reveal key={group.category} className="skills__group">
            <h3 className="skills__group-title">{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item.name} className="skills__item">
                  <span className="skills__name">{item.name}</span>
                  {item.note && (
                    <span className="skills__note">{item.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
