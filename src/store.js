import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import { make } from 'vuex-pathify';

Vue.use(Vuex)

const state = {};

export default new Vuex.Store({
  getters: {
    ...make.mutations(state),
  },

  state: {

  },
  mutations: {
    ...make.mutations(state),

  },
  actions: {

  },
  plugins: [pathify.plugin]
})
