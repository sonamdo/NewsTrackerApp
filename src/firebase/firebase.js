import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDlJLtSN3EK7wKc5hpV13eVK5z8Hw3Ah1Q",
  authDomain: "news-tracker-65028.firebaseapp.com",
  databaseURL: "https://news-tracker-65028.firebaseio.com",
  projectId: "news-tracker-65028",
  storageBucket: "news-tracker-65028.appspot.com",
  messagingSenderId: "280905319258",
  appId: "1:280905319258:web:365f345ee95f2fa5"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default}

// database.ref('users').push({
//   name: 'Julie',
//   age: 28
// })

// database.ref().set({
//   name: 'Sonam',
//   email: 'test@test.com',
//   following: ['Eyor', 'PoohBear'],
//   updates: false
// }).then(() => {
//   console.log('Set call successful')
// }).catch((e) => {
//   console.log('Set error: ', e)
// })
//
// database.ref('attributes').set({
//   height: 175,
//   weight: 72
// })
//
// database.ref('attributes').remove()
//
// database.ref().update({
//   following: ['Mario', 'Luigi']
// })
//
  // const onValueChange = database.ref('users').on('value', (snapshot) => {//subscribe to database changes
  //   const users = [];
  //
  //   snapshot.forEach((snapChild) => {
  //     users.push({
  //       id : snapChild.key,
  //       ...snapChild.val()
  //     })
  //   })
  //
  //   console.log(users)
  //
  // }, (e) => {
  //   console.log('Error fetching data: ', e);
  // })
  //
  // database.ref('users').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })
  //
  // database.ref('users').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

// database.ref().off('value', onValueChange)
