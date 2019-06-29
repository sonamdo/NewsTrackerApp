import database from '../firebase/firebase'
import { history } from '../routers/AppRouter';

export const startCreateUser = () => { //returns a function instead of an object, works with thunk
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}`).on('value', (snapshot) => {
      if(snapshot.val()){
        console.log('user exists')
        history.push('/');
      } else {
        database.ref(`users/${uid}`).set({
          following: ['Canada','Netherlands', 'React', 'Javascript', 'Firebase'],
          saved: []
        })
      }
    })
  }
}

export const startLoadUser = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/following`).on('value', (snapshot) => {

      const myArray = Object.values(snapshot.val())
      dispatch({
       type: 'LOAD_USER',
       userData: myArray
     })

    })
  }
}

export const startFollowingTopic = (topic) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    database.ref(`users/${uid}/following`).push(topic)
  }
}

export const stopFollowingTopic = (topic) => { //returns a function instead of an object, works with thunk
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    database.ref(`users/${uid}/following/`).on('value', (snapshot) => {
      snapshot.forEach((snap) => {
        if(snap.val() == topic){
          snap.ref.remove()
        }
      })
    })
  }
}

//This action is not in use at the moment
//Will implement later to let users save articles
export const saveArticle = (article) => {
  console.log(article)
  return ( getState) => {
    const uid = getState().auth.uid
    database.ref(`users/${uid}/saved`).push(article)
  }
}
