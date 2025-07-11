# BetterWorld Webinar Landing Page

This project is a pixel-perfect, responsive landing page built with **Astro**, **Vue 3**, **Tailwind CSS**, and integrated with a **Strapi** CMS backend. It is based on Figma designs for both desktop and mobile, and demonstrates best practices for component-driven development, content management, and modern frontend tooling.

---

## 🚀 Features

- **Astro** for fast static site generation and server-side rendering
- **Vue 3** components for interactive and reusable UI
- **Tailwind CSS** for utility-first, responsive styling
- **Strapi CMS** integration for dynamic content (Webinar, Speaker, Testimonials)
- Pixel-perfect implementation based on Figma designs
- Modular, reusable components (Hero, Speaker, Testimonials, Footer, etc.)
- Rich text rendering with support for underline and bold from Strapi

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies

```sh
yarn install
```

### 3. Configure environment variables

Create a `.env` file in the project root with the following:

```
STRAPI_URL=<your-strapi-api-url>
STRAPI_API_TOKEN=<your-strapi-api-token>
```

### 4. Run the development server

```sh
yarn dev
```

The site will be available at [http://localhost:4321](http://localhost:4321)

### 5. Run the Strapi instance

Please go inside the `src/server` directory, and run the following command:

```sh
yarn develop
```

The local Strapi instance will be running at [http://localhost:1337](http://localhost:1337)

You can go to the `/admin` subdomain to manage the content for the layout.

---

## 📦 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Vue components (HeroSection, SpeakerSection, etc.)
│   ├── layouts/          # Astro layout files
│   ├── pages/            # Astro entry points (index.astro)
│   ├── styles/           # Tailwind/global CSS
│   ├── server/           # The Strapi instance service
│   └── lib/              # Utility functions (e.g., Strapi data fetch)
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── yarn.lock
```

---

## 📝 Content Management (Strapi)

- **Webinar**: Title, Description (rich text), Date, Time, Badge
- **Speaker**: Name, Bio, Photo
- **Testimonial**: Quote, Author name, Order (for color cycling)
- **Footer/Header**: Static content (not managed by Strapi)

### Rich Text

- The `RichText` Vue component supports Strapi's rich text format, including underline and bold text.

---

## ⚡ Noteworthy Decisions & Assumptions

- **Component-Driven**: All major sections are Vue components for reusability and maintainability.
- **Strapi Integration**: Only dynamic content (webinar, speaker, testimonials) is fetched from Strapi. Header and Footer are static by design.
- **Color Cycling**: Testimonials use a color map based on their `Order` field for background and icon colors. Defaults are provided for out-of-range values.
- **Rich Text**: The `RichText` component parses Strapi's JSON format and supports underline and bold.
- **Pixel-Perfect**: Layout and spacing are based on Figma, with Tailwind for rapid iteration.
- **Assumption**: Strapi endpoints return single objects for webinar and speaker, and an array for testimonials.
- **Simplification**: No authentication or admin UI is included; this is a public-facing landing page.

---

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Strapi Documentation](https://docs.strapi.io/)
