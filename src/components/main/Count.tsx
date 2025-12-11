import Counter from './Counter';

export default function Count() {
  return (
    <div id="countWrapper" className="count_wrapper">
      <h3 className="count_title">압도적 시공 경험, 검증된 기술력</h3>
      <p className="count_description">꾸준히 선택받아온 이유, 시공 품질로 증명합니다.</p>
      <div className="count_inner">
        <div className="box">
          <div className="donut donut1">
            <div className="donut_left" />
            <div className="donut_right" />
            <div className="donut_inner">
              <div className="text_area">
                <p className="sub_title">누적시공</p>
                <Counter target={12147} duration={2000} />
                <h4 className="title">글라스 폴딩도어</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="donut donut2">
            <div className="donut_left" />
            <div className="donut_right" />
            <div className="donut_inner">
              <div className="text_area">
                <p className="sub_title">누적시공</p>
                <Counter target={9583} duration={2000} />
                <h4 className="title">칸막이 폴딩도어</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="donut donut3">
            <div className="donut_left" />
            <div className="donut_right" />
            <div className="donut_inner">
              <div className="text_area">
                <p className="sub_title">누적시공</p>
                <Counter target={5345} duration={2000} />
                <h4 className="title">The 폴딩도어</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="donut donut4">
            <div className="donut_left" />
            <div className="donut_right" />
            <div className="donut_inner">
              <div className="text_area">
                <p className="sub_title">누적시공</p>
                <Counter target={14344} duration={2000} />
                <h4 className="title">단열 폴딩도어</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
