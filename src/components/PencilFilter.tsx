import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types"

const PencilFilter: QuartzComponent = () => {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <filter id="pencil" x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.4 0.9" numOctaves={2} seed={3} result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.6 -0.35" result="grainA" />
          <feComposite in="SourceGraphic" in2="grainA" operator="in" result="tex1" />
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves={2} seed={9} result="wob" />
          <feDisplacementMap in="tex1" in2="wob" scale={2.5} />
        </filter>
      </defs>
    </svg>
  )
}

export default (() => PencilFilter) satisfies QuartzComponentConstructor