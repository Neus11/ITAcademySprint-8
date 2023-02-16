<template>
    <div class="modal-wrapper" >
        <div class="modal">
            <h2>LOG IN</h2>
            <div class="close-modal" @click="handleLoginModal"> x </div>
            <div class="form-container">
                <form class="form">
                    <input type="text" placeholder="Name" v-model="nameCheck" />
                    <input type="password" placeholder="Password" v-model="passwordCheck" />
                    <button @click="checkUser">Log In</button>
                </form>
                <div class="swap-modal">
                    <p>Don't have an account yet? Go back to Sign Up</p>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
    name: "LoginComp",
    data() {
        return {
            nameCheck:"",
            passwordCheck: "",
            userCheck: {}       
        }
    },
    methods: {
        ...mapMutations(["handleLoginModal"]),

        checkUser() {
            if (!this.nameCheck || !this.passwordCheck) {
                return;
            }

            this.userCheck.name = this.nameCheck;
            this.userCheck.password = this.passwordCheck

            let userArr = JSON.parse(localStorage.getItem('user')) || [];

            let currentUser = userArr.some(user => user.name === this.userCheck.name);  
            

            if(currentUser) {
                console.log("Welcome! " + this.nameCheck);
                this.$store.commit("setAuthentic", true);
                this.$router.replace({ name: "starships"});
                this.handleLoginModal();
            } else {   
                console.log("User not registered");
            }

            this.nameCheck = "";
            this.passwordCheck = "";
        },

    }

   
}
</script>

<style scoped>
</style>
<style>
.modal-wrapper {
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal {
    width: 400px;
    background: #131515;
    padding: 2rem;
    position: relative;
    border-radius: 5%;
}
.modal h2 {
    font-family: 'consolas';
    font-size: 1.3rem;
    color:grey;
    border-radius: 5px;
}
.modal-header img {
    width: 50px;
}
.form-container {
    text-align: left;
    width: 300px;
    margin: 2rem auto;
    border-radius: 5px;
    padding: 5px;
}
.form input[type="text"],
.form input[type="password"] {
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 1rem auto;
    width: 250px;
    color: #131515;
    display: block;
}
.form input:focus-visible {
    outline: 2px solid grey;
    background: rgba(95, 89, 89, 0.2);
    color: white;
}
.form button {
    margin: 2rem auto;
    width: 100px;
    display: block;
    border: none;
    border-radius: 5px;
    outline: none;
    background: grey;
    color: white;
    font-weight: bold;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
}
.form button:hover {
    background-color: rgba(82, 88, 76, 0.637);
}
.close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: white
}
.swap-modal {
    color: rgb(92, 90, 90);
    display: flex;
    justify-content: center;
    align-items: center;
}
.swap-modal a {
    color: green;
    font-weight: bolder;
    text-decoration: none;
}
p {
    color: rgb(172, 178, 178);
    padding: 5px;
    border-radius: 10px;
}

p a {
    text-decoration: none;
    color: green;
    font-weight: bolder;
}
</style>
