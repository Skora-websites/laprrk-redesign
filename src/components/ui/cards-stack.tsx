import * as React from "react";

export interface CardStickyProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  incrementY?: number;
  incrementZ?: number;
  topOffset?: number | string;
}

export const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className = "", style, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`cards-scroll-container ${className}`}
      style={{ perspective: "1000px", position: "relative", width: "100%", ...style }}
      {...props}
    >
      {children}
    </div>
  );
});
ContainerScroll.displayName = "ContainerScroll";

export const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 28,
      incrementZ = 10,
      topOffset = "calc(var(--header-h, 72px) + 24px)",
      children,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const stickyTop =
      typeof topOffset === "number"
        ? `${topOffset + index * incrementY}px`
        : `calc(${topOffset} + ${index * incrementY}px)`;
    const zIndex = 10 + index;

    return (
      <div
        ref={ref}
        style={{
          position: "sticky",
          top: stickyTop,
          zIndex,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={`card-sticky ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardSticky.displayName = "CardSticky";

export default { ContainerScroll, CardSticky };

