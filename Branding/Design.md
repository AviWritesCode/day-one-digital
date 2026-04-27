# Day One Digital - Design System for Stitch

This document defines the core visual language and design principles for **Day One Digital**, a high-end, ROI-focused digital marketing agency. Use these instructions to ensure all generated screens align with the premium brand identity.

## 1. Brand Identity & Tone
*   **Tone**: Authoritative, ROI-focused, High-end, Urgent.
*   **Avoid**: Playful aesthetics, "startup-y" vibes, or generic marketing jargon.
*   **Philosophy**: Every element should feel intentional, expensive, and geared towards conversion.

## 2. Color Palette
| Token | HEX Code | Usage |
| :--- | :--- | :--- |
| **Primary Background** | `#192945` | Main sections, deep space background. |
| **Secondary (Deep Blue)**| `#595da1` | Support sections, depth layers. |
| **Accent (Amethyst)** | `#a981b0` | Sub-headlines, icon accents, secondary CTAs. |
| **CTA (Coral Pink)** | `#e8a3a2` | Primary buttons, critical conversion points. |
| **Glass/Borders** | `rgba(255,255,255,0.15)` | Transparent layers and thin container borders. |

### Gradients
*   **Brand Gradient**: `linear-gradient(135deg, #192945 0%, #1f3560 50%, #595da1 100%)`
*   **Hero Depth**: `linear-gradient(180deg, #192945 0%, #0f1c30 100%)`
*   **CTA Glow**: `linear-gradient(135deg, #a981b0 0%, #e8a3a2 100%)`

## 3. Typography
*   **Headings**: `Playfair Display` (Serif). Use for high-impact titles. Elegant and authoritative.
*   **Body Text**: `Inter` (Sans-Serif). Clean, highly legible, modern.
*   **Letter Spacing**: `-0.02em` (Tightened tracking for a professional look).
*   **Line Height**: `1.6` (Spacious and breathable).

## 4. UI Style & Components
*   **Background**: Matte dark surfaces with a subtle **3% noise** texture for a tactile feel.
*   **Container Style**: "Liquid Glass" (Glassmorphism). 
    *   `backdrop-filter: blur(20px);`
    *   `background: rgba(255, 255, 255, 0.04);`
    *   `border: 1px solid rgba(255, 255, 255, 0.15);`
*   **Shadows**: Soft, multi-layered "ambient" shadows. Avoid harsh, singular black dropshadows.
*   **Shapes**: Use sophisticated corner roundness (e.g., 16px to 24px for cards).

## 5. Iconography
*   **Style**: Outline-only (Light strokes, 1px - 1.5px).
*   **Coloring**: Use `#a981b0` (Accent) or `#e8a3a2` (CTA) for icon strokes. Never solid fills.

## 6. Motion & Interaction
*   **Entrance**: All sections should use **staggered fade-up** entrance animations.
*   **Buttons**: Implementation of "Magnetic" button effects on hover.
*   **Hover States**: Subtle 3D tilt effects for glass cards and glow expansion for CTA buttons.
*   **Transitions**: Smooth `transform` and `opacity` transitions only. No layout shifts.

## 7. Strategic Layout
*   **Hero Sections**: Must feature a clear "Revenue Leak" or "Audit" input as the primary focal point.
*   **Hierarchy**: Use scale and high-contrast typography to guide the eye toward the CTA.
*   **Density**: Prefer high-white-space (dark-space) layouts. Do not clutter the interface.
