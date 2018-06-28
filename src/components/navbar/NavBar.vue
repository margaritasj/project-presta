<template>
  <div class="">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
				<LogoNav/>
				<BtnCollapse/>
				<LinkNav/>
      </div>
    </nav>
  </div>
</template>

<script>
import LogoNav from './navigation/LogoNav.vue';
import BtnCollapse from './navigation/BtnCollapse.vue';
import LinkNav from './navigation/LinkNav.vue';

export default {
  name: "NavBar",
  components: {
		LogoNav,
		BtnCollapse,
    LinkNav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  margin-top: 1rem;
	padding: 15px 0;
}

.fixed-top{
  z-index: 1000;
}
</style>