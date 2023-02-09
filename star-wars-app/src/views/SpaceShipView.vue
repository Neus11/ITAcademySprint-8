    <template>
        <div class="home">
        <hr>
        <img alt="StarWars logo" src="../assets/STAR-WARS-9.jpg">
        <hr>
        <SpaceShip />
        </div>
    </template>
    
    <script>
    import SpaceShip from '@/components/SpaceShip.vue';
    
    export default {
        name: 'SpaceSchipView',
        components: {
            SpaceShip,
        }
    }
    </script>
    
    <style scoped>
    hr {
        color:white;
    }
    
    div {
        background-color: black;
    }
    
    img {
        width: 30%;
    }
    </style>
    