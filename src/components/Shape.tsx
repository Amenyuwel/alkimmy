export default function Circle({
  size = 780,
  title = "Decorative shape",
  imageSrc,
  padding = 40,
  imageScale = 1.2,
  className = "",
}: {
  size?: number;
  title?: string;
  imageSrc?: string;
  padding?: number;
  imageScale?: number;
  className?: string;
}) {
  const r = size / 2;
  const innerRadius = r - padding;
  const imgSize = size - padding * 2;

  const spokeCount = 12;
  const ringRatios = [0.75, 0.5, 0.25];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-labelledby="shape-title"
    >
      <title id="shape-title">{title}</title>

      <defs>
        <clipPath id="image-clip">
          <circle cx={r} cy={r} r={innerRadius} />
        </clipPath>
        <clipPath id="pattern-clip">
          <circle cx={r} cy={r} r={r} />
        </clipPath>
      </defs>

      {/* Background circle */}
      <circle cx={r} cy={r} r={r} className="fill-(--orb-3)" />

      {/* Radial grid: spokes + rings */}
      <g clipPath="url(#pattern-clip)" opacity="0.4">
        {Array.from({ length: spokeCount }, (_, i) => {
          const angle = (i * Math.PI) / (spokeCount / 2);
          return (
            <line
              key={i}
              x1={r}
              y1={r}
              x2={r + Math.cos(angle) * r}
              y2={r + Math.sin(angle) * r}
              stroke="var(--orb-3-accent)"
              strokeWidth="1"
            />
          );
        })}
        {ringRatios.map((ratio, i) => (
          <circle
            key={i}
            cx={r}
            cy={r}
            r={ratio * r}
            fill="none"
            stroke="var(--orb-3-accent)"
            strokeWidth="1"
          />
        ))}
      </g>

      {imageSrc && (
        <image
          href={imageSrc}
          x={padding}
          y={padding}
          width={imgSize}
          height={imgSize}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#image-clip)"
          transform={`
            rotate(270 ${r} ${r})
            scale(${imageScale})
            translate(${(size * (1 - imageScale)) / (2 * imageScale)}
                      ${(size * (1 - imageScale)) / (2 * imageScale)})
          `}
        />
      )}
    </svg>
  );
}