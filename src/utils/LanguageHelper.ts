import { serverConfig } from '../constants/serverConfig';
import { globalStrings } from '../lang/global.lang';
import { TextHelper } from '../utils/TextHelper';

// load proper language strings, accordingly to the server language settings

export class LanguageHelper {
  public static getLanguageString = (model: any = null, key) => {
    if (!model) {
      // pass only the global strings
      return globalStrings[key][serverConfig.language];
    }

    // load language strings for a specific model
    let languageStrings = require(`../resources/${TextHelper.capitalizeFirstLetter(
      model
    )}/${model}.lang.ts`);

    // add our global generic strings
    languageStrings = {
      ...languageStrings,
      ...globalStrings
    };

    return languageStrings[key][serverConfig.language];
  };
}
