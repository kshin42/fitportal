<template>
  <v-app-bar id="navbar" app color="secondary" dark flat>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title><v-btn text large dark to="/">FitPortal</v-btn></v-toolbar-title>
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
</template>
