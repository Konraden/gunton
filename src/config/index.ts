import { IConfig } from './baseConfig';
import { local } from './config.local';
import { dev } from './config.dev';
import { stage } from './config.stage';
import { prod } from './config.prod';

export interface ConfigCollection {
  [key: string]: IConfig | undefined;
}
export const configs: ConfigCollection = { local, dev, stage, prod };
