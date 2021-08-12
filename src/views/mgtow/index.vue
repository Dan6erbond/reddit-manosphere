<template>
  <div class="d-flex flex-column flex-md-row align-items-stretch align-content-stretch p-2">
    <ul class="list-group h-100">
      <li
        v-for="category in categories"
        :key="category.name"
        class="list-group-fitem"
      >
        {{ category.name }}
      </li>
    </ul>
    <div class="p-2">
      <section v-for="category in categories" :key="category.name" class="">
        <h2>{{ category.name }}</h2>
        <div v-for="submission in category.submissions" :key="submission.url">
          <a target="_blank" :href="submission.url">{{ submission.url }}</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categories } from "../../assets/mgtow-submissions";

export default defineComponent({
  setup() {
    return { categories };
  },
});
</script>
