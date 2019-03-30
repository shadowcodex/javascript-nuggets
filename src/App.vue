<template>
  <div class="container mx-auto py-10">
    <About/>
    <Bio/>
    <Subscribe/>
    <Nuggets/>
    <div class="m-6 mx-auto max-w-sm">
      <a href="/rss.xml">RSS Feed</a>
    </div>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Bio from "./components/Bio.vue";
import Nuggets from "./components/Nuggets.vue";
import Subscribe from "./components/Subscribe.vue";

export default {
  name: "app",
  components: {
    About,
    Bio,
    Nuggets,
    Subscribe
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>