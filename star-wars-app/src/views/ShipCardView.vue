<template>
    <div>
        <h2>{{ starshipDetails.name }}</h2>
        <img alt="prueba" src="../assets/Star-Wars-Ships.jpg" />
            <ul>
                <li>MODEL: {{ starshipDetails.model }}</li>
                <li>STARSHIP: {{ starshipDetails.starship_class }}</li>
                <li>MANUFACTURER: {{ starshipDetails.manufacturer }}</li>
                <li>COST: {{ starshipDetails.cost_in_credits }} credits</li>
            </ul>

            <ul>
                <li>CREW: {{ starshipDetails.crew}}</li>
                <li>PASSENGER CAPACITY: {{ starshipDetails.passengers }}</li>
                <li>CARGO CAPACITY: {{ starshipDetails.cargo_capacity }}</li>
                <li>CONSUMABLES: {{ starshipDetails.consumables }}</li>
            </ul>

            <ul>
                <li>LENGTH: {{ starshipDetails.length }}</li>
                <li>MAX ATM SPEED: {{ starshipDetails.max_atmosphering_speed }}</li>
                <li>HYPERDRIVE RATING: {{ starshipDetails.hyperdrive_rating }}</li>
            </ul>
    </div>
</template>

<script>

import { mapState } from "vuex";

export default {
    name: 'shipCard',
    props: ['id'],
    data() {
        return {
            shipURL: null,
        }
    },
    computed: {
        ...mapState(['starshipDetails'])
    },
    created() {
        this.shipURL = this.id;
        this.$store.dispatch('fetchStarshipDetails', this.shipURL);
    }
}

</script>

<style scoped>

img {
    width: 70%;
}

div {
    color: grey;
}

li {
    list-style: none;
}

</style>
