<template>
  <div class="container mx-auto p-2">
    <About/>
    <Subscribe/>
    <Nuggets/>
    <Bio/>
    <Footer/>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Bio from "./components/Bio.vue";
import Nuggets from "./components/Nuggets.vue";
import Subscribe from "./components/Subscribe.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    About,
    Bio,
    Nuggets,
    Subscribe,
    Footer
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>