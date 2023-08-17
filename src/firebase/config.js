// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// import { strict as assert } from "assert";
// import { load } from "ts-dotenv";

// const env = load({
//   API_KEY: String,
//   AUTH_DOMAIN: String,
//   PROJECT_ID: String,
//   STORAGE_BUCKET: String,
//   MESSAGING_SENDER_ID: Number,
//   APP_ID: String,
// });

// assert.ok(env.API_KEY);
// assert.ok(env.AUTH_DOMAIN);
// assert.ok(env.PROJECT_ID);
// assert.ok(env.STORAGE_BUCKET);
// assert.ok(env.MESSAGING_SENDER_ID);
// assert.ok(env.APP_ID);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABtZXH3L1nLak5RSQeS0yVMnM_sONCMV4",
  authDomain: "pruebaancona.firebaseapp.com",
  projectId: "pruebaancona",
  storageBucket: "pruebaancona.appspot.com",
  messagingSenderId: "681238901699",
  appId: "1:681238901699:web:c99fea5c2ecb29990e8376",

  // apiKey: env.API_KEY,
  // authDomain: env.AUTH_DOMAIN,
  // projectId: env.PROJECT_ID,
  // storageBucket: env.STORAGE_BUCKET,
  // messagingSenderId: env.MESSAGING_SENDER_ID,
  // appId: env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadFile = async (file) => {
  const fileName = `product-${Date.now()}`;
  const storageRef = ref(storage, fileName);
  const result = await uploadBytes(storageRef, file);
  // uploadBytes(storageRef, file).then((snapshot) => {
  //   console.log(snapshot);

  // });
  if (!result) {
    return "error";
  }
  const url = await getDownloadURL(storageRef);
  return url;
};
