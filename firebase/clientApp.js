import firebase from 'firebase'
import 'firebase/auth'

const clientCredentials = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

export default function initFirebase() {
  if (!firebase.apps.length) {
    return firebase.initializeApp(clientCredentials)
  }
}
