## Basic tutorial

To see the website visit: [valeriankass.github.io/vu_interactive_map](http://valeriankass.github.io/VU_Interactive_map/)

master branch has latest deployment of website. production branch has source code.

Before running the server locally, you need to:
- create .env.local file and set your REACT_APP_GOOGLE_MAPS_API_KEY value.
- install dependencies
```bash
npm install
```

To run live version on your machine.
```bash
npm start
```

Before deploying you need to install gh-pages.
```bash
npm install -g gh-pages --save-dev
```

To deploy changes to github.
```bash
npm run deploy
```
