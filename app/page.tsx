import Link from 'next/link';

const legacyImage = (page: number) => `/portfolio/images/legacy-portfolio/page-${String(page).padStart(2, '0')}.webp`;

function LegacyPages({ pages, title }: { pages: number[]; title: string }) {
  return (
    <div className="legacy-pages">
      {pages.map((page) => <img key={page} src={legacyImage(page)} alt={`${title} 포트폴리오 ${page}페이지`} />)}
    </div>
  );
}

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
                    <p>Niagara Simulation 대신 Depth Capture를 사용해 충돌체 개수가 132개인 상황에서도 캡쳐 비용 0.1ms의 좋은 성능을 유지합니다</p>
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
                    <p>GPU Total Cost <strong>0.11ms</strong> (평균 0.09ms)</p>
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

        <article className="portfolio-item legacy-item">
          <div className="portfolio-item-heading">
            <span>02</span>
            <div>
              <p>DirectX 11</p>
              <h3>DX11 디퍼드 PBR 렌더러</h3>
            </div>
          </div>
          <div className="portfolio-item-body">
            <p className="portfolio-description">DirectX 11 기반 디퍼드 PBR 렌더러입니다. DOOM Eternal(2020)에 사용된 섀도 맵 아틀라스와 Compute Shader·Ray Marching 기반 볼류매트릭 라이트를 구현했습니다.</p>
            <LegacyPages pages={[4]} title="DX11 디퍼드 PBR 렌더러" />
            <div className="portfolio-links"><a href="https://github.com/Yaaho/DX11Study" target="_blank" rel="noreferrer">DX11Study 저장소 ↗</a></div>
          </div>
        </article>

        <article className="portfolio-item legacy-item">
          <div className="portfolio-item-heading">
            <span>03</span>
            <div>
              <p>DirectX 11</p>
              <h3>섀도 맵 아틀라스</h3>
            </div>
          </div>
          <div className="portfolio-item-body">
            <p className="portfolio-description">하나의 대형 Texture를 Viewport 설정으로 나누어 Shadow Map을 그립니다. 광원이 많아져도 일정한 성능을 유지할 수 있고, 빛의 거리와 우선순위에 따라 각 Shadow Map의 해상도를 조절할 수 있습니다.</p>
            <LegacyPages pages={[5, 6, 7, 8]} title="섀도 맵 아틀라스" />
            <div className="portfolio-links"><a href="https://github.com/Yaaho/DX11Study" target="_blank" rel="noreferrer">DX11Study 저장소 ↗</a></div>
          </div>
        </article>

        <article className="portfolio-item legacy-item">
          <div className="portfolio-item-heading">
            <span>04</span>
            <div>
              <p>DirectX 11</p>
              <h3>볼류매트릭 라이트</h3>
            </div>
          </div>
          <div className="portfolio-item-body">
            <p className="portfolio-description">View Frustum을 3D Voxel로 나누어 빛의 색상과 Density를 기록하고, 별도의 3D Texture에 Ray Marching 결과를 누적하여 공기 중 빛의 산란을 표현했습니다.</p>
            <LegacyPages pages={[9, 10, 11, 12, 13, 14, 15, 16, 17]} title="볼류매트릭 라이트" />
            <div className="portfolio-links"><a href="https://github.com/Yaaho/DX11Study" target="_blank" rel="noreferrer">DX11Study 저장소 ↗</a></div>
          </div>
        </article>

        <article className="portfolio-item legacy-item">
          <div className="portfolio-item-heading">
            <span>05</span>
            <div>
              <p>Unreal Engine Source</p>
              <h3>언리얼 엔진 커스텀</h3>
            </div>
          </div>
          <div className="portfolio-item-body">
            <p className="portfolio-description">Unreal Engine의 GBuffer, Material Editor Pin과 Shading Model을 수정하여 원신 및 젠레스 존 제로 스타일의 Toon Shading을 구현했습니다. Lightmap, SDF 기반 Face Shadow, LUT 선택, Face Shadow 보정과 MetalCap 구현 내용을 포함합니다.</p>
            <LegacyPages pages={[18, 19, 20, 21, 22, 23, 24, 25, 26, 27]} title="언리얼 엔진 커스텀" />
            <p className="legacy-note">저장소 열람에는 Epic Games 계정과 연동된 GitHub 계정이 필요합니다.</p>
            <div className="portfolio-links"><a href="https://github.com/Yaaho/UE5Custom" target="_blank" rel="noreferrer">UE5Custom 저장소 ↗</a></div>
          </div>
        </article>

        <article className="portfolio-item legacy-item">
          <div className="portfolio-item-heading">
            <span>06</span>
            <div>
              <p>Houdini</p>
              <h3>Houdini를 이용한 Procedural Modeling</h3>
            </div>
          </div>
          <div className="portfolio-item-body">
            <p className="portfolio-description">Houdini의 노드 기반 작업으로 구조물, 도로, 울타리, 식생 배치와 건물 생성 과정을 구성한 Procedural Modeling 작업입니다.</p>
            <LegacyPages pages={[34, 35, 36, 37, 38, 39, 40]} title="Houdini를 이용한 Procedural Modeling" />
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
