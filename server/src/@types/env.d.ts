/* eslint-disable @typescript-eslint/naming-convention */
declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_URI?: string;
    SECRET?: string;
  }
}
