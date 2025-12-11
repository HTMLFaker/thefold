import React from 'react';
import Counter from './Counter';

export default function CountWrapper() {
  return (
    <div id="countWrapper" className="count_wrapper">
      <div className="box">
        <div className="donut donut1">
          <div className="donut_left"></div>
          <div className="donut_right"></div>
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
          <div className="donut_left"></div>
          <div className="donut_right"></div>
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
          <div className="donut_left"></div>
          <div className="donut_right"></div>
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
          <div className="donut_left"></div>
          <div className="donut_right"></div>
          <div className="donut_inner">
            <div className="text_area">
              <p className="sub_title">누적시공</p>
              <Counter target={14344} duration={2000} />
              <h4 className="title">단열 폴딩도어</h4>
            </div>
          </div>
        </div>
      </div>
      {/* <Counter target={12147} duration={2000} />
      <Counter target={9583} duration={2000} />
      <Counter target={5345} duration={2000} />
      <Counter target={14344} duration={2000} /> */}
    </div>
  );
}
