import { Html, Head, Main, NextScript } from 'next/document'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC90NPhPuCuRR0cxJKZ9t3bbebjorKNtQc",
  authDomain: "eggs-for-ukraine.firebaseapp.com",
  projectId: "eggs-for-ukraine",
  storageBucket: "eggs-for-ukraine.appspot.com",
  messagingSenderId: "796694096950",
  appId: "1:796694096950:web:380424dc55475863703c97",
  measurementId: "G-BE2YG171D0"
};

if (typeof window !== "undefined") {
  console.log('window');
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
