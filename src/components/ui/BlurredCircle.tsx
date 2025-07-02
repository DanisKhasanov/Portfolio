type BlurredCircleProps = {
  color: string;
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: string;
  delay?: string;
  className?: string;
};

const BlurredCircle = ({
  color,
  size,
  top,
  left,
  right,
  bottom,
  opacity = "0.2",
  delay = "0s",
  className,
}: BlurredCircleProps) => {
  return (
    <div
      className={`blur-circle absolute animate-lively-blob ${className}`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        opacity,
        animationDelay: delay,
      }}
      aria-hidden="true"
    />
  );
};

export default BlurredCircle;
