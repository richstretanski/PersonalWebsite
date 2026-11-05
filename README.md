# richstretanski.com

My personal website, built with React and styled as a Windows 98-style desktop. It collects my background, resume, and projects, including write-ups of my home server and network.

**Live site:** [richstretanski.com](https://www.richstretanski.com)

## Sections

| Section | Contents |
|---|---|
| About | Landing page with my background, education, and contact links |
| Homelab | Overview and architecture diagram, NAS, Pi-hole, and roadmap |
| Academic Projects | InfoSec, IT, and digital marketing coursework |
| Personal Projects | This website, MIPRDLE, and Michigan Melee community projects |
| Resume | Resume embedded from Google Drive |
| TourneyStats and MIPRDLE | Embedded web apps |

## Tech Stack

- React 19 with Create React App
- React Router 7 for client-side routing
- React Helmet Async for the document head
- Custom CSS for the retro look and layout
- GitHub Pages for hosting, with a custom domain

## How It Works

- **Windows:** each route renders a window on the desktop. Closing one navigates to `/desktop`, which shows the icons with no window open. On phones, windows open fullscreen.
- **Direct links:** GitHub Pages serves static files, so a URL like `/homelab` has no matching file. The `postbuild` script copies `index.html` to `404.html`, which lets React Router load the right page.
- **Resume:** the PDF is hosted on Google Drive and embedded, so it is not stored in this repository.

## Project Structure

```
public/            HTML template, custom domain, and static files
src/
  App.js           Routes
  components/      Navbar, Titlebar, Sidebar, Banner, Footer, Head
  pages/           One component per window
    homelab/       Homelab pages and architecture diagram
    academicprojects/
    personalprojects/
  scripts/         Taskbar clock, image popout, and titlebar actions
  styles/          Global, titlebar, and Homelab styles
```

## Deploying

```
npm run deploy
```

This builds the site and publishes the `build` folder to the `gh-pages` branch.
