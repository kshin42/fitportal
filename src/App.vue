<template>
  <v-app app>
    <v-card class="overflow-hidden">
      <v-app-bar
        app
        color="primary"
        dark
        shrink-on-scroll
        prominent
        src="./assets/homepagebanner.jpg"
        fade-img-on-scroll
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(132, 188, 218,.9), rgba(33, 41, 92,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>FitPortal</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Sign In</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <HelloWorld />
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style></style>
