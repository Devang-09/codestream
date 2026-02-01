import * as vscode from 'vscode';
// 1. We import Firestore instead of Analytics
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; 

// This is your actual configuration you just sent
const firebaseConfig = {
  apiKey: "AIzaSyAHafD6NEnKE1L5sK27U5q31QJ6SVUy4jQ",
  authDomain: "codestream-4ca2f.firebaseapp.com",
  projectId: "codestream-4ca2f",
  storageBucket: "codestream-4ca2f.firebasestorage.app",
  messagingSenderId: "256627222304",
  appId: "1:256627222304:web:4ff01cf737d675eaded945",
  measurementId: "G-18R7ZFYPEF"
};

// 2. Initialize Firebase and the Database (Firestore)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function activate(context: vscode.ExtensionContext) {
    // 1. Get the saved Sync ID or default to "anonymous"
    let myUserId = context.globalState.get<string>('syncId') || "anonymous";

    // 2. Register the command to change the ID
    let setUserIdCommand = vscode.commands.registerCommand('codestream.setSyncId', async () => {
        const input = await vscode.window.showInputBox({ 
            prompt: 'Enter your unique Sync ID',
            placeHolder: 'e.g., dev_user_99' 
        });
        
        if (input) {
            await context.globalState.update('syncId', input);
            myUserId = input; // Update the local variable
            vscode.window.showInformationMessage(`CodeStream Sync ID set to: ${input}`);
        }
    });

    vscode.window.showInformationMessage(`CodeStream active with ID: ${myUserId}`);

    // 3. Updated Save Listener
    let saveListener = vscode.workspace.onDidSaveTextDocument(async (document) => {
        const fileContent = document.getText();
        const fileName = vscode.workspace.asRelativePath(document.uri);
        const safeDocId = fileName.replace(/\//g, '_');

        try {
            // Now using the dynamic myUserId!
            await setDoc(doc(db, "users", myUserId, "files", safeDocId), {
                name: fileName,
                content: fileContent,
                timestamp: new Date()
            });
            
            vscode.window.showInformationMessage(`Synced to ${myUserId}: ${fileName}`);
        } catch (error) {
            vscode.window.showErrorMessage("Cloud Sync Failed!");
            console.error(error);
        }
    });

    // Add both to subscriptions
    context.subscriptions.push(setUserIdCommand, saveListener);
}