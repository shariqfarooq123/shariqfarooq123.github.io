<template>
    <div class="flex">
        <div class="mr-3 mt-1" v-if="image">
            <img class="max-w-[6rem] rounded-lg" :src="image" alt="Experience Image" />
        </div>
        <div class="col-span-2 mr-auto text-sm">
            <ContentSlot :use="$slots.default" unwrap="p"/>
        </div>
    </div>
</template>

<script setup>
defineProps(["title", "organization", "location", "date", "image"]);
</script>
