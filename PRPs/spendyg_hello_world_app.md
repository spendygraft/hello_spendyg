name: "SPendyG Hello World Application - Complete React Implementation"
description: |

## Purpose
Create a modern React-based greeting application featuring card-style interface with dynamic image switching and interactive buttons. This PRP provides comprehensive context for building a production-ready React application with modern UI patterns.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use modern React patterns and CSS design principles
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Build a React application with three-person greeting system where users can switch between SPendyG, Jason, and JD profiles. Each person displays with their own image and personalized greeting message. The interface features modern card-style design with smooth interactions.

## Why
- **User Experience**: Demonstrates interactive React components with dynamic content
- **Modern UI**: Showcases contemporary card design patterns and CSS techniques
- **React Patterns**: Implements hooks, state management, and event handling
- **Image Handling**: Proper asset management and dynamic image switching

## What
A single-page React application with:
- Welcome cards displaying personalized greetings
- Profile images for each person (SPendyG, Jason, JD)
- Interactive buttons to switch between profiles
- Modern card-style UI with shadows and smooth transitions
- Responsive layout that works on different screen sizes

### Success Criteria
- [ ] Application initializes with SPendyG as default
- [ ] Clicking buttons switches between profiles dynamically
- [ ] Only one image displays at a time
- [ ] Cards have modern styling with shadows and rounded corners
- [ ] Smooth hover effects on interactive elements
- [ ] Responsive design works on mobile and desktop
- [ ] Images load properly from public directory
- [ ] All components are properly typed (if using TypeScript)

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: https://react.dev/learn
  why: Core React concepts, hooks, state management, event handling
  
- url: https://react.dev/learn/responding-to-events
  why: onClick event handling patterns and best practices
  
- url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
  why: Proper image element usage, alt text, and accessibility
  
- url: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  why: Flexbox for responsive card layouts and content centering
  
- url: https://getcssscan.com/css-box-shadow-examples
  why: Modern box shadow patterns for card depth effects
  
- url: https://moderncss.dev/expanded-use-of-box-shadow-and-border-radius/
  why: Advanced shadow and border radius techniques for modern UI
  
- url: https://www.joshwcomeau.com/css/designing-shadows/
  why: Layered shadow techniques for realistic depth
```

### Current Codebase tree
```bash
context_engineering_helloworld/
├── CLAUDE.md                      # Global rules and conventions
├── INITIAL.md                     # Feature requirements
├── PRPs/
│   ├── templates/
│   │   └── prp_base.md           # PRP template structure
│   └── spendyg_hello_world_app.md # This PRP
├── README.md                      # Project documentation
└── examples/                      # Currently empty
```

### Desired Codebase tree with files to be added
```bash
context_engineering_helloworld/
├── public/
│   ├── index.html                # HTML template
│   └── images/
│       └── pics/
│           ├── spendyg.png       # SPendyG profile image
│           ├── jason.png         # Jason profile image
│           └── jd.png            # JD profile image
├── src/
│   ├── components/
│   │   ├── GreetingCard.js       # Main greeting card component
│   │   ├── GreetingCard.css      # Card styling
│   │   ├── ButtonsCard.js        # Selection buttons component
│   │   └── ButtonsCard.css       # Button styling
│   ├── App.js                    # Main application component
│   ├── App.css                   # Global application styles
│   ├── index.js                  # Application entry point
│   └── index.css                 # Global CSS reset and base styles
├── package.json                  # Dependencies and scripts
├── README.md                     # Application documentation
└── .gitignore                    # Git ignore patterns
```

### Known Gotchas & Library Quirks
```javascript
// CRITICAL: React component names must start with capital letter
// CRITICAL: Event handlers passed to onClick should NOT be called: onClick={handler}, NOT onClick={handler()}
// CRITICAL: State updates are asynchronous - use functional updates for state dependent on previous state
// CRITICAL: Images in public folder accessed with absolute paths: "/images/pics/spendyg.png"
// CRITICAL: CSS class names in JSX use className, not class
// CRITICAL: React hooks must be called at the top level of components, not inside loops or conditions
// CRITICAL: useState returns [value, setter] - always destructure properly
// CRITICAL: Modern card shadows use layered box-shadow for realistic depth
// CRITICAL: Border radius should use consistent units (px or rem) for predictable results
// CRITICAL: Hover effects should use CSS transitions for smooth animations
```

## Implementation Blueprint

### Data models and structure

```javascript
// App.js - Main application state structure
const people = [
  {
    id: 'spendyg',
    name: 'SPendyG',
    displayName: 'SPendyG',
    image: '/images/pics/spendyg.png',
    greeting: 'Hello SPendyG'
  },
  {
    id: 'jason',
    name: 'Jason',
    displayName: 'Jason', 
    image: '/images/pics/jason.png',
    greeting: 'Hello Jason'
  },
  {
    id: 'jd',
    name: 'JD',
    displayName: 'JD',
    image: '/images/pics/jd.png',
    greeting: 'Hello JD'
  }
];

// State structure
const [currentPerson, setCurrentPerson] = useState('spendyg');
```

### List of tasks to be completed in order

```yaml
Task 1: Project Setup and Structure
CREATE package.json:
  - PATTERN: Use create-react-app or Vite for modern React setup
  - Include React, React-DOM as dependencies
  - Add necessary scripts for development and build

CREATE public/index.html:
  - PATTERN: Standard HTML5 template with React root div
  - Include proper meta tags for responsive design
  - Add title and favicon

CREATE src/index.js:
  - PATTERN: Standard React 18 entry point with createRoot
  - Import and render App component
  - Include basic error handling

Task 2: Image Assets Setup
CREATE public/images/pics/ directory:
  - Add placeholder images for spendyg.png, jason.png, jd.png
  - ENSURE images are optimized for web (< 500KB each)
  - Use consistent dimensions (recommended: 200x200px)

Task 3: Core Application Structure
CREATE src/App.js:
  - PATTERN: Functional component with useState hook
  - Implement state for currentPerson
  - Include people data array
  - Handle person switching logic

CREATE src/App.css:
  - PATTERN: Global styles and layout
  - Set up flexbox container for card layout
  - Include CSS reset and base typography

Task 4: Greeting Card Component
CREATE src/components/GreetingCard.js:
  - PATTERN: Functional component receiving props
  - Display current person's name and image
  - Handle image loading states
  - Include proper accessibility attributes

CREATE src/components/GreetingCard.css:
  - PATTERN: Modern card styling with layered shadows
  - Use box-shadow: 0 4px 8px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)
  - Border radius: 12px for modern appearance
  - Responsive image sizing

Task 5: Button Selection Component
CREATE src/components/ButtonsCard.js:
  - PATTERN: Functional component with onClick handlers
  - Generate buttons dynamically from people array
  - Show buttons for people OTHER than current selection
  - Include hover states and active states

CREATE src/components/ButtonsCard.css:
  - PATTERN: Modern button styling with transitions
  - Use subtle shadows and hover effects
  - Include button states (normal, hover, active)
  - Responsive button layout

Task 6: Styling and Polish
UPDATE all CSS files:
  - PATTERN: Consistent spacing using CSS custom properties
  - Add smooth transitions for all interactive elements
  - Include responsive breakpoints for mobile/desktop
  - Use modern color palette with good contrast

Task 7: Testing and Validation
CREATE basic functionality tests:
  - Test default state initialization
  - Test button click functionality
  - Test image switching
  - Verify accessibility attributes
```

### Per task pseudocode

```javascript
// Task 3: App.js Core Structure
import React, { useState } from 'react';
import GreetingCard from './components/GreetingCard';
import ButtonsCard from './components/ButtonsCard';
import './App.css';

function App() {
  // PATTERN: Define data structure for people
  const people = [
    // ... people data with id, name, image, greeting
  ];
  
  // PATTERN: State management with useState
  const [currentPerson, setCurrentPerson] = useState('spendyg');
  
  // PATTERN: Derived state - find current person object
  const currentPersonData = people.find(p => p.id === currentPerson);
  
  // PATTERN: Event handler for person switching
  const handlePersonChange = (personId) => {
    setCurrentPerson(personId);
  };
  
  return (
    <div className="app">
      <div className="card-container">
        <GreetingCard person={currentPersonData} />
        <ButtonsCard 
          people={people} 
          currentPerson={currentPerson} 
          onPersonChange={handlePersonChange} 
        />
      </div>
    </div>
  );
}

// Task 4: GreetingCard Component
function GreetingCard({ person }) {
  // PATTERN: Loading state for images
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="greeting-card">
      <h2 className="greeting-text">{person.greeting}</h2>
      <div className="image-container">
        <img 
          src={person.image}
          alt={`${person.name}'s profile`}
          className={`person-image ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
}

// Task 5: ButtonsCard Component
function ButtonsCard({ people, currentPerson, onPersonChange }) {
  // PATTERN: Filter out current person from button options
  const otherPeople = people.filter(p => p.id !== currentPerson);
  
  return (
    <div className="buttons-card">
      {otherPeople.map(person => (
        <button
          key={person.id}
          className="person-button"
          onClick={() => onPersonChange(person.id)}
        >
          {person.greeting}
        </button>
      ))}
    </div>
  );
}
```

### Integration Points
```yaml
IMAGE_ASSETS:
  - location: public/images/pics/
  - naming: spendyg.png, jason.png, jd.png
  - optimization: WebP format with PNG fallback
  - dimensions: 200x200px consistent sizing

CSS_ARCHITECTURE:
  - custom properties: --card-shadow, --card-radius, --primary-color
  - responsive: Mobile-first approach with min-width breakpoints
  - accessibility: Focus states and high contrast support

REACT_PATTERNS:
  - hooks: useState for state management
  - props: Component communication pattern
  - events: onClick handlers with proper event handling
```

## Validation Loop

### Level 1: Syntax & Style
```bash
# Run these FIRST - fix any errors before proceeding
npm run lint                        # ESLint checking
npm run build                       # Build verification
npm start                          # Development server check

# Expected: No errors, clean build, server starts on port 3000
```

### Level 2: Functional Testing
```javascript
// Manual testing checklist:
// 1. Application loads with SPendyG as default
// 2. Image displays correctly
// 3. Buttons show "Hello Jason" and "Hello JD"
// 4. Clicking Jason switches to Jason's image and shows "Hello Scott", "Hello JD"
// 5. Clicking JD switches to JD's image and shows "Hello Jason", "Hello Scott"
// 6. All transitions are smooth
// 7. Images load without layout shift
// 8. Responsive design works on mobile/desktop
```

```bash
# Browser testing:
# Open http://localhost:3000
# Test all three person switches
# Verify image loading and display
# Check console for errors
# Test responsive behavior
```

### Level 3: Accessibility & Performance
```bash
# Accessibility check:
# 1. Images have proper alt attributes
# 2. Buttons have focus states
# 3. Color contrast meets WCAG standards
# 4. Keyboard navigation works

# Performance check:
# 1. Images are optimized (< 500KB each)
# 2. No unnecessary re-renders
# 3. Smooth animations (60fps)
# 4. Fast initial load time
```

## Final Validation Checklist
- [ ] Application builds without errors: `npm run build`
- [ ] Development server starts: `npm start`
- [ ] All three person profiles switch correctly
- [ ] Images load from public directory
- [ ] Modern card styling with shadows and border radius
- [ ] Buttons show correct options (exclude current person)
- [ ] Smooth hover effects on buttons
- [ ] Responsive design works on different screen sizes
- [ ] No console errors in browser
- [ ] Images have proper alt attributes
- [ ] Focus states work for keyboard navigation

---

## Anti-Patterns to Avoid
- ❌ Don't use class components - use functional components with hooks
- ❌ Don't mutate state directly - always use setter functions
- ❌ Don't put images in src folder - use public folder for static assets
- ❌ Don't use inline styles - use CSS classes and modules
- ❌ Don't forget accessibility attributes like alt text
- ❌ Don't use complex state management (Redux) for simple state
- ❌ Don't skip responsive design considerations
- ❌ Don't use onClick={handler()} - use onClick={handler}

## Confidence Score: 9/10

High confidence due to:
- Clear React patterns and modern approaches
- Comprehensive CSS design guidance
- Well-defined component structure
- Explicit validation steps
- Detailed implementation blueprint

Minor uncertainty on specific image assets and exact visual styling preferences, but guidelines provide strong direction for creating a production-ready application.