<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()

onMounted(() => {
  const base = document.createElement('base')
  base.setAttribute('target', '_blank')
  document.head.appendChild(base)
})
</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-primary-700 dark:text-primary-200">
      <NuxtLink class="mr-6 font-bold" to="/">
        Shariq Farooq Bhat
      </NuxtLink>
      <a class="mr-6 font-bold" href="/files/Shariq_CV.pdf" target="_blank">
        CV
      </a>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="flex items-center transition space-x-3 transition text-primary-500">
      <!-- <a v-if="appConfig.socials?.twitter" :href="`https://twitter.com/${appConfig.socials?.twitter}`" title="Twitter" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:twitter" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a> -->
      <SocialIcons :isNav="true"/>
      <ColorModeSwitch class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" />
    </div>
  </div>
</template>