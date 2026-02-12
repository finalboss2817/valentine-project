
export interface HeartParticle {
  id: number;
  left: number;
  size: number;
  delay: string;
  duration: string;
  color: string;
}

export interface FloatingMessageProps {
  onBack: () => void;
}
