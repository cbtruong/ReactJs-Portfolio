# Create project:
npx create-react-app portfolio-website


## install library
    npm i swiper
    npm install --save @emailjs/browser
## Deploy code
    npm install gh-pages --save-dev
    - open file package.json and add to the command below
    "homepage" : "url"
    Example:
    {
    "homepage" : "https://cbtruong.github.io/-ReactJs-Portfolio-",
    "name": "portfolio-website",
    "version": "0.1.0",
    .....
    }



    "predeploy":"npm run build"
    "deploy":"gh-pages -d build"

    npm run deploy
