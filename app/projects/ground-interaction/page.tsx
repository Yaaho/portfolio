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

      <div className="detail-body wrap">
        <section className="detail-section">
          <h2>기술적 배경</h2>
          <p>God of War의 식생 인터렉션 발표에서는 Render Target의 한 채널에 충돌 깊이를 기록하고, 다른 채널의 값을 시간에 따라 위로 이동시켜 폴리지 흔들림을 만드는 방식을 소개했습니다.</p>
          <div className="detail-media two"><img src={detailImage('image2.png')} alt="God of War 식생 인터렉션 발표 자료" /><img src={detailImage('image3.jpg')} alt="Niagara Simulation Stage 기반 식생 인터렉션 자료" /></div>

          <h3>Niagara Simulation Stage 기반 접근의 비용</h3>
          <p>충돌체 배열을 Simulation Stage에 전달하는 방식은 Grid2D의 모든 셀에서 배열을 반복해서 검사합니다. 충돌체 수가 늘어날수록 연산량이 증가하므로 다중 캐릭터 환경에서 비용이 커질 수 있습니다.</p>
          <div className="detail-media two"><img src={detailImage('image4.png')} alt="충돌체 배열" /><img src={detailImage('image5.png')} alt="Grid2D 반복 구조" /></div>

          <h3>Bottom-up Depth Capture</h3>
          <p>Compute Shader에서 모든 충돌체를 반복하는 대신 아래에서 위를 향해 Depth를 캡처했습니다. Unreal Engine Water 플러그인의 WaterInfoRendering에서 Custom Render Pass를 추가하는 방식을 참고했습니다.</p>
          <div className="detail-media one"><img src={detailImage('image6.png')} alt="Bottom-up Depth Capture 구현 코드" /></div>
        </section>

        <section className="detail-section">
          <h2>Ground Interaction</h2>
          <h3>작업 내역</h3>
          <div className="detail-media three"><img src={detailImage('image7.png')} alt="Ground Interaction 작업 내역 1" /><img src={detailImage('image8.png')} alt="Ground Interaction 작업 내역 2" /><img src={detailImage('image9.png')} alt="Ground Interaction 작업 내역 3" /><img src={detailImage('image10.png')} alt="Ground Interaction 작업 내역 4" /><img src={detailImage('image11.png')} alt="Ground Interaction 작업 내역 5" /><img src={detailImage('image12.png')} alt="Ground Interaction 작업 내역 6" /></div>

          <h3>컴포넌트 구성</h3>
          <p>Component와 Render Proxy를 분리했습니다. Component는 카메라를 따라 이동하고, Render Target의 World Center는 한 texel이 나타내는 월드 크기에 맞춰 Snap하여 이동 시 흔들림을 줄였습니다.</p>
          <div className="detail-media three"><img src={detailImage('image13.png')} alt="Ground Interaction 컴포넌트 코드" /><img src={detailImage('image14.png')} alt="Ground Interaction Render Proxy 코드" /><img src={detailImage('image15.png')} alt="Center Snap 코드" /></div>
          <p>Depth Capture용 Static Mesh Primitive Component를 게임 스레드에서 순회해 Show Only Primitive로 전달합니다. Material Parameter Collection도 게임 스레드에서 설정합니다.</p>
          <div className="detail-media two"><img src={detailImage('image16.png')} alt="Depth Capture 패스 호출 코드" /><img src={detailImage('image17.png')} alt="Material Parameter Collection 설정 코드" /></div>

          <h3>Render Proxy</h3>
          <p>Scrolling, Fade, Update Depth 순서로 패스를 실행합니다. World Center가 이동했을 때만 Scrolling을 수행하고, Fade는 설정된 주기에 맞춰 갱신합니다. 마지막으로 Depth Capture 결과를 Render Target에 반영합니다.</p>
          <div className="detail-media one"><img src={detailImage('image18.png')} alt="Ground Interaction Render Proxy 패스 코드" /></div>

          <h3>캡처 전용 메시 컴포넌트</h3>
          <p>기본적으로 Character의 Physics Asset 충돌체를 사용합니다. 별도 Physics Asset을 지정하면 Ground Interaction 전용 프록시 메시를 생성합니다.</p>
          <div className="detail-media two"><img src={detailImage('image19.png')} alt="프록시 메시 생성 코드" /><img src={detailImage('image20.png')} alt="Physics Asset 프록시 메시" /><img src={detailImage('image21.png')} alt="Physics Asset 자동 생성 코드" /><img src={detailImage('image22.png')} alt="Physics Asset 자동 생성 결과" /></div>

          <h3>Material</h3>
          <p>Material Function이 Position Offset을 반환합니다. 뿌리 부분의 흔들림 감쇠는 Pixel World Position과 Instance Bound를 이용합니다. Depth Render Target은 인스턴스 피벗 위치 또는 버텍스 위치에서 샘플링할 수 있습니다.</p>
          <div className="detail-media two"><img src={detailImage('image23.png')} alt="Ground Interaction Material Function" /><img src={detailImage('image24.png')} alt="Ground Interaction Material" /></div>

          <h3>설정</h3>
          <p>Interaction 범위, Render Target 해상도, Fade 속도와 최대 높이, 업데이트 주기 등을 설정할 수 있습니다. 낮은 고정 프레임의 움직임이 필요하면 Depth Fade Update Rate를 조절합니다.</p>
          <div className="detail-media one"><img src={detailImage('image25.png')} alt="Ground Interaction 설정 목록" /></div>
        </section>

        <section className="detail-section">
          <h2>Water Interaction</h2>
          <h3>작업 내역</h3>
          <div className="detail-media two"><img src={detailImage('image30.png')} alt="Water Interaction 작업 내역 1" /><img src={detailImage('image31.png')} alt="Water Interaction 작업 내역 2" /></div>

          <h3>컴포넌트 구성</h3>
          <p>Component와 Render Proxy, Center Snap 구조는 Ground Interaction과 동일합니다. Water Body와 접촉한 프록시 메시가 일정 속도 이상으로 움직일 때 접촉면 정보를 전달하며, 설정된 간격으로 파장을 생성합니다. Subsystem의 공개 함수로 외부 위치에도 파장을 추가할 수 있습니다.</p>
          <div className="detail-media three"><img src={detailImage('image32.png')} alt="Water Interaction 컴포넌트 코드" /><img src={detailImage('image33.png')} alt="Water Interaction Render Proxy 코드" /><img src={detailImage('image34.png')} alt="Water Splat 생성 코드" /><img src={detailImage('image35.png')} alt="Water Splat 설정 코드" /><img src={detailImage('image36.png')} alt="외부 Water Splat 추가 코드" /></div>

          <h3>Splat 입력 최적화</h3>
          <p>Splat 입력은 Compute Shader에서 처리하며 한 번에 64개씩 나누어 Dispatch합니다. Thread Group은 각 Splat이 그룹 영역과 겹치는지 먼저 판정하고 결과를 Group Shared Memory에 저장합니다. 각 픽셀은 판정을 통과한 Splat만 검사합니다.</p>
          <div className="detail-media two"><img src={detailImage('image37.png')} alt="Water Splat Compute Shader" /><img src={detailImage('image38.png')} alt="Water Splat Group Shared Memory 코드" /></div>

          <h3>Scrolling</h3>
          <p>Water Scrolling과 Simulation은 세 Height Texture의 역할 ID를 순환시키는 방식으로 구현했습니다. Scrolling 후 Texture 역할을 교체해 복사 횟수를 줄였습니다.</p>
          <div className="detail-media one"><img src={detailImage('image39.png')} alt="Water Interaction Scrolling 코드" /></div>

          <h3>Water Height Simulation</h3>
          <p>세 Height Texture를 순환하며 60Hz 고정 스텝으로 실행합니다. 현재 위치의 상하좌우를 샘플링한 합에서 이전 높이를 차감해 파동을 전달하고 Damping Factor로 감쇠합니다.</p>
          <div className="detail-media two"><img src={detailImage('image40.png')} alt="Water Height Simulation C++ 코드" /><img src={detailImage('image41.png')} alt="Water Height Simulation Shader 코드" /></div>

          <h3>Material</h3>
          <p>현재 월드 위치에서 네 방향의 Height를 샘플링해 기울기를 계산합니다. 반환된 World Normal을 Tangent Normal로 변환해 Water Material에 적용합니다.</p>
          <div className="detail-media two"><img src={detailImage('image42.png')} alt="Water Normal Material Function" /><img src={detailImage('image43.png')} alt="Water Material" /></div>
        </section>

        <p className="detail-source"><a href="https://github.com/Yaaho/Unreal-GroundInteraction" target="_blank" rel="noreferrer">전체 소스와 커밋 기록 보기 ↗</a></p>
      </div>
    </main>
  );
}
