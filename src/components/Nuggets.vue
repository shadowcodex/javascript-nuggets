<template>
  <div class="m-6 mx-auto max-w-sm">
    <h2>The Latest Nuggets</h2>
    <div
      class="shadow-lg rounded-lg mb-10"
      v-for="nug in nuggets"
      :key="nug.embed"
      :aria-label="nug.description"
      v-html="nug.embed"
    ></div>
  </div>
</template>

<script>
import { tweets } from "../data/nuggets.js";

export default {
  name: "Nuggets",
  data() {
    return {
      nuggets: tweets
    };
  }
};
</script>
