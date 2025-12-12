export default function Inquiry() {
  return (
    <div className="inquiry_wrapper">
      <div className="map_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.779175831814!2d127.18672147695133!3d37.39505423394068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca9bd71189c9d%3A0x7017e16aa1ec48d6!2z6rK96riw64-EIOq0keyjvOyLnCDqtJHrgqjslYjroZw0MzHrsojquLggMTktMTI!5e0!3m2!1sko!2skr!4v1765508087960!5m2!1sko!2skr"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map_frame"
        />
      </div>
      <div className="location_info">
        <a href="https://naver.me/xBMmZpLY" target="_blank">
          네이버 지도보기
        </a>
        <a href="https://kko.kakao.com/in9ohbiqtg" target="_blank">
          카카오 지도보기
        </a>
      </div>
    </div>
  );
}
