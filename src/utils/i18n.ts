import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import { I18n } from 'i18n-js';
import memoize from 'lodash.memoize';

const i18n = new I18n();

const translationGetters = {
  // Lazy requires.
  es: () => require('../assets/translations/es.json'),

  // Add new translations here, for example:
  en: () => require('../assets/translations/en.json'),
};

export const translate = memoize(
  (key: any, params?: Record<string, unknown>) => i18n.t(key, params),
  (key: string, config: any) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // Fallback if no available language fits.
  const isRTL = false;
  const fallback = { languageTag: 'en', isRTL };

  const { languageTag } =
    RNLocalize.findBestLanguageTag(Object.keys(translationGetters)) || fallback;

  // Update layout direction.
  I18nManager.forceRTL(isRTL);

  // Set i18n-js config.
  i18n.translations = { [languageTag]: translationGetters.es() };
  i18n.locale = languageTag;
};
