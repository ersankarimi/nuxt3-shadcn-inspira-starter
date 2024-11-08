<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div
    class="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl min-h-full"
  >
    <span
      class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
    >
      Particles
    </span>
    <InspiraParticlesBg
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      :color="$colorMode.value === 'light' ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
    <UiButton
      class="mt-10 z-10"
      @click="colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'"
    >
      Toggle Theme
    </UiButton>
  </div>
</template>
