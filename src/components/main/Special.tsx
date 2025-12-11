import Image from 'next/image';

export default function Special() {
  return (
    <div className="special">
      <h3 className="special_title" id="mainSpecialTitle">
        더폴드만의 특별함
      </h3>
      <p className="special_description" id="mainSpecialDescription">
        <span>
          폴딩도어 하나에도 철학을 담았습니다. 견고함 속에 담긴 섬세한 움직임이 더폴드의 기준입니다.
        </span>
      </p>
      <ul className="lst">
        <li className="itm itm1" id="specialItem1">
          <div className="thumb">
            <Image src={'/special1.jpg'} width={740} height={920} alt={''} />
          </div>
          <div className="sub">
            <p className="index">01.</p>
            <h4 className="tit">Enduring Product</h4>
            <p className="des1">&quot;전제품 SUS 베어링 적용&quot;</p>
            <p className="des2">
              모든 폴딩도어에 스테인리스 베어링을 기본 적용하여 습기·온도 변화에도 녹 발생을
              억제하고 부드러운 개폐감을 유지합니다.
            </p>
          </div>
        </li>
        <li className="itm itm2" id="specialItem2">
          <div className="thumb">
            <Image src={'/special2.jpg'} width={740} height={920} alt={''} />
          </div>
          <div className="sub">
            <p className="index">02.</p>
            <h4 className="tit">Custom Product</h4>
            <p className="des1">&quot;맞춤형 설계 시스템&quot;</p>
            <p className="des2">공간의 용도와 구조에 맞춰, 최적의 폴딩도어를 설계·제작합니다.</p>
          </div>
        </li>
        <li className="itm itm3" id="specialItem3">
          <div className="thumb">
            <Image src={'/special3.jpg'} width={740} height={920} alt={''} />
          </div>
          <div className="sub">
            <p className="index">03.</p>
            <h4 className="tit">Best Product</h4>
            <p className="des1">&quot;누구보다 빠른 견적&quot;</p>
            <p className="des2">고객님의 시간은 소중하니까 누구보다 빠르게 견적을 전달드립니다.</p>
          </div>
        </li>
        <li className="itm itm4" id="specialItem4">
          <div className="thumb">
            <Image src={'/special4.jpg'} width={740} height={920} alt={''} />
          </div>
          <div className="sub">
            <p className="index">04.</p>
            <h4 className="tit">Nice Product</h4>
            <p className="des1">&quot;무한신뢰 책임시공&quot;</p>
            <p className="des2">폴딩도어만 잘 만드는게 아닌 마무리까지 확실한 더폴드입니다.</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
