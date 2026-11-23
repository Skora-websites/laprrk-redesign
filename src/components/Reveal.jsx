import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.04 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-visible={visible ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
