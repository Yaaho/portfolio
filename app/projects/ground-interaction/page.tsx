import Link from 'next/link';

export default function GroundInteractionCaseStudy() {
  return (
    <main>
      <header className="site-nav wrap">
        <Link className="site-name" href="/">Yim Geon Woo</Link>
        <nav><a href="https://github.com/Yaaho/Unreal-GroundInteraction" target="_blank" rel="noreferrer">Source ↗</a></nav>
      </header>

      <section className="case-header">
        <div className="case-hero wrap">
          <div className="case-hero-copy">
            <Link className="back-link" href="/">← PORTFOLIO</Link>
            <div className="kicker">기술 포트폴리오</div>
            <h1>Dual Depth Fade<br />Ground Interaction/<br />Water Interaction<br />시스템 개발</h1>
            <p className="case-deck">
              언리얼 엔진으로<br />
              폴리지 인터렉션, 워터 인터렉션 시스템을<br />
              성능을 고려하여 완결성 있게 구현한 과정을<br />
              설명합니다.
            </p>
            <div className="case-title-rule" aria-hidden="true" />
            <p className="case-credit">임건우 · / Cinder City 프로그래머 재직중 2025-5-12 ~ 현재</p>
          </div>

          <figure className="case-hero-image">
            <img src="/portfolio/images/ground-interaction/hero.png" alt="폴리지와 수면 상호작용 실행 화면" />
          </figure>
        </div>
      </section>
    </main>
  );
}
