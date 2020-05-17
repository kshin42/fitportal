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
                    <v-container fluid class="templateList">
                        <v-row>
                            <v-col v-for="template in templates" :key="template.Name" align="center" justify="center">
                                <v-card hover max-width="250" style="margin-top: 50px">
                                    <v-img
                                            class="white--text align-end"
                                            height="130px"
                                            width="250px"
                                            src="../assets/running.jpeg"
                                    >
                                        <v-card-title>{{template.Name}}</v-card-title>
                                    </v-img>
                                    <v-card-subtitle class="pb-0">Overview
                                        <v-btn align="right" icon @click="template.show = !template.show">
                                            <v-icon align="right">{{ template.show ? 'fas fa-angle-up' : 'fas fa-angle-down' }}</v-icon>
                                        </v-btn></v-card-subtitle>
                                    <v-expand-transition>
                                        <div v-show="template.show">
                                            <v-divider></v-divider>
                                            <v-card-text class="text-wrap">
                                                {{template.Description}}
                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
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
                    Name: "Step Challenge",
                    Description: "How many steps can you do?",
                    show: false
                },
                {
                    Name: "Squat Challenge",
                    Description: "How many squats can you do?",
                    show: false

                },
                {
                    Name: "Push Up Challenge",
                    Description: "How many push ups can you do?",
                    show: false
                },
                {
                    Name: "Bench Challenge",
                    Description: "Get to your goal bench press weightlhkuadfsafdshjlafjksladfjlhkadfjlhks",
                    show: false
                },
                {
                    Name: "Run Challenge",
                    Description: "Training for a marathon",
                    show: false
                },
                {
                    Name: "Jump Challenge",
                    Description: "How many jumps can you do?",
                    show: false
                },
                {
                    Name: "Weight Challenge",
                    Description: "How much weight can you lose?jfkaddasfjk;fas;as;ldas;",
                    show: false
                },
                {
                    Name: "Burpee Challenge",
                    Description: "How many burpees can you do?",
                    show: false
                },


            ]
        }),
        methods: {



        },
    };
</script>

<style>
    .templateList {
        max-width: 1200px;
    }
</style>