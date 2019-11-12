import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('R7in48EOjH0gggi0a7Wd').collection('cartItems').doc('rf9Ne18DPgpdz1BFPR1G')
firestore.doc('/users/R7in48EOjH0gggi0a7Wd/cartItems/rf9Ne18DPgpdz1BFPR1G')
firestore.collection('/users/R7in48EOjH0gggi0a7Wd/cartItems')