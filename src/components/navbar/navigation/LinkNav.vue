<template>
	<div class="link">
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav text-uppercase ml-auto">
				<!-- Falta aplicar vue-router / verificar el error -->
				<li class="nav-item">
        	<a class="nav-link" href=""> préstamos </a>
				</li>
				<li class="nav-item">
					<a class="nav-link"> invertir </a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="">nosotros</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="">preguntas frecuentes</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="">artículos</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: "LinkNav"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
	margin:1rem;
}

.nav-item {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.6rem;
}

.nav-item > .nav-link {
  color: #fff;
  box-shadow: 1px #fff ;
}

.nav-item > .nav-link:hover{
  color: #fff;
  border: 1px solid #ccc!important;
}
</style>