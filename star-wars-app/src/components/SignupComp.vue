<template>
    <div class="modal-wrapper" >
        <div class="modal">
            <h2>CREATE YOUR ACCOUNT</h2>
            <div class="close-modal" @click="handleModal"> x </div>
            <div class="form-container" v-if="user">
                <form class="form">
                    <input type="text" placeholder="Name" v-model="name" />
                    <input type="password" placeholder="Password" v-model="password" />
                    <button @click="addUser">Save</button>
                    <p v-if="errorInput" class="error"> {{ error }}</p>
                </form>
                <div class="swap-modal">
                    <p>Already have an account? Go back to Log in</p>
                </div>
            </div>
            <div class="" v-else>
                <p> Succesfully Signed Up </p>
                <p> Please go to <a href="#">Log in</a></p>
            </div>      
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
    name: 'SignupComp',
    data() {
        return {
            name:"",
            error: "",
            password: "",
            user: true,
            users: [], 
            errorInput: false

        }
    },
    methods: {
        ...mapMutations(["handleModal"], ["handleLoginModal"]),

        addUser() {
            if (!this.name && !this.password) {
                return;
            }

            let nameInput = /^[A-Za-z]+$/;
            let nameValid = nameInput.test(this.name);
            let passInput = /^.{5,}$/;
            let passValid = passInput.test(this.password);

            if (!nameValid && !passValid) {
                this.error = "Name or Password format not correct";
                this.errorInput = "true";
            } else {
                this.users.push({name: this.name, password: this.password});
                this.name = "";
                this.password = "";
                this.saveUser();
                this.swapModal();
            }
        },
        swapModal() {
            this.user = false;
        },
        saveUser() {
            const parsed = JSON.stringify(this.users);
            localStorage.setItem('user', parsed);
        }
    },
    mounted() {
        if (localStorage.getItem('name')) {
            this.name = JSON.parse(localStorage.getItem('name'));
        }
        if (localStorage.getItem('password')) {
            this.password = JSON.parse(localStorage.getItem('password'));
        }
    },
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
.error {
    color: red;
    font-weight:lighter; 
}
</style>