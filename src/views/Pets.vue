<template>
<div>


  
<Header />

<!-- start banner Area -->
<section class="banner-area relative" id="home">	
    <div class="overlay overlay-bg"></div>
    <div class="container">				
        <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
                <h1 class="text-white">
                    Pets				
                </h1>
            </div>	
        </div>
    </div>
</section>
<!-- End banner Area -->	
    
<!-- Start pet-list Area -->
<section class="cat-list-area section-gap">
    <div class="container">
        <div class="row">
            <div v-for="p in pets" :key="p.id" class="col-lg-3 col-md-6">

                <div class="single-cat-list">
                    <img class="img-fluid" v-bind:src="require('/public/img/' + p.image)">
                    <div class="overlay">
                    <div class="text">
                    <p>    I am {{p.name}}!</p> 
                    <p v-if="userLoggedIn"><a v-on:click="adopt({petlover_id: user.id, pet_id: p.id})" style="color: white">Adopt me!</a></p>
                    
                    </div>
                    </div>
                </div>

            </div>									
        </div>
    </div>	
</section>
<!-- End pet-list Area -->


				
	



<Footer />

</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {

    components: {
        Footer,
        Header
    },
  

    data() {
        return {
            pets: [],
            user: {
				id: '', 
				name: '', 
				email: '', 
				session_id: ''
		    },
        }
    },
    mounted() {
		this.getPets()
        this.getUser()
        console.log(this.user.id)
	},
    created() {
    },
    methods: {       
        async getPets(){
			await this.$store.dispatch('pets/getPetsFromDB',this.pets)
			this.pets = await this.$store.getters['pets/getpets']
            this.pets = this.pets.filter((p) => p.status === "0")
		},
		async getUser(){
			this.user = await this.$store.getters['user/getUser']
		},
        async adopt(newAdoption){
            console.log("Adopt")
            this.$store.dispatch('adoptions/newAdoption',newAdoption)
            this.$router.push('/message/10')
        }


       
    },
    computed: {
        userLoggedIn: function () {
			return this.$store.getters['user/getUser'].id !== undefined
		}
    }
 
}
</script>

<style scoped>


</style>