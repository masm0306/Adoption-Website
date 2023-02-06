<template>
			<!-- start banner Area -->
			<section class="banner-area relative about-banner" id="home">	

				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								{{message}}		
							</h1>	
						</div>	
					</div>
				</div>
			</section>
			<!-- End banner Area -->
</template>

<script>
export default {
    data() {
		return {
            message: '',
		}
	},   
    mounted() {
        if (this.$route.params.id == 1) {
					this.message = "Success: Post updated"
					} 
					if (this.$route.params.id == 2) {
					this.message = "Success: User deleted"
					}
					if (this.$route.params.id == 3) {
					this.message = "Success: Post added to database"
					}
					if (this.$route.params.id == 4) {
					this.message = "Welcome! You can now login"
					}
					if (this.$route.params.id == 5) {
					this.message = "Welcome back " + this.$store.getters['user/getUser'].name + "!"
					}
					if (this.$route.params.id == 6) {
					this.message = "Bye, come back soon!"
					}	
					if (this.$route.params.id == 7) {
					this.message = "Success: Comment added to database"
					}
					if (this.$route.params.id == 8) {
					this.message = "Login failed: wrong email or password"
					}
					if (this.$route.params.id == 10) {
					this.message = "New Adoption"
					}								
        var timeleft = 3;
        var downloadTimer = setInterval(() => {
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            this.$router.push('/pets')
        }
        timeleft -= 1;
        }, 1000);
	},

}
</script>

<style scoped>
</style>



