import Link from 'next/link';

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, index) => start + index);
const legacyAsset = (number: number) => {
  const extension = number === 11 ? 'jpeg' : number === 20 ? 'gif' : 'png';
  return `/portfolio/images/legacy-portfolio/assets/image${number}.${extension}`;
};

function LegacyAssets({ images, title }: { images: number[]; title: string }) {
  return (
    <div className="legacy-assets">
      {images.map((number) => {
        const src = legacyAsset(number);
        return <a key={number} href={src} target="_blank" rel="noreferrer"><img src={src} alt={`${title} 작업 이미지 ${number}`} loading="lazy" /></a>;
      })}
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
            <p className="portfolio-description">DirectX 11 기반 디퍼드 PBR 렌더러입니다. Shadow Map Atlas와 Compute Shader·Ray Marching 기반 볼류매트릭 라이트를 구현했습니다.</p>
            <a className="repository-link" href="https://github.com/Yaaho/DX11Study" target="_blank" rel="noreferrer">DX11Study 저장소 ↗</a>

            <div className="legacy-copy">
              <h4>섀도 맵 아틀라스</h4>
              <p>하나의 큰 Texture를 Viewport 설정으로 나누어 Shadow Map Atlas를 그립니다.</p>
              <p>빛을 드리우는 광원이 많아져도 동일한 Shadow Map Atlas 해상도를 유지합니다.</p>
            </div>
            <LegacyAssets images={range(3, 10)} title="DX11 섀도 맵 아틀라스" />

            <div className="legacy-copy">
              <h4>볼류매트릭 라이트</h4>
              <p>빛이 공기 중을 진행하며 산란되는 현상을 표현했습니다. View Frustum을 X·Y·Z축의 Voxel 형태로 나누고 각 Voxel 위치의 빛 색상과 Density를 3D Texture에 기록합니다. 이 값을 다른 3D Texture에 Z 방향으로 레이마칭하고 누적하여 해당 위치에서 빛이 얼마나 산란되었는지 기록하고 사용합니다.</p>
              <p>Compute Shader에서 Voxel 좌표에 대응하는 World Position을 구합니다. 카메라에 가까운 위치에 Texture가 더 많이 배치되도록 World Z는 지수 분포를 따르게 했고 지수값은 2로 설정했습니다. 프레임마다 다른 Jitter를 적용하여 Voxel 정위치에서 조금 이동한 위치의 빛을 기록합니다.</p>
            </div>
            <LegacyAssets images={range(11, 28).filter((number) => ![11, 16, 20].includes(number))} title="DX11 볼류매트릭 라이트" />
          </div>
        </article>

        <article className="portfolio-item legacy-item">
          <div className="portfolio-item-heading">
            <span>03</span>
            <div>
              <p>Unreal Engine Source</p>
              <h3>언리얼 엔진 커스텀</h3>
            </div>
          </div>
          <div className="portfolio-item-body">
            <p className="portfolio-description">Unreal Engine의 GBuffer, Material Editor Pin과 Shading Model을 수정하여 원신 및 젠레스 존 제로 스타일의 Toon Shading을 구현했습니다. Lightmap, SDF 기반 Face Shadow, LUT 선택, Face Shadow 보정과 MatCap 구현 내용을 포함합니다.</p>
            <a className="repository-link" href="https://github.com/Yaaho/UE5Custom" target="_blank" rel="noreferrer">UE5Custom 저장소 ↗</a>
            <p className="legacy-note">저장소 열람에는 Epic Games 계정과 연동된 GitHub 계정이 필요합니다.</p>

            <div className="legacy-copy">
              <h4>원신 스타일 Toon Shading</h4>
              <p>Engine Source를 수정하여 GBuffer 내용을 추가·변경하고 Material Editor Pin과 Shading Model을 추가했습니다. Lightmap Texture를 이용한 재질 표현과 SDF Texture를 이용한 Face Shadow를 구현했습니다.</p>
              <p><strong>Toon Shading Model</strong>은 GBufferC에 Base Color와 Metal Map, GBufferD에 Shadow Color, GBufferE에 Glossiness·Lightmap·Specular·Ramp Range를 저장합니다.</p>
              <p><strong>ToonFace Shading Model</strong>은 GBufferB에 Face Forward와 Roughness·Shading Model ID, GBufferC에 Base Color와 원본 Face Shadow Texture, GBufferD에 Shadow Color와 좌우 반전 Face Shadow Texture를 저장하고 GBufferE는 사용하지 않습니다.</p>
              <p>개선할 점은 Shadow Color가 GBuffer 슬롯 세 개를 사용하는 낭비와, 얼굴에 그림자가 드리워졌을 때 음영 표현이 밋밋해지는 문제였습니다.</p>
            </div>
            <LegacyAssets images={range(29, 33)} title="원신 스타일 언리얼 엔진 커스텀" />

            <div className="legacy-copy">
              <h4>젠레스 존 제로 스타일 Toon Shading</h4>
              <p>첫 번째 GBuffer 구성은 GBufferB에 N·L Strip, Roughness와 Shading Model ID, GBufferC에 Base Color와 AO, GBufferD에 Lightmap 0의 RGBA, GBufferE에 Noise 1·2·3과 MatCap을 저장합니다.</p>
              <p>두 번째 GBuffer 구성은 GBufferB에 N·L Strip, Roughness와 Shading Model ID, GBufferC에 Base Color, GBufferD에 Lightmap 0의 RGBA, GBufferE에 Lightmap 1의 RG와 Face Forward XY를 저장합니다.</p>
              <p>얼굴에 그림자가 드리워진 상태에서는 더 짙은 Face Shadow를 표현합니다. Material Parameter로 음영 LUT Index를 선택할 수 있습니다.</p>
              <p>Face Shadow Lightmap의 G Channel은 빛 반대편에 맺히는 상을 억제하여 음영이 얼굴 절반까지 이동한 뒤 반대편에 빛이 나타나게 합니다. B Channel은 입술과 코의 음영 윤곽을 강조합니다.</p>
              <p>광택 이미지를 이용한 MatCap을 구현했으며, MatCap의 빛 모양은 Pixel의 Clip Space Position과 Normal에 따라 변합니다.</p>
            </div>
            <LegacyAssets images={range(34, 45)} title="젠레스 존 제로 스타일 언리얼 엔진 커스텀" />
          </div>
        </article>

        <article className="portfolio-item legacy-item">
          <div className="portfolio-item-heading">
            <span>04</span>
            <div>
              <p>Houdini</p>
              <h3>Houdini를 이용한 Procedural Modeling</h3>
            </div>
          </div>
          <div className="portfolio-item-body">
            <p className="portfolio-description">Houdini의 노드 기반 작업으로 구조물, 도로, 울타리, 식생 배치와 건물 생성 과정을 구성한 Procedural Modeling 작업입니다.</p>
            <LegacyAssets images={range(52, 115)} title="Houdini를 이용한 Procedural Modeling" />
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
