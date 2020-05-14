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
                        <p class="font-weight-thin text-center qh1">Choose a Template or Go Back? <v-btn to="createChallenge" icon color="accent"><v-icon>fas fa-arrow-left</v-icon></v-btn></p>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col cols="auto" v-for="(template, index) in templates" v-bind:key="index">
                        <v-card hover>
                          <v-img
                              class="white--text align-end"
                              height="130px"
                              width="250px"
                              src="../assets/running.jpeg"
                          >
                              <v-card-title>{{template.Name}}</v-card-title>
                          </v-img>
                        </v-card>
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
        name: "Templates",
        components: {
            NavBar,
        },
        data: () => ({
            templates: [
                {
                    Name: "Step Challenge"
                },
                {
                    Name: "Squat Challenge"
                },
                {
                    Name: "Push Up Challenge"
                },
                {
                    Name: "Bench Challenge"
                },
                {
                    Name: "Run Challenge"
                },
                {
                    Name: "Jump Challenge"
                },
                {
                    Name: "Weight Challenge"
                },
                {
                    Name: "Burpee Challenge"
                },


            ]
        }),
        methods: {



        },
    };
</script>