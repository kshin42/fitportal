<template>
  <div>
    <NavBar />
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-icon color="tertiary" class="fitportalicon">fas fa-heartbeat</v-icon>
        </v-row>
        <v-divider></v-divider>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="4" md="6">
                <p class="font-weight-thin text-center qh1">Choose a Template or Create Your Own?</p>
                <v-card-text>
                  <v-row align="center" justify="center">
                    <v-btn x-large to="templates">Choose a Template</v-btn>
                    <v-divider
                            class="mx-4"
                            inset
                            vertical
                    ></v-divider>
                    <v-btn x-large to="customizeChallenge">Custom Challenge</v-btn>
                  </v-row>
                </v-card-text>
                <v-card-actions> </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "CreateChallenge",
  components: {
    NavBar,
  },
  data: () => ({

  }),
  methods: {



  },
};
</script>

