import { baseConfig, IConfig } from '../../config/baseConfig';
import { configs } from '../../config';
import { local } from '../../config/config.local';

export class ConfigService {
  static get config() {
    const envConfig = configs[process.env.GUNTON_ENV!] ?? local;
    return { ...baseConfig, ...envConfig } as IConfig;
  }
}
