<script setup>
import brandUrls from "~/data/branding.json";
</script>

<template>
    <div class="max-w-full">
        <div class="flex flex-row justify-center">
            <img class="m-auto max-w-[6rem] rounded-lg" v-for="brand in brandUrls" :src="brand.url" :alt="brand.title" />
        </div>
    </div>
</template>