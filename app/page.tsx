import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className="site-nav wrap">
        <Link className="site-name" href="/">Yim Geon Woo</Link>
        <nav aria-label="주요 링크">
          <a href="#portfolio">Portfolio</a>
          <a href="https://github.com/Yaaho" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section className="portfolio-intro wrap">
        <h1>Unreal Engine Programmer</h1>
        <p>
          Unreal Engine 렌더링 파이프라인을 분석하고 그래픽 기능과 도구를 구현합니다.
          이 페이지에는 공개 가능한 작업의 목적, 구현 내용, 소스 저장소를 정리합니다.
        </p>
      </section>

      <section className="portfolio-list wrap" id="portfolio">
        <h2>Portfolio</h2>

        <article className="portfolio-item">
          <div className="portfolio-item-heading">
            <span>01</span>
            <div>
              <p>Unreal Engine Plugin</p>
              <h3>Ground Interaction</h3>
            </div>
          </div>

          <div className="portfolio-item-body">
            <p className="portfolio-description">
              캐릭터와 지면 환경 사이의 접촉 정보를 GPU 파이프라인으로 전달해
              foliage 변형과 실시간 수면 반응을 구현한 플러그인입니다.
            </p>

            <div className="portfolio-points">
              <div>
                <h4>Foliage Interaction</h4>
                <p>Dual-depth capture와 Render Graph pass를 이용해 접촉 범위를 만들고 material deformation에 전달합니다.</p>
              </div>
              <div>
                <h4>Water Interaction</h4>
                <p>Compute Shader height field와 triple-buffer rotation으로 접촉 지점에서 퍼지는 수면 반응을 계산합니다.</p>
              </div>
              <div>
                <h4>Optimization</h4>
                <p>Fixed timestep, substep 제한, 상태 변화 감지와 early stop으로 GPU 작업 비용을 통제합니다.</p>
              </div>
            </div>

            <div className="portfolio-links">
              <Link href="/projects/ground-interaction/">상세 설명 →</Link>
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
