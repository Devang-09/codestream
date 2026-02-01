# <img src="logo.png" width="40" align="center" /> CodeStream Live

[![VS Code](https://img.shields.io/badge/VS%20Code-1.108.1+-007ACC?logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Real--time-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

CodeStream allows you to sync your VS Code editor with a mobile web viewer in real-time.

## 🚀 Features
- **⚡ Live Sync:** Your code updates on your mobile device every time you save.
- **🎨 Syntax Highlighting:** Beautiful, readable code colors on mobile via Prism.js.
- **📋 Copy to Clipboard:** One-tap copying of snippets directly from your phone.
- **🔒 Private Channels:** Secure syncing using unique personal Sync IDs.

## 🛠 Tech Stack
| Component | Technology |
| :--- | :--- |
| **Extension** | TypeScript, VS Code API |
| **Backend** | Firebase Firestore (NoSQL) |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Highlighting** | Prism.js |

## 📖 How to Use

### 1. Configure the Extension
- Run `CodeStream: Set My Sync ID` in the command palette (`Ctrl+Shift+P`).
- Enter a unique ID (e.g., `dev-alpha-99`).
- You will see: `CodeStream Sync ID set to: dev-alpha-99`.

### 2. Sync Your Code
- Open any file in VS Code (e.g., `script.py`).
- Press **Save** (`Ctrl + S`). 
- Your code is now securely pushed to your Firebase bucket.

### 3. View on Mobile
- Open your phone's browser and visit:
  `https://codestream-4ca2f.web.app/viewer.html?user=YOUR_ID`
  *(Replace `YOUR_ID` with the ID you set in Step 1)*

## 📂 Project Structure
```text
├── src/            # Extension source code (TypeScript)
├── Viewer/         # Web viewer frontend
├── logo.png        # Project branding
├── package.json    # Extension manifest
└── tsconfig.json   # TypeScript configuration
