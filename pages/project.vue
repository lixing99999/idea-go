<template>
  <div class="project px-4 mt-5">
    <div
      @click="showForm = !showForm"
      class="d-flex justify-content-end add-new-button mb-5"
    >
      <div class="add-new-icon">
        <i class="el-icon-plus"></i>
      </div>
      <div class="add-new-title">Add Project</div>
    </div>

    <div class="d-flex title" v-if="!_.isEmpty(projects)">
      <div class="col-md-2">Created At</div>
      <div class="col-md-5">Name</div>
      <div class="col-md-2">By Who</div>
      <div class="col-md-2">Comments</div>
      <div class="col-md-1"></div>
    </div>
    <div v-loading="loading">
      <div class="d-flex mt-3" v-for="(project, key) in projects" :key="key">
        <div class="col-md-2 created-at">
          {{ $moment(project.created_at).format("YYYY-MM-DD") }}
        </div>
        <div class="col-md-5 name">{{ project.name }}</div>
        <div class="col-md-2 created-by">{{ project.created_by }}</div>
        <div class="col-md-2 comment">{{ project.comments.length }}</div>
        <div class="col-md-1">
          <i class="fa fa-external-link fa-2x align-self-center "></i>
        </div>
      </div>
    </div>
    <project-form :showForm="showForm" />
  </div>
</template>

<script>
import projectForm from "../components/projectForm.vue";
import cyberLoading from "../components/cyberLoading.vue";
export default {
  components: {
    projectForm,
    cyberLoading
  },
  data() {
    return {
      projects: [],
      showForm: false,
      loading: true
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      this.loading = true;
      const { data } = await this.$axios("project");
      this.projects = data;
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.title {
  font-family: var(--roboto);
  color: var(--darkgrey);
  font-weight: bold;
}

.created-at {
  font-weight: bold;
  font-family: var(--roboto);
  color: var(--orange);
}

.name {
  font-weight: bold;
  font-family: var(--roboto);
  color: var(--darkgrey);
}

.created-by {
  font-weight: bold;
  font-family: var(--roboto-mono);
  color: var(--darkgrey);
}

.comment {
  font-weight: bold;
  font-family: var(--roboto-mono);
  color: var(--darkgrey);
}

.add-new-icon {
  border: 3px dashed var(--orange);
  width: 36px;
  height: 36px;
  color: var(--orange);
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
}

.add-new-title {
  margin-left: 20px;
  align-self: center;
  color: var(--gray);
  font-size: 20px;
  font-family: var(--roboto-mono);
  font-weight: bold;
}
</style>
