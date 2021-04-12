import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: "yauangon",
        age: 20,
    },

    getters: {
        getUsername: state => {
            return "Username: " + state.username
        },

        getAge: state => {
            return "Age: " + state.age
        }
    },

    mutations: {
        changeUsername(state, newUsername) {
            state.username = newUsername
        }
    },

    actions: {
        handleChangeUsername(context, newUsername){
            context.commit("changeUsername", newUsername)
        }
    }
});