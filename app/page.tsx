import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className="site-nav wrap">
        <Link className="site-name" href="/">Yim Geon Woo</Link>
        <nav aria-label="주요 링크">
          <a href="https://github.com/Yaaho" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section className="portfolio-intro wrap">
        <p className="portfolio-employment"><strong>임건우 · / Cinder City 프로그래머 재직중 2025-5-12 ~ 현재</strong></p>
        <p>저의 포트폴리오를 소개하는 페이지입니다.</p>
      </section>

      <section className="portfolio-list wrap" id="portfolio">
        <h2>Portfolio</h2>

        <article className="portfolio-item">
          <div className="portfolio-item-heading">
            <span>01</span>
            <div>
              <p>언리얼 엔진 플러그인</p>
              <h3>Ground Interaction</h3>
            </div>
          </div>

          <div className="portfolio-item-body">
            <img className="portfolio-cover" src="/portfolio/images/ground-interaction/hero.png" alt="Ground Interaction 대표 화면" />

            <p className="portfolio-description">
              캐릭터와 지면의 접촉 정보를 이용해 폴리지 변형과 실시간 수면 반응을 구현한 Unreal Engine 플러그인입니다.
            </p>

            <section className="portfolio-results" aria-labelledby="results-title">
              <h4 id="results-title">작업 결과</h4>
              <div className="result-grid">
                <figure>
                  <img src="/portfolio/images/ground-interaction/ground-result.gif" alt="Ground Interaction 실행 결과" />
                  <figcaption>
                    <h5>Ground Interaction</h5>
                    <p>God of War 방식의 Dual Depth 폴리지 인터렉션을 구현했습니다. Niagara Simulation 대신 Depth Capture를 사용했습니다.</p>
                  </figcaption>
                </figure>
                <figure>
                  <img src="/portfolio/images/ground-interaction/water-result.gif" alt="Water Interaction 실행 결과" />
                  <figcaption>
                    <h5>Water Interaction</h5>
                    <p>0.1~0.3초 간격의 수면 접촉면 크기 입력으로 파장 생성</p>
                  </figcaption>
                </figure>
              </div>
            </section>

            <section className="portfolio-performance" aria-labelledby="performance-title">
              <h4 id="performance-title">성능</h4>
              <div className="performance-list">
                <div className="performance-item">
                  <img src="/portfolio/images/ground-interaction/ground-performance.png" alt="Ground Interaction GPU 성능 측정 화면" />
                  <div>
                    <h5>Ground Interaction</h5>
                    <p>캐릭터 11명, 캐릭터당 프록시 메시 12개 기준</p>
                    <p>Depth Capture <strong>0.11ms</strong></p>
                    <p>Scrolling · Fade <strong>0.01ms</strong></p>
                  </div>
                </div>
                <div className="performance-item">
                  <img src="/portfolio/images/ground-interaction/water-performance.png" alt="Water Interaction GPU 성능 측정 화면" />
                  <div>
                    <h5>Water Interaction</h5>
                    <p>Water Simulation 관련 패스 GPU 비용 총합</p>
                    <p>Splat <strong>0.04ms</strong></p>
                    <p>Scrolling <strong>0.04ms</strong></p>
                    <p>Height Simulation <strong>0.03ms</strong></p>
                    <p>GPU Total Cost <strong>0.12ms</strong> (평균 0.09ms)</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="portfolio-links">
              <Link href="/projects/ground-interaction/">구현 상세 보기 →</Link>
              <a href="https://github.com/Yaaho/Unreal-GroundInteraction" target="_blank" rel="noreferrer">소스 저장소 ↗</a>
            </div>
          </div>
        </article>
      </section>

      <footer className="site-footer wrap">
        <span>Yim Geon Woo</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
