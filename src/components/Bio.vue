<template>
  <div
    class="border mb-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
  >
    <div class="sm:flex sm:items-center px-6 py-4">
      <img
        class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
        src="@/assets/shannon.jpg"
        alt
      >
      <div class="text-center sm:text-left sm:flex-grow">
        <div class="mb-4">
          <p class="text-xl leading-tight">{{name}}</p>
          <p class="text-sm leading-tight text-grey-dark">{{title}}</p>
        </div>
        <div class="flex flex-wrap">
          <a
            href="https://twitter.com/iamMrDuncan"
            class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white"
          >Twitter</a>
          <a
            href="https://github.com/shadowcodex"
            class="text-xs font-semibold rounded-full px-4 py-1 mx-2 leading-normal bg-white border border-grey-darker text-grey-darker hover:bg-grey-darker hover:text-white"
          >Github</a>
          <a
            href="https://www.linkedin.com/in/jsduncan98/"
            class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-blue-dark text-blue-dark hover:bg-blue-dark hover:text-white"
          >LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  data() {
    return {
      name: "Shannon Duncan",
      title: "Senior Full Stack Developer"
    };
  }
};
</script>

