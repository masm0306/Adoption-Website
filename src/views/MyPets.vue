<template>
<div>


  
<Header />

<section class="banner-area relative" id="home">	
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								My pets !				
							</h1>
						</div>	
					</div>
				</div>
			</section>
			<!-- End banner Area -->	
				
			<!-- Start pet-list Area -->
			<section class="cat-list-area section-gap">
				<div class="container">
				
					<div v-if="isAdoptions()" :key="0">
						<div v-for="a in adoptions" :key="a.id" class="media">
							<div class="media-left">
								<img class="img-fluid" v-bind:src="require('C:/Users/Miguel/Desktop/New folder/PRACTICE/public/img/' + a.pet_image)">
							</div>
							<div class="media-body">
							<h3 class="mb-30">&nbsp;I am {{a.pet_name}}!</h3>
							<h4 class="media-heading">&nbsp;I am very sweet! {{ description(a.pet_name) }}</h4>
							<br><p>I was adopted "datetime"</p>
							</div>
				  		</div>
					</div>
					<div v-else>
						<p style="text-align: center;">Adopt a pet!</p>
					</div>
				  
				  
				  <br>
				 
			
				</div>	
			</section>











<Footer />

</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import adoptions from '../store/adoptions'


export default {
	name: 'dishes',
    components: {
		Footer,
        Header
	},
	data() {
		return {
			user: {
				id: '', 
				name: '', 
				email: '', 
				session_id: ''
		    },
			adoptions: [],
			pets: []
		}
	},
	mounted() {
		this.getAdoptions()
	},
	methods: { 
		async getAdoptions(){
			this.user = await this.$store.getters['user/getUser']
			await this.$store.dispatch('adoptions/getMyadoptionsFromDB',this.user.id)
			this.adoptions = this.$store.getters['adoptions/getadoptions']
		},
		description(pet_name){
			this.pets = this.$store.getters['pets/getpets']
			console.log(`Pet_name: ${pet_name}`)
			return this.pets.filter((p) => p.name === pet_name)[0].description
		},
		isAdoptions(){
			return this.adoptions.length > 0
		}	
	},
    computed: {

    },
}
</script>

<style scoped>
</style>