import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_AD,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_MSI,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
  databaseURL: process.env.REACT_APP_DB,
};

if (!firebase.apps.length) firebase.initializeApp(config);
else firebase.app();
export const auth = firebase.auth;
export const db = firebase.firestore();
export const loadMarkers = () => {
  let markerList = [];

  db.collection("markers").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
      markerList.push({
        id: doc.id,
        story: doc.data().story,
        lat: doc.data().coordinates._lat,
        lng: doc.data().coordinates._long,
      });
    });
  });
  return markerList;
};

export const addNewMarker = (form) => {
  let newForm = {
    username: form.username,
    story: form.story,
    coordinates: new firebase.firestore.GeoPoint(form.lat, form.long),
  };

  db.collection("markers")
    .add(newForm)
    .then((res) => {
      newForm = {
        ...newForm,
        id: res.id,
      };
    });
  console.log(newForm);
  return newForm;
};
