<template>
  <div class="home">
    <!-- Header -->
    <header class="masthead">
      <div class="container-fluid"> 
				<h1 class="title d-flex justify-content-center text-uppercase"> CONECTAMOS A <br class="d-block d-sm-none"> PERSONAS <br class="d-none d-sm-block">PARA QUE<br class="d-block d-sm-none"> CUMPLAN SUS METAS </h1>
				<div class="row pd-btn">
					<div class="col-12 btn-group d-flex justify-content-center">
						<div class="">
							<div>
								<img src="../../assets/images/prestamo.png" class="img-invert">
							</div>
							<button type="button" class="btn btn-primary btn-lg text-uppercase">préstamo</button>
						</div>
						<div class="">
							<div>
								<img src="../../assets/images/inversion.png" class="img-lending">
							</div>							
							<button type="button" class="btn btn-primary btn-lg text-uppercase">invertir</button>
						</div>
					</div>
				</div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
  componets: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header.masthead {
  background-image: url("../../assets/images/banner-home.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #fff;
  text-align: center;
  height: 80vh;
}

.title {
  font-size: 40px;
  padding: 10rem 0;
  text-align: center;
  font-weight: 800;
  line-height: 50px;
  letter-spacing: 0.8px;
}

.img-invert {
	width: 3rem;

	padding: 1rem 0;
}

.img-lending {
	width: 3rem;

	padding: 1rem 0;
}

@media (max-width: 792px) {
  .title {
    font-size: 28px;
    line-height: 1.3;
  }
  .pd-btn {
    padding: 0 5rem;
  }

}
</style>