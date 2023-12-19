<script setup>
import { brandSelectionContent } from "@/@core/constants/home-view";
</script>

<template>
  <section id="whyUs" class="container text-start md:text-center pt-20 md:pt-40">
    <h2 class="text-2xl lg:text-3xl xl:text-4.5xl 3xl:text-5.5xl font-bold mb-8 lg:mb-10 3xl:mb-16">
      {{ brandSelectionContent.heading }}
    </h2>

    <template v-for="(content, i) in brandSelectionContent.descriptions" :key="i">
      <p class="text-lg 2xl:text-3xl md:pt-6">
        {{ content }}
      </p>
    </template>
  </section>
</template>
