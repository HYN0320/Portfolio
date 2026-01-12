import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner">

        {/* HEADER */}
        <div className="skills-header">
          <h2>개발 여정</h2>
          <p>
            기능 구현이 아니라<br />
            서비스가 완성되는 흐름을 기준으로 개발해왔습니다
          </p>
        </div>

        {/* ROAD */}
        <div className="road">

          {/* STEP 01 */}
          <div className="road-step left">
            <div className="road-segment" />
            <div className="skill-card">
              <span className="step">STEP 01</span>
              <h3>백엔드 설계 · API 구현</h3>
              <p>
                도메인 중심으로 서버 구조를 설계하고<br />
                인증·인가(JWT)와 핵심 비즈니스 로직을 API로 구현했습니다.<br />
                프론트엔드와의 안정적인 연동을 우선으로 고려했습니다.
              </p>
              <span className="stack">
                Spring Boot · FastAPI · Django · Java · Python
              </span>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="road-step right">
            <div className="road-segment" />
            <div className="skill-card">
              <span className="step">STEP 02</span>
              <h3>프론트엔드 개발</h3>
              <p>
                React 기반으로 화면을 구성하고<br />
                API 응답 흐름에 맞춰 상태를 설계했습니다.<br />
                사용자가 맥락을 잃지 않도록 UX를 지속적으로 개선했습니다.
              </p>
              <span className="stack">
                React · JavaScript · HTML · CSS
              </span>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="road-step left">
            <div className="road-segment" />
            <div className="skill-card">
              <span className="step">STEP 03</span>
              <h3>데이터베이스 설계</h3>
              <p>
                서비스 요구사항을 기준으로 테이블을 설계하고<br />
                데이터 정합성과 확장성을 고려해 관계를 구성했습니다.<br />
                필요한 경우 쿼리 성능 개선도 함께 진행했습니다.
              </p>
              <span className="stack">
                MySQL · Oracle · SQL
              </span>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="road-step right">
            <div className="road-segment" />
            <div className="skill-card">
              <span className="step">STEP 04</span>
              <h3>데이터 분석 · 머신러닝</h3>
              <p>
                데이터를 전처리하고 패턴을 분석해<br />
                사용자에게 의미 있는 인사이트를 제공하는 데 집중했습니다.<br />
                단순 예측보다 ‘이해 가능한 결과’를 목표로 했습니다.
              </p>
              <span className="stack">
                Python · Pandas · 데이터 분석 · 머신러닝
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
