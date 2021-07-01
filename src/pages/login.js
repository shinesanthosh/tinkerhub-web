import React, {useState} from 'react'
import initFirebase from '../../firebase/clientApp'
import firebase from 'firebase'

initFirebase()

const provider = new firebase.auth.GoogleAuthProvider()

const login = () => {
  const [name, setName] = useState(0)

  const loginPop = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken
        // The signed-in user info.
        var user = result.user
        console.log(user)
        setName(user.displayName)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={loginPop}>Login</button>
    </div>
  )
}

export default login
