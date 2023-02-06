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
								Login			
							</h1>	
						</div>	
					</div>
				</div>
			</section>
			<!-- End banner Area -->	
				
			<!-- Start Volunteer-form Area -->
			<section class="Volunteer-form-area section-gap">
				<div class="container">
					
					<div class="row justify-content-center">
						<form @submit.prevent="handleSubmit" class="col-lg-9">
						  
						  <div class="form-row"> 							  	
						  	<div class="col-6 mb-30">
						  		<label for="email">Email</label>
						   		<input type="email" v-model="user.email" class="form-control" placeholder="Enter a valid email" required>
						  	</div>
						  	<div class="col-6 mb-30">
						  		<label for="password">Password</label>
						   		<input type="password" v-model="user.password" class="form-control" placeholder="Enter Password" required>						  		
						  	</div>
						  </div>		
						  
						  <button type="submit" class="primary-btn float-right">Submit</button>
						</form>
					</div>
				</div>	
			</section>
			<!-- End Volunteer-form Area -->


    
	



<Footer />

</div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'



export default {
    name: 'login',
    components: {
        Footer,
        Header
    },
    data() {
        return {	
            user: {
                email: '',
                password: '',
            },
            submitting: false,
            error: false,
        }
    },
    mounted() {
    },
    created() {
		this.submitting = false
		this.error = false
	},
    methods: {
        handleSubmit() {
			this.submitting = true
			this.clearStatus
			if (this.invalidEmail || this.invalidPassword) {
				this.error = true		
				return
			}
			this.loginUser(this.user)					
			
		},
		async loginUser(user) {
			if ( await this.$store.dispatch('user/loginUser', user) ) {
				//login valid	
				this.$router.push('/message/5')
			}				
			else {
				//login failed			
				this.error = true
				this.submitting = false
				this.$router.push('/message/8')							
			}			
						
		},
		cancel() {
			this.$router.push('/menu')
		},
		clearStatus() {
			this.error = false
		}
            
   
    },
    computed: {
        userLoggedIn: function () {
			return this.$store.getters['user/getUser'].id !== undefined
		},
		invalidPassword: function () {
			return this.user.password === ''
		},		

		invalidEmail: function () {
			return this.user.email === '' || this.user.email.search('@')===-1
		}             
    },
}
</script>