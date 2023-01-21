<script setup>
const appConfig = useAppConfig()
defineProps(['profilePicture'])
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
        <!-- Profile picture -->
        <div class="max-w-[10rem] m-auto text-primary-700 dark:text-primary-200">
            <img class="rounded-full" :src="profilePicture" alt="Profile Picture">
            <!-- Icons spread horizontally -->
            <SocialIcons :withLabels="true"/>
        </div>
        <!-- Profile details -->
        <div class="transition text-md">
            <ContentSlot :use="$slots.default" unwrap="p"/>
            <!-- Two tailwind styled buttons side-by-side "Download CV" and "Contact Me" -->
            <div class="flex justify-center mt-3 space-x-3 transition text-primary-500">
                <a :href="`mailto:${appConfig.contact}`" class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-primary-600 border border-transparent rounded-md active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
                    <Icon :name="'fa-solid:envelope'" class="w-5 h-5" />
                    <span>Contact Me</span>
                </a>
                <a :href="appConfig.cv" class="inline-flex items-center px-6 py-2 space-x-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-sky-600 border border-transparent rounded-md active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
                    <Icon :name="'fa-solid:file-pdf'" class="w-5 h-5" />
                    <span>CV</span>
                </a>
            </div>
        </div>
    </div>
</template>