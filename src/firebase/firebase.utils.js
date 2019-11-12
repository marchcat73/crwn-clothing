import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC2QqEGQI5P1Ven6v8wrR6QEbbpUN7tum4",
  authDomain: "crwn-db-4a4e5.firebaseapp.com",
  databaseURL: "https://crwn-db-4a4e5.firebaseio.com",
  projectId: "crwn-db-4a4e5",
  storageBucket: "crwn-db-4a4e5.appspot.com",
  messagingSenderId: "415699938841",
  appId: "1:415699938841:web:86884e96fdb9bfd22b0488"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error create user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase