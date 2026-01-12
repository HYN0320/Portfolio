import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToSkills = () => {
    const target = document.getElementById("skills");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* HEADER */}
      <header className="hero-header">
        <div className="header-inner">
          <div className="logo">Hyunse</div>
          <nav className="nav">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            {/* 이력서도 헤더에 노출 (선택사항이지만 추천) */}
            <Link to="/resume" className="nav-resume">
              Resume
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <div className="hero-content">
        <p className="hero-eyebrow">FULL-STACK DEVELOPER · SEO HYUN SE</p>

        <h1 className="hero-title">
          시작부터<br />
          끝까지 만드는<br />
          <span>웹 서비스</span>
        </h1>

        <p className="hero-subtitle">
          기획부터 API 설계, 화면 구현까지<br />
          실제 서비스 흐름을 책임지고 개발합니다
        </p>

        <p className="hero-stack">
          React · Spring Boot · FastAPI · MySQL
        </p>

        {/* CTA */}
        <div className="hero-cta">
          <a href="#projects" className="hero-button">
            프로젝트 보기
          </a>

          <Link to="/resume" className="hero-resume">
            이력서 보기 →
          </Link>
        </div>
      </div>

      {/* SCROLL */}
      <button className="hero-scroll" onClick={scrollToSkills}>
        <span>SCROLL</span>
        <div className="scroll-line" />
      </button>
    </section>
  );
}
