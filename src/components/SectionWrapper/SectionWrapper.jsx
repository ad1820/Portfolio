// src/components/SectionWrapper.jsx
import { useRef, useState, useEffect } from "react";

const SectionWrapper = ({ children, id }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        inView
          ? "opacity-100 grayscale-0 blur-0"
          : "opacity-40 grayscale blur-[1px]"
      }`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
