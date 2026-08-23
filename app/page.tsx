import Link from 'next/link';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.73.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.3-5.28-1.29-5.28-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-nav wrap">
        <Link className="wordmark" href="/">YGW<span>.</span></Link>
        <nav aria-label="주요 링크">
          <a href="#work">Work</a>
          <a href="https://github.com/Yaaho" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <section className="hero wrap">
        <div className="eyebrow"><span className="status-dot" /> Unreal Engine · Rendering · Tools</div>
        <h1>화면에 보이는 결과와<br /><em>그 이면의 구조</em>를 만듭니다.</h1>
        <p className="hero-copy">
          Unreal Engine의 렌더링 파이프라인을 분석하고, 그래픽 기능을 실제 프로젝트에서
          사용할 수 있는 플러그인으로 구현합니다.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">프로젝트 보기 <span>↓</span></a>
          <a className="button ghost" href="https://github.com/Yaaho" target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring ring-a" /><div className="orbit-ring ring-b" /><div className="orbit-core" />
          <span className="orbit-label label-a">DEPTH</span><span className="orbit-label label-b">RDG</span><span className="orbit-label label-c">COMPUTE</span>
        </div>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-heading">
          <div><span className="section-index">01</span><h2>Selected Work</h2></div>
          <p>설계 의도와 구현 과정, 성능 최적화까지<br />직접 설명할 수 있는 작업입니다.</p>
        </div>

        <article className="project-card">
          <div className="project-visual" aria-hidden="true">
            <div className="depth-field back" /><div className="depth-field front" />
            <div className="water-ripple ripple-1" /><div className="water-ripple ripple-2" />
            <span className="visual-tag tag-depth">DUAL DEPTH</span><span className="visual-tag tag-water">WATER SIM</span><span className="visual-id">GI_01</span>
          </div>
          <div className="project-info">
            <div className="project-meta"><span>Unreal Engine Plugin</span><span>2025–2026</span></div>
            <h3>Ground Interaction</h3>
            <p>Dual-depth 기반 foliage 상호작용과 Compute Shader 기반 수면 시뮬레이션을 하나의 Unreal Engine 플러그인으로 구현했습니다.</p>
            <ul className="chip-list" aria-label="주요 기술"><li>C++</li><li>Render Graph</li><li>Compute Shader</li><li>HLSL</li></ul>
            <div className="project-links">
              <Link className="text-link" href="/projects/ground-interaction/">Case Study <span>↗</span></Link>
              <a className="repo-link" href="https://github.com/Yaaho/Unreal-GroundInteraction" target="_blank" rel="noreferrer"><GitHubIcon /> Source</a>
            </div>
          </div>
        </article>
      </section>

      <footer className="site-footer wrap">
        <span>YIM GEON WOO</span><span>Unreal Engine Rendering / Tools Programmer</span><span>© 2026</span>
      </footer>
    </main>
  );
}
