<script lang="ts" setup>
const appConfig = useAppConfig()
defineProps(["withLabels", "isNav"])
</script>
<template>
    <div v-if="appConfig.socials && isNav" class="flex justify-center space-x-3 transition text-primary-500" >
      <a  :href="social.url" :title="social.title" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" :key="social.url" v-for="social in appConfig.socialmedia"><Icon :name="social.icon" class="w-5 h-5" /></a>
    </div>
    <!-- Social media links. Links are listed vertically. Each link has a link title with icon beside it on left and right. -->
    <div class="ml-5">
    <div v-if="!isNav && appConfig.socials" class="flex flex-col justify-center space-y-0 transition text-primary-500" >
      <a  :href="social.url" :title="social.title" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" :key="social.url" v-for="social in appConfig.socialmedia"><Icon :name="social.icon" class="w-5 h-5" /> <span v-if="withLabels" class="text-xs">{{social.title}}</span></a>
    </div>
    </div>
</template>