export const state = () => ({
    locales: ["en", "zh","th"],
    locale: "en",
  });

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
};

export const actions = {
  // nuxtServerInit(store, {req}) {
  //   if (req.locale) {
  //     store.commit('SET_LANG', req.locale);
  //   }
  // },
  setLanguage({ commit }, data) {
    commit('SET_LANG', data);
  }
};
