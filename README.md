description:
This project are a eCommerce shop where users can search product, add to cart or buy product etc. etc.

tech stack:
ESLint
Prettier
Git
HTML5
CSS3
JavaScript/TypeScript
Webpack
Husky

installation:
If you have project local in terminal use: 
git pull 
Next step in terminal is use:
npm install 
for install dependencies.
Next step in terminal is use:
npm run build

Deploy to GitHub Pages with `npm run deploy`

    "start": "webpack serve --open --config ./webpack.config.js --env mode=dev",
    "build": "webpack --config ./webpack.config.js --env mode=prod",
    "lint": "eslint src/**/*.{js,ts}",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "format": "prettier --check .",
    "test": "jest",
    "prepare": "git config core.hooksPath .git-hooks || echo 'Not in a git repo'"