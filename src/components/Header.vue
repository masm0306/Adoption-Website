 <template>
			  <header id="header">
			    <div class="container main-menu">
			    	<div class="row align-items-center justify-content-between d-flex">
				      <div id="logo">
				        <router-link to="/pets"><img :src="'img/logo.png'" alt="" title="" /></router-link>
				      </div>
				      <nav id="nav-menu-container">
				        <ul class="nav-menu">
						  <router-link to="/dogs">Dogs</router-link>
						  <router-link to="/cats">Cats</router-link>					 
				          <router-link v-if="!userLoggedIn" to="/register">Register</router-link>
						  <button style="background:none;
						  				color: white;
										border:none;
										margin:0;
										padding:0;
										cursor: pointer;" 
										v-else @click="logOut()"
										>
										Logout
						  </button>
						  <router-link v-if="!userLoggedIn" to="/login">Login</router-link>
						  <router-link v-else to="/mypets">My Pets</router-link> 
						  <li><a href="#">Welcome {{user}}</a></li>						  
				        </ul>
				      </nav><!-- #nav-menu-container -->		    		
			    	</div>
			    </div>
			  </header><!-- #header -->
</template>

<script>


export default {
    methods: {
		async logOut(){
			this.$store.commit('user/logoutUser')
        },
    },
    computed: {
		userLoggedIn: function () {
       		return this.$store.getters['user/getUser'].id !== undefined
      	},
		user: function () {
       		return this.$store.getters['user/getUser'].name
      	},
    },

}


</script>  
