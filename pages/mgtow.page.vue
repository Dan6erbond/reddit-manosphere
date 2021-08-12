<template>
  <div
    class="
      d-flex
      flex-column flex-md-row
      align-items-stretch align-content-stretch
      p-2
    "
  >
    <div>
      <p class="px-2"><strong>Categories</strong></p>
      <ul class="list-group h-100 px-2">
        <li
          v-for="category in categories"
          :key="category.name"
          class="list-group-item"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
    <div class="p-2">
      <section v-for="category in categories" :key="category.name" class="">
        <h2>{{ category.name }}</h2>
        <div
          v-for="submission in category.submissions"
          :key="submission.url"
          class="mb-2"
        >
          <a target="_blank" :href="submission.url" class="text-break">{{
            submission.url
          }}</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categories } from "../src/assets/mgtow-submissions";

export default defineComponent({
  setup() {
    return { categories };
  },
});
</script>
