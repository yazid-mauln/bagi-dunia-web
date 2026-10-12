'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal — reusable scroll animation wrapper.
 *
 * Props:
 *   children  — content to animate
 *   delay     — stagger delay in seconds (default 0)
 *   direction — 'up' | 'down' | 'left' | 'right' | 'none' (default 'up')
 *   distance  — translate distance in px (default 32)
 *   duration  — animation duration in seconds (default 0.65)
 *   once      — animate only once (default true)
 *   className — forwarded className
 */
export default function ScrollReveal({
  children,
  delay    = 0,
  direction = 'up',
  distance  = 32,
  duration  = 0.65,
  once      = true,
  className = '',
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once, margin: '-60px 0px' });

  const axes = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { y: 0, x: distance },
    right: { y: 0, x: -distance },
    none:  { y: 0, x: 0 },
  };

  const initial = { opacity: 0, ...axes[direction] };
  const animate = inView
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom spring-like ease — smooth, not bouncy
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealGroup — wraps multiple children with staggered reveals.
 *
 * Props:
 *   children  — array of child elements
 *   stagger   — delay increment per child (default 0.08)
 *   delay     — base delay before first child (default 0)
 *   direction — same as ScrollReveal
 *   className — forwarded to the wrapper div
 */
export function ScrollRevealGroup({
  children,
  stagger   = 0.08,
  delay     = 0,
  direction = 'up',
  className = '',
}) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <ScrollReveal key={i} delay={delay + i * stagger} direction={direction}>
              {child}
            </ScrollReveal>
          ))
        : <ScrollReveal delay={delay} direction={direction}>{children}</ScrollReveal>
      }
    </div>
  );
}
