import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * @description 启动Angular应用;
 * App: App组件;
 */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
