import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sweresearch.missiongermany',
  appName: 'SWE Roadmap Germany',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
