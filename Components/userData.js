import * as firebase from 'firebase';

export function SendData(state){
        firebase.database().ref('/users').push(state)
        .then(console.log("Data Sent"));
}