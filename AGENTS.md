# Brújula Emocional

## Overview
Single-file emotional intelligence web app in Spanish that helps users identify and understand emotions.

## Tech Stack
- Vanilla JavaScript (no build process)
- Tailwind CSS (CDN)
- Font Awesome icons (CDN)
- HTML5

## Running Locally
Open `index.html` directly in a browser. No server or build process needed.

## Key Concepts

### Emotion Data Structure
Each emotion object in `emociones` array contains:
- `nombre`: Emotion name (Spanish)
- `color`: Background color (hex)
- `text`: Text color (hex)
- `siente`: Physical sensations
- `dispara`: Triggers
- `funcion`: Biological/psychological function
- `mensaje`: Core message the emotion conveys
- `impulso`: Natural impulse (often unhelpful)
- `respuesta`: Healthy response suggestion

### Language
- **All user-facing content must be in Spanish**
- Use formal/neutral Spanish (not regional slang)
- Emotional language should be clear, compassionate, and accessible

### Design Patterns
- Mobile-first responsive design
- Cards use subtle shadows and rounded corners (`rounded-2xl`)
- Emotion cards have colored left border matching emotion color
- Modal displays detailed emotion information
- Search filters emotions in real-time

## Making Changes

### Adding/Editing Emotions
1. Locate the `emociones` array in `index.html`
2. Maintain consistent object structure
3. Use appropriate color contrast (text on color background)
4. Keep descriptions concise but meaningful

### Styling
- Use Tailwind utility classes
- Custom CSS in `<style>` tag is minimal (transitions, scrollbar hiding)
- Maintain consistent spacing/sizing patterns

### Testing Checklist
- [ ] Open in browser and verify all emotions display
- [ ] Test search functionality
- [ ] Click each emotion card to verify modal opens
- [ ] Verify modal content displays correctly
- [ ] Test mobile responsiveness (resize browser)
- [ ] Check color contrast for accessibility

## Common Tasks

**Add new emotion:**
Add object to `emociones` array with all required fields.

**Update emotion text:**
Find emotion in `emociones` array and update specific field.

**Modify layout:**
Update Tailwind classes in HTML template strings or main markup.

**Change color scheme:**
Update color values in emotion objects or Tailwind classes.
