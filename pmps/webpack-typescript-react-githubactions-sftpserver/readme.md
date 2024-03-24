# Webpack TypeScript React Project

1. [Contents](#contents)
2. [Evironment Variables](#evironment-variables)
3. [How to Use](#how-to-use)

## Contents

This pmp contains a starter TypeScript React project with Webpack along with a GitHub actions workflow that pushes HTML and compiled React code to an SFTP server.

## Environment Variables

**In GitHub repository actions secrets**
- SFTP_HOST
- SFTP_USERNAME
- SFTP_PASSWORD
- SFTP_PORT

## How to Use

1. Run ```npm install```
2. Start development mode and create a development build with ```npm run dev```
3. To run a production build, run ```npm run build```

- Builds will compile React code into dist folder where HTML files are also held
- All components and pages for development are in src folder
- Webpack configuration files are in webpack folder
- Actions to push to SFTP server will occur on push or pull request into main branch
- When referencing images sources, remember to reference them as if you were to in the HTML file directory, not the development src directory



