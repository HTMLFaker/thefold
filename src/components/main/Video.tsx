import Navigation from '@/components/common/Navigation';
import Link from 'next/link';

export default function Video() {
  return (
    <div className="visual_video">
      <video src="/movie.mp4" autoPlay loop muted playsInline></video>
    </div>
  );
}
