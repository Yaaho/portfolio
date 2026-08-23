import Link from 'next/link';

const detailImage = (name: string) => `/portfolio/images/ground-interaction/detail/${name}`;

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
              폴리지 및 워터 인터렉션 시스템을<br />
              성능을 고려하여 완결성 있게 구현한 과정을<br />
              설명합니다.
            </p>
            <div className="case-title-rule" aria-hidden="true" />
            <p className="case-credit">임건우 · Cinder City 프로그래머 · 2025.05.12~현재</p>
          </div>
          <figure className="case-hero-image">
            <img src="/portfolio/images/ground-interaction/hero.png" alt="폴리지와 수면 상호작용 실행 화면" />
          </figure>
        </div>
      </section>

      <div className="detail-body wrap">
        <section className="detail-section">
          <h2>개요</h2>
          <p>캐릭터와 지면의 접촉 정보를 이용해 폴리지 변형과 실시간 수면 반응을 구현한 Unreal Engine 플러그인입니다.</p>
          <p>God of War 방식의 Dual Depth 폴리지 인터렉션을 구현했습니다.</p>
          <p>카메라 주변 충돌체가 132개인 환경에서도 Depth Capture 비용은 0.1ms 정도로 좋은 성능을 유지합니다.</p>
          <p>수면에 닿은 일정 속도 이상의 충돌체가 0.1~0.3초 간격으로 수면과 겹친 면적만큼 파장을 입력합니다.</p>
        </section>

        <section className="detail-section">
          <h2>기술적 배경</h2>

          <h3>갓 오브 워(2018)의 식생 인터렉션 발표</h3>
          <p>렌더 타겟의 한 채널에 콜리전의 Depth를 기록하고, 나머지 채널에서 시간에 따라 해당 Depth 값을 Z 방향으로 Fade하여 값의 변화로 폴리지의 흔들림을 구현했다는 아이디어입니다.</p>
          <div className="detail-media one"><img src={detailImage('image2.png')} alt="갓 오브 워 식생 인터렉션 발표 자료" /></div>

          <h3>언리얼 Niagara Simulation Stage 기반 접근</h3>
          <p>콜리전 데이터 배열을 Niagara Simulation Stage에 기록하여 Render Target을 만드는 구현 방법입니다. 하지만 이 구현 방법에는 성능상 우려되는 지점이 있었습니다.</p>
          <p><a href="https://www.youtube.com/watch?v=tDBA2br5_OQ" target="_blank" rel="noreferrer">YouTube 영상: In-Depth Look at a Unique Approach to Foliage Interaction ↗</a></p>
          <div className="detail-media one"><img src={detailImage('image3.jpg')} alt="Niagara Simulation Stage 기반 식생 인터렉션 자료" /></div>

          <h3>Niagara Simulation Stage의 다중 캐릭터 환경 성능</h3>
          <p>Simulation Stage에 충돌체 배열을 전달하고, 배열의 각 원소를 순회하며 일정 속도 이상의 충돌체 깊이 정보를 Grid2D에 기록하는 방식입니다.</p>
          <p>Grid2D의 모든 셀에서 배열 전체를 반복 검사하므로 충돌체 수가 증가할수록 연산량이 선형적으로 증가합니다. 연산 복잡도는 <span className="nowrap">O(C × N²)</span>이며, C는 충돌체 개수, N은 Grid2D 해상도입니다.</p>
          <div className="detail-media two"><img src={detailImage('image4.png')} alt="충돌체 배열" /><img src={detailImage('image5.png')} alt="Grid2D 반복 구조" /></div>

          <h3>성능 개선 방안 — Bottom-up Depth Capture</h3>
          <p>Compute Shader나 Niagara Simulation Stage에서 모든 충돌체를 반복하기보다 Bottom-up 방향으로 Depth를 캡쳐하는 편이 낫다고 판단했습니다. 이를 통해 충돌체 수와 Render Target 해상도에 따른 반복 연산을 줄일 수 있습니다.</p>
          <p>Unreal Engine Water 플러그인을 분석하던 중 WaterInfoRendering에서 Custom Depth Pass를 추가하는 방식을 찾았고, 해당 코드를 참고하여 구현했습니다.</p>
          <div className="detail-media one"><img src={detailImage('image6.png')} alt="Bottom-up Depth Capture 구현 코드" /></div>
        </section>

        <section className="detail-section">
          <h2>Ground Interaction</h2>

          <h3>작업 내역</h3>
          <div className="detail-media two"><img src={detailImage('image7.png')} alt="Ground Interaction 작업 내역 1" /><img src={detailImage('image8.png')} alt="Ground Interaction 작업 내역 2" /><img src={detailImage('image9.png')} alt="Ground Interaction 작업 내역 3" /><img src={detailImage('image10.png')} alt="Ground Interaction 작업 내역 4" /><img src={detailImage('image11.png')} alt="Ground Interaction 작업 내역 5" /><img src={detailImage('image12.png')} alt="Ground Interaction 작업 내역 6" /></div>

          <h3>컴포넌트 구성</h3>
          <p>컴포넌트-프록시 구조를 사용했습니다. 플레이어 뷰 주변을 나타내는 하나의 Render Target만 필요하여 복수의 컴포넌트를 생성할 일이 없지만, 게임 스레드와 렌더 스레드의 관계를 명확하게 하기 위해 이 구조로 구현했습니다.</p>
          <p>컴포넌트는 카메라 위치를 따라 매 프레임 이동합니다. Render Target이 가리키는 월드 중심 좌표를 텍셀 하나가 가리키는 월드 크기만큼 스냅했습니다. Shadow Map에서 그림자 떨림을 방지할 때도 일반적으로 사용하는 방식입니다.</p>
          <div className="detail-media two"><img src={detailImage('image13.png')} alt="Ground Interaction 컴포넌트 코드" /><img src={detailImage('image14.png')} alt="Ground Interaction Render Proxy 코드" /><img src={detailImage('image15.png')} alt="Center Snap 코드" /></div>

          <h3>컴포넌트 구성 — 캡쳐 패스와 MPC</h3>
          <p>캡쳐 패스 추가는 게임 스레드에서 이루어집니다. Depth Capture용 Static Mesh Primitive Component를 순회해 Show Only Primitive로 설정하는 작업은 게임 스레드에서 수행하는 것이 적절하다고 판단했습니다. 참고한 Water 플러그인도 동일하게 게임 스레드에서 캡쳐 함수를 호출합니다.</p>
          <p>Material에서 Render Target을 사용하는 데 필요한 Material Parameter Collection은 UObject이므로 게임 스레드에서 설정합니다.</p>
          <div className="detail-media two"><img src={detailImage('image16.png')} alt="Depth Capture 패스 호출 코드" /><img src={detailImage('image17.png')} alt="Material Parameter Collection 설정 코드" /></div>

          <h3>렌더 프록시 구현</h3>
          <p>렌더 프록시의 패스는 세 가지 순서로 실행됩니다.</p>
          <p>Scrolling Pass는 현재 프레임의 World Center와 이전 프레임의 World Center가 다를 때만 실행합니다. Fade는 Developer Settings에서 설정된 주기로 실행하며 Depth 결과값을 설정된 속도로 Z 방향으로 Fade합니다. Update Depth는 Depth Capture 결과로 Render Target을 업데이트합니다.</p>
          <div className="detail-media one"><img src={detailImage('image18.png')} alt="Ground Interaction Render Proxy 패스 코드" /></div>

          <h3>캡쳐 전용 메시 컴포넌트 생성</h3>
          <p>기본값은 Unreal Character 클래스의 Physics Asset Collision을 그대로 사용합니다. Override를 지정하면 Ground Interaction용 Physics Asset을 통해 Mesh Component가 생성됩니다.</p>
          <p>Physics Asset은 Codex와 Unreal MCP를 통해 자동 생성했습니다. MCP 호출 시 맥락 파악 시간과 토큰 사용량을 줄이기 위해 MCP가 읽는 용도의 안내 문서를 저장하여 사용했습니다.</p>
          <div className="detail-media two"><img src={detailImage('image19.png')} alt="프록시 메시 생성 코드" /><img src={detailImage('image20.png')} alt="Physics Asset 프록시 메시" /><img src={detailImage('image21.png')} alt="Physics Asset 자동 생성 코드" /><img src={detailImage('image22.png')} alt="Physics Asset 자동 생성 결과" /></div>

          <h3>머티리얼</h3>
          <p>플러그인의 Material Function에서 Position Offset을 반환하도록 만들었습니다. 풀의 뿌리 부분에서 흔들림의 세기가 약해지는 기능은 흔히 사용하는 Vertex Color 방식 대신 Pixel World Position과 Instance Bound를 사용했습니다. Vertex Color를 사용하도록 대응할 수도 있습니다.</p>
          <p>Depth Render Target을 샘플링하는 위치는 Pixel World Position과 풀 인스턴스 중심 위치를 모두 사용할 수 있습니다. 갓 오브 워의 풀은 전체적으로 흔들리는 것으로 보아 인스턴스 위치의 UV 한 곳만 샘플링하거나, 에셋 제작 과정에서 Texture나 Vertex에 기록한 Pivot 위치만 샘플링하는 것으로 추정했습니다.</p>
          <p>Material에서는 플러그인의 MF에서 반환된 World Position Offset 값을 더합니다.</p>
          <div className="detail-media two"><img src={detailImage('image23.png')} alt="Ground Interaction Material Function" /><img src={detailImage('image24.png')} alt="Ground Interaction Material" /></div>

          <h3>세팅 목록</h3>
          <p>Ground Interaction 설정값 목록입니다. “명일방주: 엔드필드”는 비슷한 Dual Depth Interaction을 사용하면서 풀의 흔들림이 게임 프레임보다 낮은 고정 프레임으로 동작하는 것으로 보였습니다. 비슷한 결과를 얻으려면 Depth Fade Update Rate를 초당 30회 정도로 낮추면 됩니다.</p>
          <div className="detail-media one"><img src={detailImage('image25.png')} alt="Ground Interaction 설정 목록" /></div>

          <h3>작업 결과</h3>
          <p>인스턴스 위치만 샘플링하도록 설정하면 풀 인스턴스 전체가 같은 방향으로 움직입니다.</p>
          <div className="detail-media one"><img src={detailImage('image26.gif')} alt="인스턴스 위치 샘플링 결과" /></div>
          <p>버텍스 위치를 샘플링하도록 설정하면 풀이 부분적으로 움직입니다.</p>
          <div className="detail-media two"><img src={detailImage('image27.gif')} alt="버텍스 위치 샘플링 결과" /><img src={detailImage('image28.png')} alt="Ground Interaction Depth Render Target 결과" /></div>

          <h3>성능</h3>
          <p>양발과 팔다리 캡쳐용 프록시 메시를 12개씩 가진 캐릭터 11명을 배치하여 GPU 성능을 측정했습니다. 총 충돌체 개수는 132개입니다.</p>
          <p>Depth Capture 전체 비용은 0.11ms, Scrolling과 Fade 등 나머지 패스의 전체 비용은 0.01ms입니다.</p>
          <p>Niagara Simulation Stage 방식으로 폴리지 인터렉션을 구현했을 때는 캐릭터당 충돌체가 하나뿐인 조건에서도 캐릭터가 10명 이상이면 비용이 0.3ms 이상으로 증가했습니다. 이에 비해 Depth Capture 방식은 30배 이상의 성능 향상을 보여줍니다.</p>
          <div className="detail-media one"><img src={detailImage('image29.png')} alt="Ground Interaction GPU 성능 측정 결과" /></div>
        </section>

        <section className="detail-section">
          <h2>Water Interaction</h2>

          <h3>작업 내역</h3>
          <div className="detail-media two"><img src={detailImage('image30.png')} alt="Water Interaction 작업 내역 1" /><img src={detailImage('image31.png')} alt="Water Interaction 작업 내역 2" /></div>

          <h3>컴포넌트 구성</h3>
          <p>컴포넌트-프록시 구조와 Center Snap 구조는 Ground Interaction과 동일합니다.</p>
          <p>Water Body와 닿아 있고 일정 속도 이상으로 움직이는 Interaction Mesh의 접촉면 정보를 Render Proxy에 전달합니다. 충돌체는 설정된 주기로 파장을 발생시키며, 설정에서 Interaction Mesh의 파장 발생 주기를 변경할 수 있습니다.</p>
          <p>Subsystem의 Public Function을 통해 외부에서 특정 지점에 파장을 발생시킬 수도 있습니다.</p>
          <div className="detail-media two"><img src={detailImage('image32.png')} alt="Water Interaction 컴포넌트 코드" /><img src={detailImage('image33.png')} alt="Water Interaction Render Proxy 코드" /><img src={detailImage('image34.png')} alt="Water Splat 생성 코드" /><img src={detailImage('image35.png')} alt="Water Splat 설정 코드" /><img src={detailImage('image36.png')} alt="외부 Water Splat 추가 코드" /></div>

          <h3>물 파장(Splat) 입력 최적화</h3>
          <p>Splat 입력은 Compute Shader를 통해 이루어지며, Splat을 64개 단위로 나누어 Dispatch합니다.</p>
          <p>한 그룹 안의 8×8개 스레드가 각 Splat의 영향 범위가 그룹 영역과 겹치는지 검사하고, 겹치는 Splat의 인덱스를 Group Shared Memory의 인덱스 배열에 저장합니다. 이후 각 픽셀은 이 배열에 저장된 Splat만 반복하여 검사합니다.</p>
          <div className="detail-media two"><img src={detailImage('image37.png')} alt="Water Splat Compute Shader" /><img src={detailImage('image38.png')} alt="Water Splat Group Shared Memory 코드" /></div>

          <h3>Scrolling</h3>
          <p>Water Scrolling과 Simulation 모두 세 Texture의 역할 ID를 순환시키는 방식으로 구현했습니다. Scrolling 후 역할 ID를 Advance하는 함수를 호출합니다.</p>
          <div className="detail-media one"><img src={detailImage('image39.png')} alt="Water Interaction Scrolling 코드" /></div>

          <h3>Water Height Simulation</h3>
          <p>Water Simulation도 세 Texture의 순환 구조이며, 시뮬레이션 일관성을 위해 60Hz 고정 스텝으로 동작합니다.</p>
          <p>상하좌우로 한 시뮬레이션 스텝만큼 이동한 위치를 샘플링하여 합친 값에서 중심 위치를 차감해 파동을 전파시키고, Damping Factor를 곱해 감쇠합니다.</p>
          <div className="detail-media two"><img src={detailImage('image40.png')} alt="Water Height Simulation C++ 코드" /><img src={detailImage('image41.png')} alt="Water Height Simulation Shader 코드" /></div>

          <h3>머티리얼</h3>
          <p>Material Function에서 현재 World Position을 기준으로 지정한 월드 거리만큼 떨어진 네 방향의 위치를 샘플링하고 기울기를 구해 반환합니다.</p>
          <p>Material에서 World Normal을 Tangent Normal로 변환하여 사용합니다.</p>
          <div className="detail-media two"><img src={detailImage('image42.png')} alt="Water Normal Material Function" /><img src={detailImage('image43.png')} alt="Water Material" /></div>

          <h3>작업 결과</h3>
          <p>수면에 닿은 일정 속도 이상의 충돌체가 0.1~0.3초 간격으로 수면과 겹친 면적만큼 파장을 입력한 결과입니다.</p>
          <div className="detail-media one"><img src={detailImage('image44.gif')} alt="Water Interaction 0.1초에서 0.3초 입력 결과" /></div>
          <p>파장 입력 주기를 0으로 설정하여 매 프레임 파장이 입력되도록 한 결과입니다.</p>
          <div className="detail-media one"><img src={detailImage('image45.gif')} alt="Water Interaction 입력 주기 0 결과" /></div>

          <h3>성능</h3>
          <p>Water Simulation 관련 패스의 GPU 비용은 Splat 0.04ms, Scrolling 0.04ms, Height Simulation 0.03ms입니다.</p>
          <p>GPU Total Cost는 0.11ms이며 평균은 0.09ms입니다.</p>
          <div className="detail-media one"><img src={detailImage('image46.png')} alt="Water Interaction GPU 성능 측정 결과" /></div>
        </section>

        <section className="detail-section">
          <p>감사합니다.</p>
        </section>

        <p className="detail-source"><a href="https://github.com/Yaaho/Unreal-GroundInteraction" target="_blank" rel="noreferrer">전체 소스와 커밋 기록 보기 ↗</a></p>
      </div>
    </main>
  );
}
