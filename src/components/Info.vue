<template>
    <div>
        <h1>Info</h1>
        <h2> {{getUsername}} </h2>
        <h2> {{getAge}} </h2>
        <div>
            <input v-model="usernameInput"/>
            <button @click="changeUsername">Change Username</button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Info",
    data() {
        return {
            usernameInput: "",
        }
    },
    computed: {
        ...mapGetters(['getUsername', 'getAge']),
    },

    methods: {
        changeUsername(){
            this.$store.dispatch("handleChangeUsername", this.usernameInput)
        }
    }
}
</script>