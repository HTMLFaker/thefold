'use client';

import React from 'react';

const DIRECTION = {
  CURRENT: 'CURRENT',
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
};

interface Props {
  children: React.ReactNode;
  isArrow: boolean;
  isAutoRolling: boolean;
  isPaginate: boolean;
  isBounce: boolean;
  rollingSeconds: number;
  duration: number;
  moveRange: number;
  sensitivity: number;
}

interface State {
  beforeIndex: number;
  currentIndex: number;
  afterIndex: number;
  movePercent: number;
  isActive: boolean;
  isDimmed: boolean;
  isTouchDevice: boolean;
  usePossible: boolean;
  startX: number;
  startTime: number;
  width: number;
}

export default class Swiper extends React.Component<Props, State> {
  swiperRef: React.RefObject<HTMLDivElement | null>;
  lastIndex: number;
  state: State;
  timer: ReturnType<typeof setInterval> | null;

  constructor(props: Props) {
    super(props);
    this.swiperRef = React.createRef();
    this.lastIndex = Array.isArray(this.props.children) ? this.props.children.length - 1 : 0;
    this.timer = null;
    this.state = {
      beforeIndex: 0,
      currentIndex: 0,
      afterIndex: 0,
      movePercent: 0,
      isActive: false,
      isDimmed: false,
      isTouchDevice: false,
      usePossible: true,
      startX: 0,
      startTime: 0,
      width: 0,
    };
  }

  componentDidMount() {
    if (Array.isArray(this.props.children)) {
      this.setIndex(0);
      document.addEventListener('touchmove', this.moveTouchEvent, false);
      document.addEventListener('touchend', this.endTouchEvent, false);
      document.addEventListener('mousemove', this.moveMouseEvent, false);
      document.addEventListener('mouseup', this.endMouseEvent, false);
      this.startAutoRolling();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.children !== this.props.children) {
      this.lastIndex = Array.isArray(this.props.children) ? this.props.children.length - 1 : 0;
      this.setIndex(0);
    }
  }

  componentWillUnmount() {
    if (Array.isArray(this.props.children)) {
      document.removeEventListener('touchmove', this.moveTouchEvent, false);
      document.removeEventListener('touchend', this.endTouchEvent, false);
      document.removeEventListener('mousemove', this.moveMouseEvent, false);
      document.removeEventListener('mouseup', this.endMouseEvent, false);
      this.stopAutoRolling();
    }
  }

  onTouchStartEvent = (e: React.TouchEvent<HTMLDivElement> & React.MouseEvent<HTMLDivElement>) => {
    this.stopAutoRolling();
    this.setState({
      isTouchDevice: true,
      startX: e.changedTouches[0] ? e.changedTouches[0].pageX : e.pageX,
    });
    this.startEvent();
  };

  onMouseDownEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    this.setState({
      isTouchDevice: false,
      startX: e.pageX,
    });
    this.startEvent();
  };

  setIndex = (idx: number) => {
    let currentIndex = idx;
    if (idx < 0) {
      currentIndex = this.lastIndex;
    } else if (idx > this.lastIndex) {
      currentIndex = 0;
    }
    this.setState({
      currentIndex,
      beforeIndex: currentIndex === 0 ? this.lastIndex : currentIndex - 1,
      afterIndex: currentIndex === this.lastIndex ? 0 : currentIndex + 1,
    });
  };

  startEvent = () => {
    const { isActive, usePossible } = this.state;
    if (!isActive && usePossible) {
      this.setState({
        startTime: new Date().getTime(),
        width: (this.swiperRef.current && this.swiperRef.current.offsetWidth) || 0,
        isActive: true,
        isDimmed: false,
        usePossible: false,
      });
    }
  };

  moveMouseEvent = (e: MouseEvent) => {
    const { isActive, width, startX } = this.state;
    if (isActive) {
      const movePercent = ((e.pageX / width) * 100 - (startX / width) * 100) * this.props.moveRange;
      if (Math.abs(movePercent) > 1 && e.cancelable) {
        e.preventDefault();
        this.setState({
          isDimmed: true,
        });
      }
      this.setState({
        movePercent,
      });
    }
  };

  moveTouchEvent = (e: TouchEvent) => {
    const { isActive, width, startX } = this.state;
    if (isActive) {
      const movePercent =
        ((e.changedTouches[0].pageX / width) * 100 - (startX / width) * 100) * this.props.moveRange;
      if (Math.abs(movePercent) > 1 && e.cancelable) {
        e.preventDefault();
        this.setState({
          isDimmed: true,
        });
      }
      this.setState({
        movePercent,
      });
    }
  };

  moveByDirection = (direction: string) => {
    const { currentIndex } = this.state;
    let currentIdx = currentIndex;
    let movePercent = 0;
    if (direction === DIRECTION.PREVIOUS) {
      if (!this.props.isBounce || (this.props.isBounce && currentIdx !== 0)) {
        currentIdx--;
        movePercent = 100;
      }
    } else if (direction === DIRECTION.NEXT) {
      if (!this.props.isBounce || (this.props.isBounce && currentIndex !== this.lastIndex)) {
        currentIdx++;
        movePercent = -100;
      }
    }
    this.animationStartByMovePercent(movePercent);
    this.anmationEndByCurrentIdx(currentIdx);
  };

  endMouseEvent = (e: MouseEvent) => {
    this.endEventAction(e.pageX);
  };

  endTouchEvent = (e: TouchEvent) => {
    this.endEventAction(e.changedTouches[0].pageX);
  };

  endEventAction = (endX: number) => {
    const { isActive, startTime, startX } = this.state;
    if (isActive) {
      if (Math.abs(endX - startX) / (new Date().getTime() - startTime) > this.props.sensitivity) {
        if (startX > endX) {
          this.moveByDirection(DIRECTION.NEXT);
        } else {
          this.moveByDirection(DIRECTION.PREVIOUS);
        }
      } else {
        this.moveByDirection(DIRECTION.CURRENT);
      }
      if (this.state.isTouchDevice) {
        this.startAutoRolling();
      }
    }
  };

  animationStartByMovePercent = (movePercent: number) => {
    this.setState({
      isActive: false,
      usePossible: false,
      movePercent,
    });
  };

  anmationEndByCurrentIdx = (idx: number) => {
    setTimeout(() => {
      this.setIndex(idx);
      this.setState({
        movePercent: 0,
        usePossible: true,
        isDimmed: false,
      });
    }, this.props.duration * 1000);
  };

  startAutoRolling = () => {
    if (this.props.isAutoRolling && !this.timer) {
      this.timer = setInterval(() => {
        this.animationStartByMovePercent(-100);
        this.anmationEndByCurrentIdx(this.state.currentIndex + 1);
      }, this.props.rollingSeconds * 1000);
    }
  };

  stopAutoRolling = () => {
    if (this.props.isAutoRolling && this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  renderArrow = () => {
    const { currentIndex } = this.state;
    return (
      <React.Fragment>
        {this.props.isBounce && currentIndex === 0 ? (
          <div />
        ) : (
          <a
            className="carousel-control-prev w-5"
            style={{ zIndex: 10, cursor: 'pointer' }}
            onClick={() => {
              this.moveByDirection(DIRECTION.PREVIOUS);
            }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
        )}
        {this.props.isBounce && currentIndex === this.lastIndex ? (
          <div />
        ) : (
          <a
            className="carousel-control-next w-5"
            style={{ zIndex: 10, cursor: 'pointer' }}
            onClick={() => {
              this.moveByDirection(DIRECTION.NEXT);
            }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        )}
      </React.Fragment>
    );
  };

  renderPaginate() {
    const pageArray = [];
    for (let i = 0; i <= this.lastIndex; i++) {
      pageArray.push(this.renderPaginateItem(i));
    }
    return <div className="_codemixia_swiper_paginate">{pageArray}</div>;
  }

  renderPaginateItem(idx: number) {
    const isOn = idx === this.state.currentIndex;

    return (
      <span
        className={`item${isOn ? ' on' : ''}`}
        key={idx}
        onClick={() => {
          this.setIndex(idx);
        }}
      />
    );
  }

  render() {
    if (Array.isArray(this.props.children)) {
      const {
        beforeIndex,
        currentIndex,
        afterIndex,
        movePercent,
        isActive,
        isDimmed,
        usePossible,
      } = this.state;
      const swiperStyle = {
        transform: `translateX(${movePercent}%) translateZ(0)`,
        transition: usePossible || isActive ? 'none' : `transform ${this.props.duration}s ease-out`,
      };
      return (
        <React.Fragment>
          <div
            className="_codemixia_swiper_wrap"
            onMouseOver={this.stopAutoRolling}
            onMouseOut={this.startAutoRolling}
            onFocus={this.stopAutoRolling}
            onBlur={this.startAutoRolling}
          >
            <div
              className="_codemixia_swiper"
              ref={this.swiperRef}
              style={swiperStyle}
              onTouchStart={this.onTouchStartEvent}
              onMouseDown={this.onMouseDownEvent}
            >
              <div className="_codemixia_swiper_item" style={{ transform: 'translateX(-100%)' }}>
                {this.props.isBounce && currentIndex === 0 ? (
                  <div />
                ) : (
                  this.props.children[beforeIndex]
                )}
              </div>
              <div className="_codemixia_swiper_item" style={{ transform: 'translateX(0)' }}>
                {this.props.children[currentIndex]}
              </div>
              <div className="_codemixia_swiper_item" style={{ transform: 'translateX(100%)' }}>
                {this.props.isBounce && currentIndex === this.lastIndex ? (
                  <div />
                ) : (
                  this.props.children[afterIndex]
                )}
              </div>
              <div
                className="_codemixia_swiper_item _codemixia_dimmed"
                style={{ zIndex: isDimmed ? 2 : 0 }}
              />
            </div>
            {this.props.isPaginate && this.lastIndex > 0 && this.renderPaginate()}
          </div>
          {this.props.isArrow && this.renderArrow()}
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}
