interface HeroProps {
  title?: string;
  subtitle?: string;
}
export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <>
      <canvas id="intro-canvas"></canvas>
      <div className="title-container">
        <div className="canvas-img"></div>
        <div className="canvas-text">
          <h1 className="canvas-title">{title}</h1>
          <h1 className="canvas-subtitle">{subtitle}</h1>
        </div>
      </div>
    </>
  );
}
