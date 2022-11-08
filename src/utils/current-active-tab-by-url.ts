import { ParsedUrlQuery } from 'querystring';

export const currentActiveTabByUrl = (currentUrl: ParsedUrlQuery) => {
  if (currentUrl['active-tab'] && typeof currentUrl['active-tab'] === 'string') {
    if (
      currentUrl['active-tab'] === 'word-list' ||
      currentUrl['active-tab'] === 'history' ||
      currentUrl['active-tab'] ||
      'favorites'
    ) {
      return currentUrl['active-tab'];
    }
  }

  return 'word-list';
};
