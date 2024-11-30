import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import '@/app/i18n';
import { Root } from '@/app/layouts';
// import { EnvUnsupported } from '@/components/EnvUnsupported.tsx';
// import { init } from '@/init.ts';

import '@/app/global.css';
import '@telegram-apps/telegram-ui/dist/styles.css';

// Mock the environment in case, we are outside Telegram.
// import './mockEnv.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);

// try {
// Configure all application dependencies.
// init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
/* } catch (e) {
  root.render(<EnvUnsupported/>);
}
 */
