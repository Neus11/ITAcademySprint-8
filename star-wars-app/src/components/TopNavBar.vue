<template>
    <div >
        <div class="top-header">
            <div class="logo">
                <p><router-link to="/"><img alt="StarWars logo" src="../assets/STAR-WARS-9.jpg"></router-link></p>
            </div>
            <div class="log-links">
                <a href="#">
                    <span @click="handleLoginModal">LOGIN</span>
                </a>
                <a href="#">
                    <span @click="handleModal">SIGNUP</span>
                </a>
            </div>
        </div>
        <nav>
            <router-link to="/">HOME</router-link> |
            <router-link to="/starships">SPACESHIPS</router-link>
        </nav>
        <router-view />
        <div v-if="showModal">
            <SignupComp />
        </div>
        <div v-if="showLoginModal">
            <LoginComp />
        </div>
    </div>
</template>

<script>

import SignupComp from '@/components/SignupComp'
import LoginComp from '@/components/LoginComp'

import { mapState, mapMutations } from "vuex";

export default {
    name: 'TopNavBar',
    components: {
        SignupComp,
        LoginComp
    },
    data() {
        return {
           
        }
    },
    methods: {
        ...mapMutations(["handleModal", "handleLoginModal"])
    },
    computed: {
        ...mapState(["showModal", "showLoginModal"])
    }

}
</script>

<style scoped>
.top-header {
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.log-links {
    margin-top: 2rem;
}

a {
    text-decoration: none;
    padding: 0.5rem;
    width: 20%;
}
span {
    color: white;
}

h3 {
    color: aliceblue;
}

img {
    width: 30%;
    margin-right: -6rem;
}

</style>