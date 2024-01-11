<template>
<div class="flex justify-start">

  <div class="flex flex-row justify-center space-x-2">
    <a
      v-if="project"
      :href="project"
      target="_blank"
      class="text-2xl text-primary-700 dark:text-primary-200 hover:text-blue-700 dark:hover:text-blue-300"
    >
      <p class="text-xs inline mr-1">Project Page</p>
      <Icon :name="`fa-solid:globe`" class="w-5 h-5" />
    </a>

    <a
      v-if="pdf"
      :href="pdf"
      target="_blank"
      class="text-2xl text-primary-700 dark:text-primary-200 hover:text-blue-700 dark:hover:text-blue-300"
    >
      <p class="text-xs inline mr-1">PDF</p>
      <Icon :name="`fa-solid:file-pdf`" class="w-5 h-5" />
    </a>

    <a
      v-if="code"
      :href="code"
      target="_blank"
      class="text-2xl text-primary-700 dark:text-primary-200 hover:text-blue-700 dark:hover:text-blue-300"
    >
      <p class="text-xs inline mr-1">Code</p>
      <Icon :name="`fa-brands:github`" class="w-5 h-5" />
    </a>
    <a
      v-if="video"
      :href="video"
      target="_blank"
      class="text-2xl text-primary-700 dark:text-primary-200 hover:text-blue-700 dark:hover:text-blue-300"
    >
      <p class="text-xs inline mr-1">Video</p>
      <Icon :name="`fa-brands:youtube`" class="w-5 h-5" />
    </a>
    <a
      v-if="other"
      :href="other"
      target="_blank"
      class="text-2xl text-primary-700 dark:text-primary-200 hover:text-blue-700 dark:hover:text-blue-300"
    >
        <p class="text-xs inline mr-1">Other</p>
      <Icon :name="`fa-solid:link`" class="w-5 h-5" />
    </a>
  </div>
</div>
</template>

<script setup>
defineProps(["pdf", "code", "video", "other", "project"]);
</script>

