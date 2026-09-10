import { useState } from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/profile";
import "../../css/About.css";

function About() {
  const parts = profile.about;
  const [active, setActive] = useState(0);
  const part = parts[active];

  const go = (next) => {
    setActive((current) => (current + next + parts.length) % parts.length);
  };

  return (
    <Section
      id="about"
      number="01"
      eyebrow="About"
      title="어떤 사람이고, 어떻게 일하는가"
      lead="여러 요소를 관찰하고 조율해 하나의 콘텐츠로 완성하는 과정을 좋아합니다."
      alt
      className="about"
    >
      {/* ── 자기소개: 3파트 페이지네이션 ───────────────────────── */}
      <Reveal className="about__story">
        <div className="about__tabs" role="tablist" aria-label="자기소개">
          {parts.map((item, index) => (
            <button
              key={item.no}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={`about__tab${active === index ? " about__tab--active" : ""}`}
              onClick={() => setActive(index)}
            >
              <span className="about__tab-no">{item.no}</span>
              <span className="about__tab-label">{item.category}</span>
            </button>
          ))}
        </div>

        <article className="about__panel" role="tabpanel">
          <p className="about__panel-category">
            <span className="about__panel-no">{part.no}</span>
            {part.category}
          </p>
          <h3 className="about__panel-title">{part.title}</h3>
          <div className="about__panel-body">
            {part.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="about__nav">
            <button
              type="button"
              className="about__nav-btn"
              onClick={() => go(-1)}
              aria-label="이전 파트"
            >
              ←
            </button>
            <span className="about__nav-count">
              {active + 1} / {parts.length}
            </span>
            <button
              type="button"
              className="about__nav-btn"
              onClick={() => go(1)}
              aria-label="다음 파트"
            >
              →
            </button>
          </div>
        </article>
      </Reveal>

      {/* ── 경력 · 학력 · 자격증 (카드 없이 편집형 리스트) ────────── */}
      <Reveal className="about__records">
        <div className="about__record">
          <h3 className="about__record-title">경력</h3>
          <ul className="about__timeline">
            {profile.career.map((item) => (
              <li key={item.period + item.org} className="about__entry">
                <span className="about__entry-period">{item.period}</span>
                <span className="about__entry-org">{item.org}</span>
                {item.role && (
                  <span className="about__entry-role">{item.role}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="about__record">
          <h3 className="about__record-title">학력</h3>
          <ul className="about__timeline">
            {profile.education.map((item) => (
              <li key={item.period} className="about__entry">
                <span className="about__entry-period">{item.period}</span>
                <span className="about__entry-org">{item.org}</span>
                <span className="about__entry-role">{item.detail}</span>
              </li>
            ))}
          </ul>

          <h3 className="about__record-title about__record-title--spaced">
            자격증
          </h3>
          <ul className="about__certs">
            {profile.certificates.map((cert) => (
              <li key={cert} className="about__cert">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

export default About;
