import type { SVGProps } from "react"

// Line-art drawings of the parts and machines we deal in. 48×48 grid, 1.75 stroke,
// currentColor — size with className (e.g. "size-10") and colour with text-*.
type IconProps = SVGProps<SVGSVGElement>

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function TrimmerHeadIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="24" cy="24" r="11" />
      <circle cx="24" cy="24" r="4" />
      <path d="M24 13v-3M24 38v-3" />
      <circle cx="35" cy="24" r="1.5" />
      <circle cx="13" cy="24" r="1.5" />
      <path d="M36.5 24c3 0 5 -1 7 -3M11.5 24c-3 0 -5 1 -7 3" />
    </Svg>
  )
}

export function BladeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M24 4 31.8 19.5 41.3 34 24 33 6.7 34 16.2 19.5Z" />
      <circle cx="24" cy="24" r="3" />
    </Svg>
  )
}

export function SawChainIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="21" width="14" height="9" rx="4.5" />
      <rect x="17" y="21" width="14" height="9" rx="4.5" />
      <rect x="31" y="21" width="14" height="9" rx="4.5" />
      <path d="M6 21l2-5h5l-1 5M20 21l2-5h5l-1 5M34 21l2-5h5l-1 5" />
    </Svg>
  )
}

export function SparkPlugIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 4h6v5h-6z" />
      <path d="M19 9h10l-1 10h-8z" />
      <path d="M16 19h16v6H16z" />
      <path d="M19 25h10v10H19zM19 28.5h10M19 32h10" />
      <path d="M24 35v6h5" />
    </Svg>
  )
}

export function BrushCutterIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="4" width="11" height="8" rx="2" />
      <path d="M12 11l25 24" />
      <path d="M18 17l6-6M22 21l-6 6" />
      <circle cx="39" cy="37" r="3" />
      <path d="M32 42a9 9 0 0 1 14-10" />
    </Svg>
  )
}

export function ChainsawIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="19" width="17" height="14" rx="3" />
      <path d="M6 19c0-6 11-6 11 0" />
      <path d="M20 22h21.5a4 4 0 0 1 0 8H20" />
      <path d="M20 19.5h21.5a6.5 6.5 0 0 1 0 13H20" strokeDasharray="2 2.5" />
    </Svg>
  )
}
