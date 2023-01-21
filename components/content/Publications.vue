<template>
  <div class="grid grid-cols-1 gap-1 space-y-10">
    <Publication v-for="paper in papers" :key="paper.title" v-bind="paper" />
  </div>
</template>

<script setup>
import papers from "~/data/papers.json";
</script>