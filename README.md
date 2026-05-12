# Project Overview
Hey!, sri here. This is my personal portfolio, the thing I've spent time working on instead of real projects lol. I've built this with Astro.js for the frontend, alongside GSAP for animations and CSS (no tailwind css in the big 26'). I mostly tried to flex more of my front-end design skills, while trying to maintian a minimal aesthetic, since I didn't want to spend too much time on it. Hopefully you like it!

# Live Demo + Screenshot
https://sriv.me
<img width="1883" height="1047" alt="image" src="https://github.com/user-attachments/assets/c0cb1973-ac06-4172-a3e5-c356874c14a2" />

# Folder Structure
portfolio/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── *.svg
│   └── project-photos/
│       └── yfinance_project/
│           ├── banner.png
│           └── hero.png
└── src/
    ├── content.config.ts
    ├── assets/
    │   ├── fonts/
    │   ├── arrow.svg
    │   ├── nlinkedin.svg
    │   └── wave.gif
    ├── components/
    │   ├── project-display.astro
    │   └── status-badge.astro
    ├── content/
    │   └── projects/
    │       └── Yfinance_Stock_Analyzer.md
    ├── layouts/
    │   └── NavBar.astro
    ├── pages/
    │   ├── index.astro
    │   ├── contact.astro
    │   ├── projects.astro
    │   └── projects/
    │       └── [slug].astro
    └── styles/
        └── global.css


# Roadmap
In terms of furthur improvement, I'd work on the responsiveness of this design. This is because although I've added media breakpoints to it, as the projects page gets more populated this design setups is more likely to break. In addition there are still a few minor bugs (the text doesn't render consistently on slide up animation in the project page) that need fixing. I'll most likely return to revamp this site (and hopefully not go down another perfection infested doom scroll rabbit hole).


