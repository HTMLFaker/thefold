import Image from 'next/image';

export default function Movie() {
  return (
    <div className="movie_wrapper">
      <h3 className="movie_title">시공사례</h3>
      <p className="movie_description">
        더폴드의 다양한 공간의 폴딩도어 설치적용 사례를 보여드립니다.
      </p>
      <div className="card_movie glass">
        <div className="movie_area">
          <Image src={'/a1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
          <Image src={'/a1.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
          <Image src={'/a2.jpg'} alt={''} width={1350} height={759} className={'img img3'} />
          <Image src={'/a3.jpg'} alt={''} width={1350} height={759} className={'img img4'} />
          <Image src={'/a4.jpg'} alt={''} width={1350} height={759} className={'img img5'} />
        </div>
        <div className="text_area">
          <div className="text_inner">
            <h2 className="title">
              <span className="hash">#</span> 글라스 폴딩도어
            </h2>
            <p className="description">
              <span>국내 최소 유리간격</span> <span>2mm 적용</span>
            </p>
            <p className="action">
              <a href="#" className="btn">
                시공사례
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="card_movie partition">
        <div className="movie_area">
          <Image src={'/b1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
          <Image src={'/b2.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
          <Image src={'/b3.jpg'} alt={''} width={1350} height={759} className={'img img3'} />
        </div>
        <div className="text_area">
          <div className="text_inner">
            <h2 className="title">
              <span className="hash">#</span> 칸막이 폴딩도어
            </h2>
            <p className="description">
              <span>인테리어 시트 마감으로</span> <span>다양한 디자인</span>
            </p>
            <p className="action">
              <a href="#" className="btn">
                시공사례
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="card_movie the">
        <div className="movie_area">
          <Image src={'/c1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
          <Image src={'/c2.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
          <Image src={'/c1-1.png'} alt={''} width={1350} height={759} className={'img img3'} />
        </div>
        <div className="text_area">
          <div className="text_inner">
            <h2 className="title">
              <span className="hash">#</span> the 폴딩도어
            </h2>
            <p className="description">
              <span>다양한 유리성능 적용으로</span> <span>실용성 극대화</span>
            </p>
            <p className="action">
              <a href="#" className="btn">
                시공사례
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
