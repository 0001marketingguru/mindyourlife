---
name: animation and motion
description: Elite mobile interaction skill using Framer Motion. Built on zero-based first principles: decoupling pointer/touch paradigms, enforcing interruptible spring physics, micro-haptics, and GPU-only layout stability. Teaches how to build fluid, high-converting mobile interfaces that feel like native iOS/Android applications rather than web pages.
---

# 📱 Cinematic Mobile Motion: The Elite Standard

Most web animations fail because they treat a mobile phone like a small desktop monitor. 

**Zero-Based First Principle:** A desktop is a *pointer-driven environment* (indirect manipulation, hover states, wide field of view). A mobile device is a *tactile, gesture-driven environment* (direct manipulation, zero hover, hyper-focused field of view). 

To achieve an "Elite" native-app feel on the web, you must completely decouple the motion architecture between these two paradigms.

---

## 1. The 4 Pillars of Elite Mobile Motion

### I. Absolute Interruptibility
An animation must **never** lock the user out. If a user taps a card while it is scaling up, or scrolls past a section while it is revealing, the interface must instantly adopt the new input.
*   **Rule:** Never use `ease: "linear"` or fixed `duration` for layout or scale. Always use continuous `type: "spring"`. Springs preserve momentum and can be interrupted mid-flight without snapping.

### II. Tactile Truth (Micro-Haptics & Visual Weight)
When a user presses a flat piece of glass, the software must lie to them and convince them they pressed a physical object.
*   **Rule:** Every interactive element must compress on touch (`whileTap={{ scale: 0.96 }}`). 
*   **Elite Addition:** High-stakes conversion points (e.g., "Submit Payment", "Secure Seat") must trigger a micro-haptic response using the device's vibration motor (`navigator.vibrate(15)`), syncing physical feedback with the visual spring.

### III. The Cinematic Focus Stack (Scroll as State)
Because mobile lacks `hover`, the user's scroll position *is* their cursor. 
*   **Rule:** Do not use simple "enter viewport" reveals that fire once and die (`once: true`). Use **Scroll-Spy Focus**: items dynamically come into sharp focus (scale up, unblur, opacity 100%) when they hit the absolute center of the Y-axis, and dim out when they leave. The interface should feel alive whether scrolling up or down.

### IV. GPU-Only Execution (Zero Layout Thrashing)
A dropped frame destroys the illusion of physics. 
*   **Rule:** You may only animate `transform` (x, y, scale, rotate), `opacity`, and `filter` (blur). **Never** animate `height`, `width`, `top`, `left`, `margin`, or `gap`. If a container must expand (like an accordion), use Motion's `layout` prop strictly on isolated leaf nodes, or `AnimatePresence` with careful constraints.

---

## 2. The SSR-Safe Architectural Decoupling

To execute this, you must programmatically separate the desktop and mobile animation engines without causing React hydration errors.

### The Decoupler Hook
```tsx
"use client";
import { useState, useEffect } from "react";

// The foundational hook that allows us to serve different physics to different devices.
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true); // Default true for SSR safety

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}
```

---

## 3. Elite Implementation Patterns

### Pattern A: The Kinetic Scroll-Spy Card (Mobile focus, Desktop hover)
This pattern creates the "Cinematic Focus Stack". Notice the `viewport` margin: it creates a razor-thin activation band in the center of the mobile screen.

```tsx
const eliteVariants = {
  // MOBILE: Blurred/dimmed off-center, sharp in the center. Interruptible spring.
  mobileOffCenter: { 
    scale: 0.94, opacity: 0.4, filter: "blur(4px)",
    transition: { type: "spring", stiffness: 140, damping: 25 } 
  },
  mobileCenter: { 
    scale: 1, opacity: 1, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 25 } 
  },
  // DESKTOP: Clean baseline, hover-driven elevation.
  desktopRest: { scale: 1, opacity: 1, filter: "blur(0px)" },
  desktopHover: { scale: 1.02, y: -4, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

export function EliteCard({ children }) {
  const isDesktop = useIsDesktop();
  
  return (
    <motion.div
      variants={eliteVariants}
      initial={isDesktop ? "desktopRest" : "mobileOffCenter"}
      animate={isDesktop ? "desktopRest" : undefined}
      // MOBILE SCROLL LOGIC
      whileInView={isDesktop ? undefined : "mobileCenter"}
      viewport={{ once: false, margin: "-40% 0px -40% 0px" }} // The "Center Screen" hit-box
      // DESKTOP HOVER LOGIC
      whileHover={isDesktop ? "desktopHover" : undefined}
      // UNIVERSAL TACTILE FEEDBACK
      whileTap={{ scale: isDesktop ? 0.98 : 0.95 }} // Deeper compression on mobile touch
    >
      {children}
    </motion.div>
  );
}
```

### Pattern B: The High-Stakes Conversion CTA (with Haptics)
For the most important button on the page. It reacts instantly to touch, provides physical haptic feedback, and changes state.

```tsx
"use client";
import { motion } from "framer-motion";

export function ConversionButton({ label, onClick }) {
  const handleTap = () => {
    // 1. Trigger micro-haptic physical feedback (supported on Android/some iOS)
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(15); // 15ms sharp click
    }
    // 2. Execute business logic
    onClick();
  };

  return (
    <motion.button
      onClick={handleTap}
      // The physical depression
      whileTap={{ scale: 0.94, filter: "brightness(0.9)" }}
      // The desktop magnetic hover
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }} // Extremely tight spring for UI components
      className="bg-primary-action text-white px-8 py-4 font-bold uppercase tracking-wide"
    >
      {label}
    </motion.button>
  );
}
```

### Pattern C: Velocity-Driven Reveal (Advanced)
Instead of static delays, use the user's actual scroll velocity to determine how items enter the screen. If they scroll fast, items snap in aggressively. If they scroll slow, items drift in.

```tsx
import { useScroll, useVelocity, useSpring, useTransform, motion } from "framer-motion";

export function VelocityImage({ src }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  // Skew the image based on how fast the user is scrolling (creates a physical drag effect)
  const skew = useTransform(smoothVelocity, [-1000, 1000], [2, -2]);

  return (
    <motion.img 
      src={src} 
      style={{ skewY: skew }} 
      className="w-full origin-bottom" 
    />
  );
}
```

### Pattern D: Gesture-Native Dismissal (Drag)
Native mobile apps rarely use "X" buttons to close things; they use swipe-down gestures. Mimic this for modals or fullscreen menus.

```tsx
<motion.div
  drag="y"
  dragConstraints={{ top: 0, bottom: 0 }} // Snap back if they don't drag far enough
  dragElastic={0.2} // Physical resistance
  onDragEnd={(event, info) => {
    if (info.offset.y > 100) { // If dragged down > 100px
      closeModal();
    }
  }}
>
  Modal Content
</motion.div>
```

---

## 4. The Elite Hard Rules

Before committing any mobile motion code, check this list:

1. **The `ease` Ban:** Is there an `ease: "linear"` or `ease: "easeOut"` governing a layout scale or translation? Change it to `type: "spring"`.
2. **The Hydration Check:** Are you conditionally rendering `isDesktop ? <A/> : <B/>` on the first paint? Don't. Always render the same DOM nodes and use the `isDesktop` boolean to switch the `variants` string.
3. **The `once` Ban:** Does your `viewport` have `once: true` on a mobile scroll-spy element? Change to `once: false`. Mobile should be a continuous playground.
4. **The `whileTap` Mandate:** Can a user touch an interactive card or button without it changing physical scale? If so, the component is broken. Add `whileTap`.
5. **The A11y Override:** Did you forget to import `useReducedMotion()`? If a user has vestibular motion sensitivity, your elite physics engine must gracefully collapse to zero. 
   ```tsx
   const shouldReduce = useReducedMotion();
   if (shouldReduce) return <StaticComponent />;
   ```
