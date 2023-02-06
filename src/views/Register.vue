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
								Register			
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
						  <div class="form-group">
						    <label for="first-name">Name</label>
						    <input type="text" v-model="user.name" class="form-control" placeholder="Name" required autofocus>
						  </div>
						   <div class="form-group">
								<label for="email">Email Address</label>
						   		<input type="email" v-model="user.email" class="form-control" placeholder="Valid email Address" required>
							</div>	
						  
						  <div class="form-row"> 							  	
						  	<div class="col-6 mb-30">
						  		<label for="password1">Password</label>
						   		<input type="password" v-model="user.password" class="form-control" placeholder="Password" required>
						  	</div>
						  	<div class="col-6 mb-30">
						  		<label for="password2">Confirm Password</label>
						   		<input type="password" v-model="passwordConfirm" class="form-control" placeholder="Repeat Password" required>						  		
						  	</div>
						  </div>	
                          
                          <p v-if="error && submitting">
                            ❗Please fill out all required fields
                          </p>
						  
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
	components: {
		Footer,
        Header
	},
	data() {
      return {	
        user: {
			name: '',
			email: '',
			password: '',
        },
		passwordConfirmation: '',
		submitting: false,
		error: false,	
      }
    },
	
	methods: {
		handleSubmit(){
			this.submitting = true
			this.clearStatus()

			if (this.invalidName || this.invalidEmail || this.invalidPassword || this.invalidRepeatPassword) {
				this.error = true
				return
			}
			//add if user does not exist
			this.userExists(this.user)	
		},
		clearStatus() {
			this.error = false
		},
		async userExists(user) {
			if ( await this.$store.dispatch('user/userExists', user) )	{
                this.error = true
				this.submitting = false							
				return	
            }
			else {
				// add user
				this.addUser()				
			}
		},
		async addUser(){
			if ( await this.$store.dispatch('user/addUser') ) {
                //success: new user registered
                this.$router.push('/message/4')
            }
			else {
                this.error = true
				this.submitting = false							
				return	
            }	
		},
		cancel() {
			this.$router.push('/')
		}
	},
	
	computed: {
		invalidName: function () {
	 		return this.user.name === '' || this.user.name.length>15
		},

		invalidEmail: function () {
			return this.user.email === '' || this.user.email.search('@')===-1
		},
		invalidPassword: function(){
			return this.user.password === '' || this.user.password.length < 6
		},
		invalidRepeatPassword: function () {
			return this.submitting && this.user.password !== this.passwordConfirmation
		},
		userLoggedIn: function () {
			return this.$store.getters['user/getUser'].id !== undefined
		},
	},
	directives: {

	},
	created() {


	}
}
</script>