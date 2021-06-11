<template>
  <div class="main" v-loading="loadingProject">
    <div v-if="!_.isEmpty(projects)">
      <div v-for="(project, key) in projects" :key="key">
        <div class="project" v-show="key == currentProject">
          <div class="project-content">
            <div class="project-author">@{{ project.created_by }}</div>
            <div class="project-name">{{ project.name }}</div>
          </div>
          <div class="comment-title mt-4">Comment</div>
          <div class="comment overflow-auto">
            <div v-for="(comment, idx) in project.comments" :key="idx">
              <div>
                <span>@{{ comment.created_by }}</span
                >{{ comment.my_comment }}
              </div>
            </div>
            <div v-if="_.isEmpty(project.comments)" class="comment-empty">
              @No comment found yet.
            </div>
          </div>
          <el-input
            @keyup.enter.native="createComment(key, project._id)"
            class="comment-input mt-4"
            :placeholder="`Write a comment`"
            v-model="comment"
          ></el-input>
        </div>
      </div>
      <div class="d-flex mt-4 pagination cursor-pointer">
        <div v-if="showPrev" @click="changeTab(false)">Prev</div>
        <div v-if="showNext" class="ml-auto" @click="changeTab()">
          Next
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="showUserForm"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <div class="form-1">
        <div v-if="!loading">
          <div class="welcome text-justify">
            Hi, human may I know what I can call <br />you?
          </div>
          <el-input
            class="mt-4"
            v-model="username"
            @keyup.enter.native="updateUsername()"
            placeholder="Charlie? Max? Poppy?"
          ></el-input>
        </div>
        <cyber-danger v-else />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import cyberDanger from "../components/cyberDanger.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    cyberDanger
  },
  data() {
    return {
      projects: [],
      currentProject: 0,
      comment: "",
      showUserForm: false,
      username: "",
      loading: false,
      loadingProject: false
    };
  },
  mounted() {
    this.$socket.on("connect", () => {
      console.log("connected to socket");
    });

    this.$socket.on("updated-comment", response => {
      this.getProjects();
    });

    // check if user had username
    const user = localStorage.getItem("username");
    // alert("username", user);
    if (!user) this.showUserForm = true;
    else this.updateUser(user);
  },
  created() {
    this.getProjects();
  },
  computed: {
    showPrev() {
      return !this.currentProject == 0;
    },
    showNext() {
      return this.currentProject != this.projects.length - 1;
    }
  },
  methods: {
    ...mapMutations({
      updateUser: "user/updateUser"
    }),
    async getProjects() {
      this.loadingProject = true;
      const { data } = await this.$axios("project");
      this.projects = _.reverse(data);
      this.loadingProject = false;
    },
    changeTab(foward = true) {
      foward ? (this.currentProject += 1) : (this.currentProject -= 1);
    },
    async createComment(idx, id) {
      try {
        const form = {
          created_by: this.$store.state.user.username,
          my_comment: this.comment
        };

        const result = await this.$axios.post(`project/${id}/comment`, form);

        this.projects[idx].comments.push(form);
        this.comment = "";
      } catch (err) {
        console.log(err);
      }
    },
    async updateUsername() {
      try {
        this.loading = true;
        await this.updateUser(this.username);
        this.loading = false;
        this.showUserForm = false;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style src="../assets/index.css"></style>
