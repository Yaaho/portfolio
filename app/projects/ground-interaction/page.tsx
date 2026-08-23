import Link from 'next/link';

export default function GroundInteractionCaseStudy() {
  return (
    <main>
      <header className="site-nav wrap">
        <Link className="wordmark" href="/">YGW<span>.</span></Link>
        <nav><a href="https://github.com/Yaaho/Unreal-GroundInteraction" target="_blank" rel="noreferrer">Source ↗</a></nav>
      </header>
      <section className="case-header wrap">
        <Link className="back-link" href="/">← SELECTED WORK</Link>
        <h1>Ground<br />Interaction</h1>
        <p className="case-deck">캐릭터와 지면 사이의 접촉 정보를 GPU 파이프라인으로 전달해 foliage 변형과 실시간 수면 반응을 만드는 Unreal Engine 플러그인입니다.</p>
        <dl className="case-meta">
          <div><dt>Role</dt><dd>Rendering / Tools Programming</dd></div>
          <div><dt>Stack</dt><dd>UE C++ · RDG · HLSL</dd></div>
          <div><dt>Focus</dt><dd>Interaction · Simulation · Optimization</dd></div>
        </dl>
      </section>
      <div className="case-body wrap">
        <section className="case-section">
          <h2><span>01 / CONTEXT</span>문제 정의</h2>
          <div className="case-content">
            <h3>접촉은 자연스럽게,<br />비용은 예측 가능하게</h3>
            <p>캐릭터가 풀과 물을 통과할 때 환경이 반응해야 장면에 무게감이 생깁니다. 하지만 다수의 오브젝트를 CPU에서 개별 갱신하거나, 매 프레임 불필요한 GPU 작업을 수행하면 확장성이 떨어집니다.</p>
            <p>접촉 정보를 화면 공간의 데이터로 압축하고, Render Graph와 Compute Shader를 이용해 foliage와 water가 같은 입력 구조를 공유하도록 만드는 것이 목표였습니다.</p>
          </div>
        </section>
        <section className="case-section">
          <h2><span>02 / FOLIAGE</span>Dual-depth 상호작용</h2>
          <div className="case-content">
            <h3>한 장의 깊이보다<br />두 경계가 더 많은 것을 말합니다.</h3>
            <p>위쪽과 아래쪽에서 각각 캡처한 depth를 조합해 상호작용 오브젝트의 두께와 통과 범위를 표현했습니다. foliage material은 이 영역을 읽어 캐릭터가 지나가는 방향과 접촉 깊이에 맞춰 변형됩니다.</p>
            <div className="tech-diagram"><div className="flow"><div className="flow-node">PHYSICS ASSET<br />PROXY</div><div className="flow-node">TOP / BOTTOM<br />DEPTH</div><div className="flow-node">FADE +<br />SCROLLING</div><div className="flow-node">MATERIAL<br />DEFORMATION</div></div><div className="note">INTERACTION DATA FLOW / RENDER GRAPH PASSES</div></div>
            <ul><li>Physics Asset을 기반으로 interaction proxy를 자동 생성</li><li>Bottom-up depth capture로 오브젝트의 하단 경계까지 확보</li><li>Depth, Fade, Scrolling, Output Copy 단계를 RDG pass로 구성</li><li>월드 이동에 맞춰 interaction texture를 스크롤해 공간 연속성 유지</li></ul>
          </div>
        </section>
        <section className="case-section">
          <h2><span>03 / ARCHITECTURE</span>렌더링 파이프라인</h2>
          <div className="case-content">
            <h3>게임 스레드의 상태를<br />렌더 스레드의 작업으로 분리했습니다.</h3>
            <p>Component가 설정과 수명주기를 관리하고, Scene Proxy가 렌더링에 필요한 데이터만 전달합니다. 실제 텍스처 갱신은 Render Graph pass로 등록해 리소스 의존성과 실행 순서를 명시적으로 관리했습니다.</p>
            <div className="tech-diagram"><div className="flow"><div className="flow-node">GAME THREAD<br />COMPONENT</div><div className="flow-node">SCENE<br />PROXY</div><div className="flow-node">RENDER<br />GRAPH</div><div className="flow-node">GLOBAL<br />TEXTURE</div></div><div className="note">STATE OWNERSHIP / THREAD BOUNDARY / RESOURCE LIFETIME</div></div>
          </div>
        </section>
        <section className="case-section">
          <h2><span>04 / WATER</span>실시간 수면 시뮬레이션</h2>
          <div className="case-content">
            <h3>작은 충격을 누적하고,<br />세 장의 텍스처를 순환합니다.</h3>
            <p>물에 닿은 지점을 splat 입력으로 모은 뒤 Compute Shader에서 height field를 갱신합니다. Previous, Current, Next 세 상태를 순환시켜 별도 복사 없이 다음 시뮬레이션 단계로 넘깁니다.</p>
            <div className="tech-diagram"><div className="buffer-flow"><div className="buffer">PREVIOUS<br />t − 1</div><span className="buffer-arrow">→</span><div className="buffer active">CURRENT<br />t</div><span className="buffer-arrow">→</span><div className="buffer">NEXT<br />t + 1</div></div><div className="note">TRIPLE BUFFER ROTATION / COMPUTE SHADER HEIGHT FIELD</div></div>
            <ul><li>다수의 접촉 입력을 splat 목록으로 모아 한 번에 처리</li><li>Previous / Current / Next texture rotation으로 복사 비용 제거</li><li>카메라와 월드 이동에 대응하는 XY scrolling 지원</li><li>출력 텍스처는 상태가 실제로 변경된 경우에만 갱신</li></ul>
          </div>
        </section>
        <section className="case-section">
          <h2><span>05 / OPTIMIZATION</span>비용 통제</h2>
          <div className="case-content">
            <h3>프레임과 무관한 시뮬레이션,<br />변화가 없을 때는 멈추는 렌더링</h3>
            <p>시뮬레이션은 고정 60Hz timestep으로 실행하고 한 프레임의 substep을 최대 4회로 제한했습니다. splat이 들어오지 않은 시간이 누적되면 패스를 조기에 중단해 정적인 장면의 GPU 비용을 줄였습니다.</p>
            <ul><li>Fixed timestep으로 프레임 변동에도 일관된 파동 속도 유지</li><li>최대 substep 제한으로 순간적인 프레임 지연의 비용 상한 설정</li><li>입력이 없는 상태를 감지해 water simulation early stop</li><li>GPU stat과 pass 단위 측정으로 병목을 확인할 수 있게 구성</li></ul>
          </div>
        </section>
        <div className="case-cta"><div><div className="kicker">SOURCE & HISTORY</div><p>구현 코드와 분리된 커밋 기록을 GitHub에서 확인할 수 있습니다.</p></div><a className="button primary" href="https://github.com/Yaaho/Unreal-GroundInteraction" target="_blank" rel="noreferrer">저장소 보기 ↗</a></div>
      </div>
    </main>
  );
}
