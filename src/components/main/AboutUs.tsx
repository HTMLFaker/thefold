'use client';

import FoldingLine from '../common/FoldingLine';

export default function AboutUs() {
  return (
    <div className="about" id="aboutUs">
      <h2 className="about_title">
        About Us <FoldingLine width={2} height={30} color={'#999'} />
      </h2>
      <p className="about_description">
        <span>
          저희 더폴드는 사람을 먼저 생각하는 기술을 연구해왔고, 내부와 외부의 소통을 중시하는
          시공경험을 바탕으로 하여
        </span>
        <span>빠르고 정확하며 안정적으로 고객의 환경을 창조해왔습니다.</span>
      </p>
      <p className="about_description sub">
        <span>
          고객의 만족을 회사의 자부심으로 생각하며, 항상 고객의 행복을 최우선의 목표로 일해왔기에
        </span>
        <span>
          변함없이 더욱 강한 신뢰를 유지할 수 있도록 임직원 모두가 최선을 다하고 있습니다.
        </span>
      </p>
    </div>
  );
}
