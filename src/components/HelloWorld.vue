<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>
        My name is Kevin Chung, and I'm a frontend developer and UI/UX designer.
    </p>
    <p>
        I'm currently spiffing up my resume at this time. Meanwhile, you can check out
        <a href="https://www.linkedin.com/in/kevinclchung/">my CV on LinkedIn: kevinclchung</a>.
    </p>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
