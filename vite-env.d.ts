interface ImportMetaEnv {
  readonly VITE_APP_SERVICE_ID: string;
  readonly VITE_APP_TEMPLATE_ID: string;
  readonly VITE_APP_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}