<template>
  <div>
    <nav class="d-flex justify-content-between p-4">
      <div class="w-100 align-self-center"><a href="/">IDEA GO</a></div>
      <ul class="navigation d-flex align-self-center">
        <ol>
          <a href="about"><span>01.</span>About</a>
        </ol>
        <ol>
          <a href="project"><span>02.</span>Projects</a>
        </ol>
      </ul>

      <div
        class="sidebar d-none align-self-center p-3"
        @click="handleSidebar(true)"
      >
        <div class="bar"></div>
        <div class="bar mt-2"></div>
        <div class="bar mt-2"></div>
      </div>

      <div id="side-menu">
        <div class="p-4">
          <div
            class="float-right sidebar d-none align-self-center p-3"
            @click="handleSidebar(false)"
          >
            <div class="slash mt-2"></div>
            <div class="back-slash mb-2"></div>
          </div>
          <div class="text-center" style="margin-top:200px">
            <div>01.</div>
            <div class="item "><a href="about">About</a></div>
            <div class="mt-4">02.</div>
            <div class="item "><a href="project">Project</a></div>
          </div>
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    username() {
      return localStorage.getItem("username");
    }
  },
  mounted() {},
  methods: {
    handleSidebar(open) {
      document.getElementById("side-menu").style.width = open ? "350px" : "0";
    }
  }
};
</script>

<style src="../assets/style.css">
body {
  height: 100vh;
}
</style>
