import Section from "../ui/Section";
import { profile } from "../../data/profile";
import "../../css/Contact.css";

function Contact() {
  const links = (profile.contactLinks ?? []).filter(
    (link) => link.url && link.url !== "#"
  );
  const hasResume = profile.resumeUrl && profile.resumeUrl !== "#";

  return (
    <Section
      id="contact"
      number="04"
      eyebrow="Contact"
      title="연락하기"
      lead="새로운 기회와 협업 제안을 환영합니다. 편하게 연락 주세요."
      className="contact"
    >
      <div className="contact__body">
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact__links">
          {hasResume && (
            <a
              className="btn btn--ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              이력서 보기
            </a>
          )}
          {links.map((link) => (
            <a
              key={link.label}
              className="contact__link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
