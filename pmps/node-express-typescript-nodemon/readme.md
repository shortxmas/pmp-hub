## Running the project

**This project uses TypeScript for static typing and Nodemon NPM dependency for automatic development server restarting.**
1. Install project dependencies with ``npm install`` (Make sure you're CD'd into the Frameworks-libraries directory)
2. Open two terminals both CD'd into the Problem-solving task subfolder, one terminal for nodemon server restarting and one for TypeScript automatic compiling
3. In terminal one, run ``npm run dev`` which will start the automatic TypeScript compilation upon saves to source TypeScript files
4. In terminal two, run ``npm run start`` which will start the server and restart the server upon change to compiled TypeScript source files
