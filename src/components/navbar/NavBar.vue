<template>
  <div class="nav fixed-top">
    <div class="line_black">
			<div class="container text-right">
				<span>{{ txt }}</span>
				<span class="face">f</span>
			</div>
		</div>
  </div>
</template>

<script>
/* Importando los componentes */
import NavFace from "./NavFace.vue";

export default {
  name: "NavBar",
  components: {
    NavFace,
    HelloWorld,
    NavBar
  },
  props: {
    txt: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line_black {
  font-size: 10px;
}
.line_black {
  font-size: 12px;
  background: #000;
  padding: 5px 0;
}
.line_black * {
  color: #fff;
}
.line_black span {
  cursor: pointer;
}
.line_black .face {
  margin-left: 20px;
  font-weight: 600;
}
</style>