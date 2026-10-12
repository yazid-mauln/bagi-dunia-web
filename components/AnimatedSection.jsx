'use client';

/**
 * AnimatedSection — lightweight scroll-reveal wrapper for use in any page.
 *
 * Because Next.js App Router pages are Server Components by default, we cannot
 * directly call `useInView` in page.js. This 'use client' component bridges the
 * gap: drop it around any JSX block and it will fade/slide into view as the user
 * scrolls to it.
 *
 * Props:
 *   children   — content to animate
 *   delay      — delay in seconds before the animation starts (default 0)
 *   direction  — 'up' | 'down' | 'left' | 'right' | 'none' (default 'up')
 *   distance   — translate distance in px (default 36)
 *   duration   — animation duration in seconds (default 0.7)
 *   once       — animate only the first time (default true)
 *   className  — extra class names forwarded to the wrapper element
 *   as         — HTML tag to render as (default 'div')
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1]; // smooth spring-like easing

export default function AnimatedSection({
  children,
  delay     = 0,
  direction = 'up',
  distance  = 36,
  duration  = 0.7,
  once      = true,
  className = '',
  as        = 'div',
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once, margin: '-72px 0px' });

  const axes = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { y: 0, x: distance },
    right: { y: 0, x: -distance },
    none:  { y: 0, x: 0 },
  };

  const initial = { opacity: 0, ...axes[direction] };
  const animate = inView ? { opacity: 1, x: 0, y: 0 } : initial;

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * AnimatedGroup — staggered reveal for a list of sibling items.
 *
 * Props:
 *   children  — array or single child
 *   stagger   — delay increment per child in seconds (default 0.1)
 *   delay     — base delay before the first child (default 0)
 *   direction — same as AnimatedSection
 *   className — class for the outer wrapper div
 *   itemClass — class forwarded to each AnimatedSection wrapper
 */
export function AnimatedGroup({
  children,
  stagger   = 0.1,
  delay     = 0,
  direction = 'up',
  className = '',
  itemClass = '',
}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {items.map((child, i) => (
        <AnimatedSection
          key={i}
          delay={delay + i * stagger}
          direction={direction}
          className={itemClass}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}
