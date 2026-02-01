# CodeStream Live

CodeStream allows you to sync your VS Code editor with a mobile web viewer in real-time.

## Features
- **Live Sync:** Your code updates on your mobile device every time you save.
- **Syntax Highlighting:** Beautiful code colors on mobile.
- **Copy to Clipboard:** Easily copy code snippets on your phone.

## How to use
1. Run `CodeStream: Set My Sync ID` in the command palette (Ctrl+Shift+P).
   eg: Enter `dev-alpha-99` when prompted.
   You will see a notification: `CodeStream Sync ID set to: dev-alpha-99`
   This creates your private channel for syncing code

2. Sync your Code
   Open any project folder on your computer.
   Open a file (e.g., `app.js`) and make a change.
   Press Save `(Ctrl + S)`. Your code is now securely uploaded to your private `dev-alpha-99` bucket.

3. Visit your Mobile Viewer
   Open your phone's browser and visit the hosted URL, adding your ID at the end of the link.
   Example: `https://codestream-4ca2f.web.app/viewer.html?user=dev-alpha-99`