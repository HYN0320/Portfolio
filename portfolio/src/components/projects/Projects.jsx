import { useState } from "react";
import "./Projects.css";
import ProjectModal from "./ProjectModal";

import curateImg from "../../assets/projects/curate1.png";
import finmoImg from "../../assets/projects/Finmo2.png";

const TEAM_IMAGES = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
];

const PROJECTS = [
  {
    id: "curate",
    category: "personal",
    title: "AI 콘텐츠 큐레이션 플랫폼",
    description:
      "정보 과잉 환경에서 사용자가 원하는 핵심 정보만 빠르게 파악할 수 있도록 설계한 AI 기반 콘텐츠 큐레이션 서비스입니다.",
    image: curateImg,
    github: "https://github.com/HYN0320/Curate",
    pdf: "/pdf/curate.pdf",
   role: "기획 · 백엔드 · 프론트엔드",
 tech: "React · Spring Boot · FastAPI · OpenAI · MySQL",
    story: {
      problem:
        "콘텐츠가 여러 플랫폼에 분산되어 있어 사용자가 핵심 정보만 빠르게 파악하기 어려웠습니다.",
      design:
        "요약 → 분류 → 재탐색 흐름을 핵심 UX로 정의하고 카드 기반 탐색 구조로 설계했습니다.",
      architecture: [
        "React 클라이언트에서 콘텐츠 요청",
        "Spring Boot에서 인증 및 요청 처리",
        "FastAPI에서 AI 요약 및 키워드 추출",
        "DB 저장 후 결과 반환",
      ],
      decision:
        "실시간 처리 대신 요청 단위 요약 방식을 선택해 안정성과 비용을 고려했습니다.",
      reflection:
        "정보 흐름을 먼저 설계하는 것이 서비스 완성도에 가장 큰 영향을 준다는 것을 배웠습니다.",
    },
  },
  {
    id: "finmo",
    category: "personal",
    title: "개인 자산 관리 대시보드",
    description:
      "AI가 소비·자산 패턴을 분석해 인사이트를 제공하는 개인 자산 관리 서비스입니다.",
    image: finmoImg,
    github: "https://github.com/HYN0320/Finmo",
    pdf: "/pdf/finmo.pdf",
     role: "기획 · 백엔드 · 프론트엔드 · 데이터 시각화",
 tech: "React · Recharts · Spring Boot · JWT",
    story: {
      problem:
        "자산과 지출 데이터는 많지만 사용자가 직접 해석해야 한다는 점이 가장 큰 문제였습니다.",
      design:
        "AI가 데이터를 해석해 의미 있는 인사이트를 전달하는 구조로 설계했습니다.",
      architecture: [
        "자산·지출 데이터 집계",
        "AI 로직으로 패턴 분석",
        "인사이트 문장화 후 카드 제공",
      ],
      aiInsight:
        "월별 소비 흐름을 분석해 과소비·비정상 지출 구간을 자동으로 감지했습니다.",
      decision:
        "자동 연동 대신 수동 입력을 선택해 데이터 신뢰성을 우선했습니다.",
      reflection:
        "데이터를 보여주는 것보다 이해시키는 것이 더 중요하다는 것을 체감했습니다.",
    },
  },
  {
    id: "team-a",
    category: "team",
    title: "RunX3",
    description:
      "러너를 위한 정보·소통·동기부여를 통합한 지역 기반 러닝 커뮤니티 서비스입니다.",
    image: TEAM_IMAGES[0],
    github: "#",
    pdf: "/pdf/runx3.pdf",
     role: "백엔드 · 프론트엔드",
 tech: "Spring Boot · JPA · Thymeleaf · Bootstrap5 · Chart.js",
    story: {
      problem:
        "러닝 정보가 흩어져 있고 지역 기반 커뮤니티가 부족했습니다.",
      design:
        "정보·소통·동기부여를 하나의 플랫폼에서 해결하도록 설계했습니다.",
      architecture: [
        "Spring Boot + JPA 도메인 설계",
        "Thymeleaf 서버 렌더링",
        "Chart.js 데이터 시각화",
      ],
      decision:
        "SPA 대신 SSR을 선택해 팀 역량과 기간에 맞췄습니다.",
      reflection:
        "기술보다 협업 구조가 성과에 더 큰 영향을 준다는 것을 배웠습니다.",
    },
  },
  {
  id: "bootcamp-personal-1",
  category: "personal",
  title: "부트캠프 개인 프로젝트 (예정)",
  description:
    "부트캠프 과정 중 진행 예정인 개인 프로젝트입니다.",
  image: TEAM_IMAGES[0], // 임시 이미지
  github: "#",
  pdf: "#",
  role: "기획 · 백엔드 · 프론트엔드",
  tech: "React · Spring Boot · (예정)",
  story: {
    problem: "프로젝트 시작 전 문제 정의 단계입니다.",
    design: "기획 및 UX 설계 예정입니다.",
    architecture: [
      "클라이언트 구조 설계 예정",
      "서버 아키텍처 정의 예정",
    ],
    decision: "기술 스택 검토 중입니다.",
    reflection: "프로젝트 완료 후 작성 예정입니다.",
  },
},
{
  id: "bootcamp-personal-2",
  category: "personal",
  title: "부트캠프 개인 프로젝트 2 (예정)",
  description:
    "두 번째 개인 프로젝트로 심화 기능 구현을 목표로 합니다.",
  image: TEAM_IMAGES[0],
  github: "#",
  pdf: "#",
  role: "기획 · 백엔드 · 프론트엔드",
  tech: "React · API · 인증 (예정)",
  story: {
    problem: "실제 서비스 수준의 기능 구현 필요",
    design: "확장성과 유지보수를 고려한 구조 설계",
    architecture: [
      "API 중심 설계",
      "상태 관리 구조 설계",
    ],
    decision: "단순 구현보다 구조적 완성도 우선",
    reflection: "추후 작성 예정",
  },
},
{
  id: "bootcamp-team-1",
  category: "team",
  title: "부트캠프 팀 프로젝트 (예정)",
  description:
    "부트캠프 팀원들과 함께 진행 예정인 협업 프로젝트입니다.",
  image: TEAM_IMAGES[0],
  github: "#",
  pdf: "#",
  role: "백엔드 · 프론트엔드",
  tech: "Spring Boot · 협업 도구 · (예정)",
  story: {
    problem: "팀 단위 협업 경험 부족",
    design: "역할 분담과 협업 프로세스 중심 설계",
    architecture: [
      "역할별 책임 분리",
      "공통 API 규약 정의",
    ],
    decision: "팀 생산성을 우선한 기술 선택",
    reflection: "팀 프로젝트 종료 후 회고 예정",
  },
},
{
  id: "bootcamp-team-2",
  category: "team",
  title: "학원 팀 프로젝트 (예정)",
  description:
    "부트캠프 팀원들과 함께 진행 예정인 협업 프로젝트입니다.",
  image: TEAM_IMAGES[0],
  github: "#",
  pdf: "#",
  role: "백엔드 · 프론트엔드",
  tech: "Spring Boot · 협업 도구 · (예정)",
  story: {
    problem: "팀 단위 협업 경험 부족",
    design: "역할 분담과 협업 프로세스 중심 설계",
    architecture: [
      "역할별 책임 분리",
      "공통 API 규약 정의",
    ],
    decision: "팀 생산성을 우선한 기술 선택",
    reflection: "팀 프로젝트 종료 후 회고 예정",
  },
}



];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [openStoryId, setOpenStoryId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="projects-inner">

        {/* HEADER */}
        <div className="projects-header">
          <h2>프로젝트</h2>
          <p>
            개발 여정을 통해 완성한<br />
            실제 서비스 결과물입니다
          </p>
        </div>

        {/* FILTER */}
        <div className="project-filter">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            전체
          </button>
          <button
            className={filter === "personal" ? "active" : ""}
            onClick={() => setFilter("personal")}
          >
            개인 프로젝트
          </button>
          <button
            className={filter === "team" ? "active" : ""}
            onClick={() => setFilter("team")}
          >
            팀 프로젝트
          </button>
        </div>

        {/* LIST */}
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-case ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              {/* 상단 고정 영역 */}
              <div className="project-main">
                <div className="project-text">
                  <span className="project-index">
                    {project.category.toUpperCase()} PROJECT ·{" "}
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-actions">
                    <a href={project.pdf} target="_blank" rel="noreferrer">
                      기획안 PDF
                    </a>
                    <span className="action-divider">·</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary"
                    >
                      GitHub
                    </a>
                    <span className="action-divider">·</span>
                    <button
                      className="project-story-toggle"
                      onClick={() =>
                        setOpenStoryId(
                          openStoryId === project.id ? null : project.id
                        )
                      }
                    >
                      {openStoryId === project.id
                        ? "설계 설명 닫기"
                        : "설계 설명 보기"}
                    </button>
                  </div>
                </div>

                <div
                  className="project-image-placeholder"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} />
                </div>
              </div>

              {/* 하단 설계 설명 */}
              {openStoryId === project.id && (
                <div className="project-story">
                  <h4>문제 정의</h4>
                  <p>{project.story.problem}</p>

                  <h4>설계 의도</h4>
                  <p>{project.story.design}</p>

                  <h4>아키텍처 흐름</h4>
                  <ul>
                    {project.story.architecture.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>

                  {project.story.aiInsight && (
                    <>
                      <h4>AI 인사이트 분석</h4>
                      <p>{project.story.aiInsight}</p>
                    </>
                  )}

                  <h4>의사결정</h4>
                  <p>{project.story.decision}</p>

                  <h4>회고</h4>
                  <p>{project.story.reflection}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}