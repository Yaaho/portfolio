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

      <div className="implementation-body wrap">
        <section className="implementation-section">
          <h2>Ground Interaction 구현</h2>
          <div className="implementation-content">
            <h3>Bottom-up Depth Capture</h3>
            <p>Physics Asset을 기반으로 생성한 프록시 메시만 Custom Render Pass에 포함합니다. 아래에서 위를 바라보는 직교 투영으로 접촉 물체의 하단 깊이를 캡처합니다.</p>
            <pre><code>{`PassInput.ProjectionMatrix =
    BuildBottomUpOrthoProjection(HalfExtentX, HalfExtentY, MaxDepth);

PassInput.ShowOnlyPrimitives = InShowOnlyPrimitives;
PassInput.CustomRenderPass =
    new FGroundInteractionDepthPass(SafeRenderTargetSize, this, BottomInteractionCenterWS);

InViewFamily.Scene->AddCustomRenderPass(&InViewFamily, PassInput);`}</code></pre>
            <a className="source-file" href="https://github.com/Yaaho/Unreal-GroundInteraction/blob/main/Source/GroundInteraction/Private/GroundInteractionRendererProxy.cpp" target="_blank" rel="noreferrer">GroundInteractionRendererProxy.cpp ↗</a>

            <h3>Render Graph Pass</h3>
            <p>이전 프레임의 Depth/Fade 상태를 위치 변화만큼 스크롤한 뒤 Fade와 새 Depth를 순서대로 반영하고 출력 Render Target으로 복사합니다.</p>
            <pre><code>{`AddGroundScrollingPass(...);
AddFadePass(...);
AddUpdateDepthPass(...);
CopyDepthFadeToOutput(GraphBuilder, CurrentStateIndex);`}</code></pre>
          </div>
        </section>

        <section className="implementation-section">
          <h2>Water Interaction 구현</h2>
          <div className="implementation-content">
            <h3>Fixed Timestep</h3>
            <p>프레임 델타를 누적하고 고정 간격으로 시뮬레이션합니다. 한 프레임의 실행 횟수는 설정된 최대 substep 수로 제한합니다.</p>
            <pre><code>{`const double MaxAccumulatedTimeSeconds =
    FixedDeltaTimeSeconds * WaterInteractionMaxSubstepsPerFrame;

SimulationAccumulatorSeconds = FMath::Min(
    SimulationAccumulatorSeconds + FrameDeltaTimeSeconds,
    MaxAccumulatedTimeSeconds);

const int32 SimulationSubstepCount = FMath::Min(
    FMath::FloorToInt(SimulationAccumulatorSeconds / FixedDeltaTimeSeconds),
    WaterInteractionMaxSubstepsPerFrame);`}</code></pre>

            <h3>Triple Buffer Rotation</h3>
            <p>Previous, Current, Next 세 Height Texture의 역할만 교체해 시뮬레이션 결과를 다음 단계로 넘깁니다.</p>
            <pre><code>{`CurrentHeightTextureId = OldNextHeightTextureId;
PreviousHeightTextureId = OldCurrentHeightTextureId;
NextHeightTextureId = OldPreviousHeightTextureId;`}</code></pre>
            <a className="source-file" href="https://github.com/Yaaho/Unreal-GroundInteraction/blob/main/Source/GroundInteraction/Public/WaterInteractionRendererProxy.h" target="_blank" rel="noreferrer">WaterInteractionRendererProxy.h ↗</a>

            <h3>Height Field Compute Shader</h3>
            <p>현재 Height Texture의 네 이웃과 이전 프레임 높이를 이용해 다음 높이를 계산하고 damping을 적용합니다.</p>
            <pre><code>{`const float PreviousCenterHeight =
    PreviousHeightTexture.Load(int3(Pixel, 0)).r;
const float DampingFactor =
    1.0f - saturate(Damping * DeltaTimeSeconds);

NextHeightTexture[Pixel] =
    (0.5f * CurrentNeighborSum - PreviousCenterHeight) * DampingFactor;`}</code></pre>
            <a className="source-file" href="https://github.com/Yaaho/Unreal-GroundInteraction/blob/main/Shaders/GroundInteractionWaterHeightSimulation.usf" target="_blank" rel="noreferrer">GroundInteractionWaterHeightSimulation.usf ↗</a>
          </div>
        </section>

        <div className="implementation-source">
          <a className="button primary" href="https://github.com/Yaaho/Unreal-GroundInteraction" target="_blank" rel="noreferrer">전체 소스 및 커밋 기록 ↗</a>
        </div>
      </div>
    </main>
  );
}
