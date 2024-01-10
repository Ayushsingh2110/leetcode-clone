import React, { useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../firebase";

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:5137',
    // This must be true.
    handleCodeInApp: true,
  };

const SignIn = () => {
  
  const [email, setEmail] = useState("")

  async function onSignIn() {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        alert("email sent")
        // ...
      })
      .catch((error) => {
        alert("email not sent")
        console.error("Error sending email:", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }
  return (
    <> 
    <div>

    </div>
    <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
    <button onClick={onSignIn}>SignIn</button>
    </>
  );
};

export default SignIn;
