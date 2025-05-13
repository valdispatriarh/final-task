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
    "lint": "eslint . --ext .ts",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "prepare": "husky",
    "format": "prettier --check .",
    "test": "jest"