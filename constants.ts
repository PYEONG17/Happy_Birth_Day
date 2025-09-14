interface ImportMetaEnv {
  readonly BASE_URL: string;
  // add other env variables here if needed
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export const ALBUM_IMAGES: string[] = [
  `${import.meta.env.BASE_URL}HPBD/anh1.jpg`,
  `${import.meta.env.BASE_URL}HPBD/anh2.jpg`,
  `${import.meta.env.BASE_URL}HPBD/anh3.jpg`,
  `${import.meta.env.BASE_URL}HPBD/anh4.jpg`,
  `${import.meta.env.BASE_URL}HPBD/anh6.jpg`,
  `${import.meta.env.BASE_URL}HPBD/anh7.jpg`,
  `${import.meta.env.BASE_URL}HPBD/anh8.jpg`,
  `${import.meta.env.BASE_URL}HPBD/anh9.jpg`,
];
