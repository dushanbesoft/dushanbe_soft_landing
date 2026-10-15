import React from "react";

// Reveal-on-scroll wrappers implemented with CSS scroll-driven animations
// (see `.motion-reveal` in globals.css). Content is visible in the server HTML
// and needs no JavaScript: browsers without `animation-timeline` support, or
// users with reduced motion, simply see it without the animation.

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Kept for API compatibility; scroll-driven reveals start when the element enters the viewport. */
  delay?: number;
  direction?: Direction;
  fullWidth?: boolean;
}

export function FadeIn({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delay,
  direction = "up",
  fullWidth = false,
  className = "",
  style,
  ...props
}: FadeInProps) {
  return (
    <div
      className={`motion-reveal motion-${direction} ${className}`.trim()}
      style={{ width: fullWidth ? "100%" : "auto", ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export const StaggerContainer = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    delayChildren?: number;
    staggerChildren?: number;
    className?: string;
  }
>(({ children, className = "" }, ref) => {
  // Each StaggerItem reveals as it enters the viewport, which produces the
  // staggered effect naturally while scrolling.
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

StaggerContainer.displayName = "StaggerContainer";

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`motion-reveal motion-item ${className}`.trim()}>{children}</div>;
}
