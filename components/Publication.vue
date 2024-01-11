<!-- Nuxt template for showcasing a publication item
    This component shows
    - Title of the paper
    - Authors
    - Publication venue
    - Publication date
    - a teaser image on the right,
    - Links to the paper pdf, the code github, video youtube and any other generic resources. Font awesome icons are used to represent these links.

These are passed as props to the component. The component also accepts a slot for the abstract of the paper. 
 -->

<template>
    <div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-1">
        <div class="transition col-span-2">
        <div class="flex flex-col justify-center">
            <h3 class="text-xl font-bold text-primary-700 dark:text-primary-200">
            {{ title }}
            </h3>
            <p class="text-sm text-primary-700 dark:text-primary-200">
            <a :class="(author.isMe)?'font-bold':(author.url)?'text-blue-500': ''" v-for="(author, index) of parseAuthors(authors)" :href="author.url">{{ author.name }}{{ index == authors.length - 1 ? "": ", "}}</a>
            </p>
            <p class="text-sm text-primary-700 dark:text-primary-200">
            {{ venue }}
            </p>
            <p class="text-sm text-primary-700 dark:text-primary-200">
            {{ date }}
            </p>
        </div>
        </div>
        <div class="transition max-w-sm" v-if="image">
        <img class="rounded-lg" :src="image" alt="Publication Image" />
        </div>
    </div>

    <PaperIcons :pdf="pdf" :code="code" :video="video" :other="other" :project="project"/>
    </div>
</template>

<script setup>
import authorData from "~/data/authors.json";

const parseAuthor = (authorId) => {
    const author = authorData[authorId];
    return author
};

const parseAuthors = (authors) => {
    return authors.map((author) => parseAuthor(author));
};

defineProps(["title", "authors", "venue", "date", "image", "pdf", "code", "video", "other", "project"]);
</script>
