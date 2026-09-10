import { profile } from "../../data/profile";
import "../../css/Hero.css";

function Hero() {
  const goTo = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const images = profile.heroImages ?? [];

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow eyebrow">{profile.role}</p>
          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__description">{profile.intro}</p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="#projects"
              onClick={(e) => goTo(e, "projects")}
            >
              프로젝트 보기
            </a>
            <a
              className="btn btn--ghost"
              href="#contact"
              onClick={(e) => goTo(e, "contact")}
            >
              연락하기
            </a>
          </div>
        </div>

        {images.length > 0 && (
          <div className="hero__media" aria-hidden="true">
            {images.slice(0, 3).map((image, index) => (
              <figure
                key={image.src + index}
                className={`hero__frame hero__frame--${index + 1}`}
              >
                <img src={image.src} alt={image.alt ?? ""} loading="eager" />
                {image.caption && (
                  <figcaption className="hero__caption">{image.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>

      <a
        className="hero__scroll"
        href="#about"
        onClick={(e) => goTo(e, "about")}
      >
        <span>SCROLL</span>
      </a>
    </section>
  );
}

export default Hero;
