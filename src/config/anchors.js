// Camera anchors used by the 3D scene. Tune these to adjust camera pathing.
// These interpolate as the user scrolls through content sections
export const anchors = [
  { pos: [0, 0, 6], look: [0, 0, 0] },      // Hero start
  { pos: [2, 1.5, 5], look: [0, 0, 0] },    // Mid-scroll
  { pos: [-2, -1, 4], look: [0, 0, 0] },    // About section
  { pos: [0, -2, 3.5], look: [0, 0, 0] },   // Services transition
  { pos: [1.5, -0.5, 4.5], look: [0, 0, 0] }, // Projects view
]

export default anchors
