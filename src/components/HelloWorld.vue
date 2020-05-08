<template>
  <v-parallax
    id="launchimage"
    dark
    src="../assets/homepagebannergradient.png"
    height="700"
  >
    <h1>Challenge Yourself</h1>
    <h2 class="subheading">Create your own fitness challenge today!</h2>
    <v-btn id="startbutton" large color="primary" to="/createChallenge"
      >Start</v-btn
    >
  </v-parallax>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>

<style>
h1 {
  font-size: 80px;
  margin-left: 80px;
  padding-top: 200px;
}

h2 {
  margin-left: 90px;
}

#startbutton {
  width: 100px !important;
  margin-top: 2em;
  margin-left: 90px;
}
</style>
