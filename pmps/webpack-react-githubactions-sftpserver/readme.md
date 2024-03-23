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
4. Builds will compile React code into dist folder where HTML files are also held
5. All components and pages for development are in src folder
6. Webpack configuration files are in webpack folder
7. Actions to push to SFTP server will occur on push or pull request into main branch



