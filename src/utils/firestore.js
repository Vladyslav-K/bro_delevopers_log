import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCZqB9XVEWh-IvLBpnT8vgBodO_t9LCOZQ',
  authDomain: 'bro-dev-log.firebaseapp.com',
  databaseURL: 'https://bro-dev-log.firebaseio.com',
  projectId: 'bro-dev-log',
  storageBucket: 'bro-dev-log.appspot.com',
  messagingSenderId: '158354224944',
  appId: '1:158354224944:web:9c9631ee7f68ef495dfaf5',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
