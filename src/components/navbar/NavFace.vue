<template>
  <div class="nav">
    <div class="line_black">
			<div class="container text-right">
				<span>{{ txt }}</span>
				<span class="face">f</span>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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