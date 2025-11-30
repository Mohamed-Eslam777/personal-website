# Portfolio Design Guidelines for Mohammed Maklad

## Design Approach
Reference-based approach inspired by modern developer portfolios (Vercel, Linear, GitHub) with emphasis on clean layouts, strong typography hierarchy, and professional presentation of technical work.

## Typography System
**Primary Font**: Inter (Google Fonts) for UI elements and body text
**Accent Font**: Space Grotesk (Google Fonts) for headings and emphasis

**Hierarchy**:
- Hero Name: 4xl to 6xl, bold weight
- Section Headings: 3xl to 4xl, semibold
- Subsection Titles: xl to 2xl, medium
- Body Text: base to lg, normal weight
- Captions/Meta: sm to base, light weight

## Layout System
**Spacing Units**: Tailwind units of 4, 8, 12, 16, 20, 24 (e.g., p-4, mb-8, gap-12)
**Container**: max-w-7xl with px-4 on mobile, px-8 on tablet, px-12 on desktop
**Section Padding**: py-16 on mobile, py-20 on tablet, py-24 on desktop

## Component Structure

### Loading Screen
- Full viewport (100vh) centered layout
- 〽 logo prominently displayed at 80-120px size
- Animated fade-in/pulse effect on logo
- Progress indicator below logo
- Smooth fade-out transition to main content (1-2 seconds)

### Navigation
- Sticky header with backdrop blur effect
- Logo (〽) on left, navigation links centered or right-aligned
- Mobile: Hamburger menu with slide-in drawer
- Desktop: Horizontal menu with smooth scroll anchors
- Include "Download CV" button as primary CTA

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Profile image: 200-300px circular with subtle border/shadow
- Name display with animated typing effect for title
- Three CTAs in row: "View Projects", "Get in Touch", "Download CV"
- Stats grid below (4 columns on desktop, 2 on tablet, 1 on mobile)

### Statistics Counter Section
- 4-column grid layout (responsive: 1/2/4 columns)
- Large numbers (3xl to 4xl) with smaller labels below
- Subtle dividers between stats on desktop
- Counter animation on scroll into view

### Professional Summary
- Two-column layout on desktop (60/40 split)
- Left: Summary text with generous line height (1.7-1.8)
- Right: Quick facts (location, education, graduation)
- Single column stack on mobile

### Experience Timeline
- Vertical timeline layout with connecting line
- Each role: company name, dates, bullet points
- Icons for role types (briefcase for work, graduation cap for education)
- Staggered animation on scroll

### Projects Showcase
- Grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop
- Card design: project image on top, content below
- Image aspect ratio: 16:9 or 4:3
- Tech stack badges below description
- Two action buttons: "Live Demo" and "Code"
- Hover effect: subtle lift with shadow increase

### Technical Skills
- Category-based organization (4 main categories)
- Grid layout within each category
- Pill/badge design for each skill
- Icons from Heroicons or Font Awesome for categories
- Responsive: 2-4 badges per row on mobile, 6-8 on desktop

### Testimonials
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- Card design with quote, avatar initials, name, role
- Subtle border or background differentiation
- Equal height cards

### Contact Section
- Centered layout with heading and description
- Large email link as primary contact
- Social icons row below (LinkedIn, GitHub, WhatsApp)
- Icon size: 24-32px with proper spacing (gap-6 to gap-8)

### Footer
- Three-column layout on desktop: Logo/tagline, Quick Links, Social Media
- Single column stack on mobile
- Copyright notice centered at bottom
- Total height: py-12 to py-16

## Images
**Profile Image**: Professional headshot, circular crop, 800x800px minimum
**Project Screenshots**: 
- Nexus AI Platform: Dashboard interface screenshot, 1200x675px
- Data Dashboard: Charts and visualization interface, 1200x675px  
- Election Campaign: Homepage hero screenshot, 1200x675px
**Placement**: Hero section (profile), Projects section (screenshots)
**Large hero image**: No - using profile photo instead

## Icon Library
Use Heroicons (via CDN) for all UI icons:
- Navigation menu, external links, social media
- Skill categories, timeline markers
- Contact methods, download actions

## Animations
- Loading screen: Fade in/pulse (2-3 seconds)
- Hero typing effect: Character-by-character animation
- Scroll animations: Subtle fade-up on sections (stagger 100-150ms)
- Counter animation: Number count-up on visibility
- Card hovers: Transform translateY(-4px) with shadow transition
- Keep all animations under 300-400ms duration

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts, maximum spacing)

## Accessibility
- Semantic HTML5 elements throughout
- ARIA labels for icon-only buttons
- Focus states with visible outlines (2px solid)
- Keyboard navigation support for all interactive elements
- Alt text for all images
- Sufficient contrast ratios for all text