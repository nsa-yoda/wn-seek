import { config as devConfig } from "./development";
import { config as testConfig } from "./testing";
import { config as prodConfig } from "./production";

const loadConfig = (environment) => {
  let env = environment || process.env.NODE_ENV;
  switch (env) {
    case "development":
      return devConfig;
    case "production":
      return prodConfig;
    case "testing":
      return testConfig;
    default:
      return devConfig;
  }
};

export default loadConfig;
