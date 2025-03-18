import dotenv from "dotenv";
import { getApp, getApps, initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";

// 서버 환경 체크
const isServer = typeof window === "undefined";

if (isServer) {
  // NODE_ENV에 따라 올바른 환경 변수 파일 로드
  const NODE_ENV = process.env.NODE_ENV || "development";
  dotenv.config({
    path: NODE_ENV === "production" ? "../../.env.production" : "../../.env",
  });
}

let firebaseConfig = null;

if (isServer) {
  firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };
} else {
  firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };
}

/**
 * 만약, Vite 프로젝트에서 .env는 프로젝트 루트에서 .env 파일을 자동 로드한다.
 * Vite 프로젝트에 VITE_ 프리픽스를 붙인 .env 파일을 만든다.
 *
 * 테스트 마치면 console은 주석 처리하기
 */

// NOTE: !getApps().length 확인은 어플리케이션을 리로드 할 때 실수로 SDK를 다시 초기화 하는 것을 방지
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);
const dbRef = ref(db);

/**
 * API 요청을 위한 기본 클라이언트
 * @param subject 데이터 subject
 * @throws {ApiError} API 요청 실패 시 에러
 */

type FirebaseGetType = <T>(subject: string) => Promise<T>;

export const getData: FirebaseGetType = async (subject) =>
  get(child(dbRef, subject))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(`🛬 [API - RESPONSE] GET ${subject} | ok`);
        return snapshot.val();
      } else {
        throw new Error(
          `🚨 [API - ERROR] GET ${subject} | 요청에 실패했습니다.`,
        );
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error(
        `🚨 [API - ERROR] GET ${subject} | 알 수 없는 오류가 발생했습니다.`,
      );
    });
