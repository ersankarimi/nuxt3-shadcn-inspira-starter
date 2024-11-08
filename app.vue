<script setup lang="ts">
const seoOptions: SeoConfig = {
  title: "My Site | My site is awesome",
  description: "My site is awesome",
};

useSeoMeta(generateSeoMeta(seoOptions));
useHead(generateHeadConfig(seoOptions));
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
