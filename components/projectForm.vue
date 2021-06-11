<template>
  <el-dialog :show-close="false" :visible="showForm">
    <div class="description mb-4">
      Please enter project name to open for dicussion.
    </div>
    <el-input
      class="mt-4"
      v-model="projectName"
      @keyup.enter.native="createProject()"
      placeholder="Charlie? Max? Poppy?"
    ></el-input>
  </el-dialog>
</template>

<script>
export default {
  props: ["showForm"],
  data() {
    return {
      projectName: ""
    };
  },
  methods: {
    async createProject() {
      try {
        const response = await this.$axios.post("project", {
          name: this.projectName
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
.el-input__inner {
  -webkit-appearance: none;
  font-family: var(--roboto-mono);
  background-color: var(--darkblue) !important;
  background-image: none;
  border: 3px dashed var(--orange);
  box-sizing: border-box;
  color: var(--gray);
  display: inline-block;
  font-size: 15px;
  height: 50px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  font-weight: bold;
}

.el-input__inner:focus {
  border-color: var(--orange);
}

.el-dialog,
.el-pager li {
  background-color: var(--darkblue);
}

.el-dialog__header {
  padding: 0;
}

.description {
  font-family: var(--roboto);
  font-size: 20px;
  color: var(--gray);
  font-weight: bold;
}
</style>
