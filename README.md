<p align="center">
  <img src="https://github.com/harshhhdev/ui-gallery/blob/master/public/Banner.png?raw=true" />
  <a href="https://ui.hxrsh.in/">
    <h2 align="center">Harsh Singh's UI Gallery</h2>
  </a>
</p> 
<p align="center">🎨 A collection of colours, gradients, typography, UI components and fun games to give you ideas and inspirations for building your own applications, UI libraries, and design systems.</p>
<p align="center">
  <a href="https://www.figma.com/file/jRYEzTsGEQmtVNVw4XXIfc/Harsh's-UI-Gallery">Branding/Design Board</a>
    ·
  <a href="https://ui.hxrsh.in/">Demo</a>
 </p>

# 🚀 Quickstart

Run the website locally

```
git clone https://github.com/harshhhdev/ui-gallery.git
```

## Setting up the development environment

```bash
cd ui-gallery

# Install deps
yarn
```

## Setting up the database

NOTE: This project uses [MongoDB Atlas](https://www.mongodb.com/atlas) with the [Prisma](https://www.prisma.io/mongodb) connector to store data.

To start with this project, go ahead and setup your [MongoDB Atlas](https://www.mongodb.com/atlas) cluster, and input your connection string under `DATABASE_URL` in `.env`. Next, generate types for your project and seed your database using the file at `prisma/seed.ts`

```zsh
# Generate the Prisma client
yarn prisma generate

# Seed our database
yarn prisma db seed
```

## Starting server

```bash
# Start the server
yarn dev
```

Server should now be running on [localhost](https://localhost:3000)

# 🔧 Tools Used

- [party.js](https://party.js.org/) (shoutout to [Ian](https://github.com/yiliansource) 🎉)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Prisma](https://prisma.io)
- [Astro](https://astro.build/)
- [React (with Astro)](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://framer.com/motion)
- [react-hot-toast](https://react-hot-toast.com/)
- [Feather Icons](https://feathericons.com/)
- [Prettier (Astro plugin)](https://github.com/withastro/prettier-plugin-astro)
- [ESLint](https://eslint.org/)
- [Figma](https://www.figma.com/)

# 🤞 Contributing

After setting up the project, and making changes:

```git
git add .
git commit -m "commit message"
git push YOUR_REPO_URL YOUR_BRANCH
```
