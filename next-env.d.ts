/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

// Add custom environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_IGNORE_NODE_VERSION: string;
    NODE_OPTIONS: string;
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_SYSTEM_TITLE: string;
  }
}
