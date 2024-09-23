This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Quick arborescence understanding

The project is organized in the following way:

1. Node Modules
   Contains all the modules installed with npm install.

2. Public
   Contains the index.html file. This file is the entry point of the project. It contains the root div of the where the react app is mounted.

3. Pages
   Contains all the pages of the website.

4. Components
   Contains all the components of the project.

5. Styles
   Contains all SASS global styling files.

## Getting Started

First, install the dependencies:

```bash
npm i
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Export to static

You can export your Next.js app to static HTML, which can be run standalone without the need of a Node.js server.

First, kill your development server if it's running

```bash
Ctrl + C
```

Then, run the build command:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static files can be found in the `out` folder and directly uploaded to your web host.
