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
        title: doc.data().title,
        name: doc.data().name,
        pronouns: doc.data().pronouns,
        category: doc.data().category,
        experience: doc.data().experience,
        lat: doc.data().coordinates._lat,
        lng: doc.data().coordinates._long,
        created: doc.data().created,
      });
    });
  });
  return markerList;
};

export const addNewMarker = (form, lat, lng) => {
  const coordinates = new firebase.firestore.GeoPoint(lat, lng);

  let newForm = {
    ...form,
    coordinates: coordinates,
  };

  db.collection("markers")
    .add(newForm)
    .then((res) => {
      newForm = {
        ...newForm,
        id: res.id,
      };
      form = {
        ...form,
        id: newForm.id,
        lat: lat,
        lng: lng,
      };
      return form;
    });
};
