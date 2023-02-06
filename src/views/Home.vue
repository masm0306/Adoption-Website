<template>
    <div id="wrapper">  
                
        <header id="header">
			    <div class="container main-menu">
			    	<div class="row align-items-center justify-content-between d-flex">
				      <div id="logo">
				        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
				      </div>
				      <nav id="nav-menu-container">
				        <ul class="nav-menu">
						  <li><a href="pets.html">Dogs</a></li>
						  <li><a href="pets.html">Cats</a></li>
						  <li><a href="mypets.html">My pets</a></li>						 
				          <li><a href="register.html">Register</a></li>
				          <li><a href="login.html">Login</a></li>
				          <li><a href="#">Welcome</a></li>						  
				        </ul>
				      </nav><!-- #nav-menu-container -->		    		
			    	</div>
			    </div>
			  </header><!-- #header -->

			<!-- start banner Area -->
			<section class="banner-area relative" id="home">	
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								Dogs				
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
						<div class="col-lg-3 col-md-6">
							<div class="single-cat-list">
							  <img src="img/dg1.jpg" alt="" class="img-fluid">
							  <div class="overlay">
							    <div class="text">
								<p>    I am bobby!</p>
								<p><a href="adopt.html" style="color: white"><u>Adopt me!</u></a></p>
								</div>
							  </div>
							</div>
						</div>									
					</div>
				</div>	
			</section>
			<!-- End pet-list Area -->
            <Footer/>


    </div>

</template>

<script>
    import Footer from '../components/Footer.vue'
    export default {
        components: {
            Footer
        },
        data() {
            return {
                products: [],
                user: {
                        id: '', 
                        name: '', 
                        email: '', 
                        session_id: ''
                },
            }
	    },
        mounted() {

        },

    }
</script>

<style scoped>
	#exame {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 100px;
	}
</style>