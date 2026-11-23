"use client";

import type React from "react";
import { Link } from "../../router";

export interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  variant?: "solid" | "primary" | "light" | "outline";
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function FlowButton({
  text = "Modern Button",
  children,
  variant = "solid",
  size = "md",
  to,
  href,
  target,
  rel,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...rest
}: FlowButtonProps) {
  const content = children || text;
  const variantClass = `flow-button-${variant}`;
  const sizeClass = size === "sm" ? "flow-button-sm" : size === "lg" ? "flow-button-lg" : "";
  const combinedClass = `flow-button group ${variantClass} ${sizeClass} ${className}`.trim();

  const innerMarkup = (
    <>
      {/* Left arrow (arr-2): enters from left on hover */}
      <ArrowRight className="flow-arr-left" />

      {/* Button label with horizontal ease */}
      <span className="flow-text">{content}</span>

      {/* Central circle that expands to fill button background on hover */}
      <span className="flow-circle" aria-hidden="true" />

      {/* Right arrow (arr-1): exits to right on hover */}
      <ArrowRight className="flow-arr-right" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} onClick={onClick as any} {...(rest as any)}>
        {innerMarkup}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} rel={rel} onClick={onClick} {...(rest as any)}>
        {innerMarkup}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} disabled={disabled} {...rest}>
      {innerMarkup}
    </button>
  );
}

export default FlowButton;
