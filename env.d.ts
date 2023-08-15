declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GRANT_ID: string;
        API_KEY: string;
        SERVER_URL: string;
      }
    }
  }

  export {}