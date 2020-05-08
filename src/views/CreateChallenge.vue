<template>
  <div>
    <NavBar />
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="4" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="secondary" dark flat>
                <v-toolbar-title>Create Your Tasks</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-row>
                    <v-col cols="8">
                      <v-text-field
                        clearable
                        v-model="newTask"
                        class="taskInput"
                        label="Challenge Item"
                        type="text"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        clearable
                        v-model="newPoints"
                        class="taskInput"
                        label="Point Count"
                        type="text"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" id="addTaskBtn" @click="addTask"
                      >Add Task</v-btn
                    >
                  </v-row>
                  <v-row>
                    <v-divider
                      style="margin-top: 25px;margin-bottom: 35px"
                    ></v-divider>
                  </v-row>
                  <div class="bill" v-for="task in tasks" :key="task.taskName">
                    <v-row>
                      <v-col cols="8">
                        <v-text-field
                          class="taskInput"
                          :value="task.taskName"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field
                          class="taskInput"
                          :value="task.pointValue"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-btn
                        style="margin-top:30px;margin-left:15px"
                        icon
                        color="red"
                        @click="removeTask(task.taskName)"
                      >
                        <v-icon>mdi-window-close</v-icon>
                      </v-btn>
                    </v-row>
                  </div>
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-btn
                      v-if="submitShow"
                      color="error"
                      id="submit"
                      @click="submitChallenge"
                      >Create Challenge</v-btn
                    >
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions> </v-card-actions>
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
  name: "CreateChallenge",
  components: {
    NavBar,
  },
  data: () => ({
    newTask: "",
    newPoints: "",
    tasks: [],
    submitShow: false,
  }),
  methods: {
    addTask() {
      if (this.newTask && this.newPoints) {
        this.tasks.push({
          taskName: this.newTask,
          pointValue: this.newPoints,
        });
        this.newTask = "";
        this.newPoints = "";
      }
      this.submitShow = true;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
      if (this.tasks.length == 0) {
        this.submitShow = false;
      }
    },
  },
};
</script>

<style>
.taskInput {
  margin-left: 10px;
  margin-right: 15px;
}
#addTaskBtn {
  margin-right: 30px;
}
</style>
