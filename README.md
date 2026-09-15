# Xperience

Marketing site for Xperience, a web design studio for high-end clients.
Plain HTML/CSS/JS — no build step, no dependencies.

## Structure

```
xperience-site/
├── index.html        Home
├── about.html         About
├── services.html      Services & Pricing
├── portfolio.html      Portfolio / case studies
├── contact.html        Contact
├── css/
│   └── styles.css      Shared stylesheet (all pages)
└── js/
    └── main.js         Mobile nav toggle + contact form handling
```

## Running locally

No build step needed — open `index.html` directly in a browser, or serve
the folder with any static server, e.g.:

```
npx serve .
```

## Before launch — still to do

- [ ] Replace bracketed placeholders (client quote, testimonial name,
      footer email/address) with real content
- [ ] Swap the gradient portfolio panels for real photography (see
      image direction notes from the design plan)
- [ ] Wire the contact form to a real backend — it currently just shows
      a demo success message. Options: [Formspree](https://formspree.io),
      Netlify Forms, or a custom backend.
- [ ] Add a real domain + hosting (Netlify, Vercel, or GitHub Pages all
      work with zero config for a static site like this)
- [ ] Add analytics if desired (Plausible, Fathom, or GA4)

## Brand reference

- Colors: `#f6f4f0` (ground), `#1a1a18` (ink), `#8a6d3b` (accent)
- Type: Georgia (headlines) / Helvetica Neue (body, labels)
- Tagline: "Precision. Presence. Xperience."
