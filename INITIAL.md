# SPendyG Hello World Application - PRD

## FEATURE:

**SPendyG Hello World Application**

A modern React-based greeting application featuring a card-style interface that displays personalized welcome messages with corresponding profile pictures. The app shows one picture at a time with interactive buttons that allow users to switch between different people (SPendyG, Jason, and JD), dynamically updating the displayed image while maintaining a clean, contemporary design.

## EXAMPLES:

**Initial Load State (Default - SPendyG):**

┌─────────────────────────────────┐
│          GREETING CARD          │
│  ┌─────────────────────────────┐ │
│  │      Hello SPendyG          │ │
│  │                             │ │
│  │   [SPendyG's PNG Image]     │ │
│  │                             │ │
│  └─────────────────────────────┘ │
│                                 │
│     SELECTION BUTTONS CARD      │
│  ┌─────────────────────────────┐ │
│  │ [Hello Jason] [Hello JD]    │ │
│  └─────────────────────────────┘ │
└─────────────────────────────────┘

**After Jason Selection:**

┌─────────────────────────────────┐
│          GREETING CARD          │
│  ┌─────────────────────────────┐ │
│  │      Hello Jason            │ │
│  │                             │ │
│  │   [Jason's PNG Image]       │ │
│  │                             │ │
│  └─────────────────────────────┘ │
│                                 │
│     SELECTION BUTTONS CARD      │
│  ┌─────────────────────────────┐ │
│  │ [Hello Scott] [Hello JD]    │ │
│  └─────────────────────────────┘ │
└─────────────────────────────────┘

**After JD Selection:**

┌─────────────────────────────────┐
│          GREETING CARD          │
│  ┌─────────────────────────────┐ │
│  │      Hello JD               │ │
│  │                             │ │
│  │   [JD's PNG Image]          │ │
│  │                             │ │
│  └─────────────────────────────┘ │
│                                 │
│     SELECTION BUTTONS CARD      │
│  ┌─────────────────────────────┐ │
│  │ [Hello Jason] [Hello Scott] │ │
│  └─────────────────────────────┘ │
└─────────────────────────────────┘

## DOCUMENTATION:

- **React Documentation**: https://react.dev/ - For component structure, state management, and event handling
- **Create React App**: https://create-react-app.dev/ - For project setup and build configuration
- **MDN Web Docs - HTML img element**: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img - For proper image handling and accessibility
- **CSS Card Design Patterns**: https://web.dev/card-design/ - For modern card-style UI implementation
- **React onClick Events**: https://react.dev/learn/responding-to-events - For button click handling
- **CSS Flexbox Guide**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ - For responsive card layouts


## OTHER CONSIDERATIONS:

- **Image Path Handling**: Place PNG images in `public/images/pics/` folder to ensure proper loading with paths like `/images/pics/spendyg.png`

- **Modern Card Styling**: Implement CSS with:
  - Drop shadows (`box-shadow`) for depth
  - Rounded corners (`border-radius`)
  - Clean typography with good contrast
  - Proper spacing and padding
  - Subtle hover effects on buttons

- **Single Image Display**: Only one image should be visible at any time - use conditional rendering or dynamic `src` attribute changes rather than hiding/showing multiple images

- **Default State**: Component should initialize with `currentPerson` state set to "SPendyG"

- **PNG Optimization**: Ensure PNG files are optimized for web to maintain fast loading times

- **Responsive Cards**: Cards should adapt to different screen sizes while maintaining their visual hierarchy

- **Button Active States**: Add visual feedback to indicate which person is currently selected (e.g., different button styling for active state)

- **Accessibility**: Include proper ARIA labels and alt text for screen readers

- **Loading States**: Consider adding a loading placeholder for images to prevent layout shifts

- **CSS Variables**: Use CSS custom properties for consistent theming (colors, spacing, shadows) across card components