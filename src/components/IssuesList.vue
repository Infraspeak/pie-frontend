<template>
    <div class="list">
        <div :key="result.repo.name" v-for="result in results">
            <a :href="result.repo.url" target="_blank">
                <h1>{{ result.repo.name }}</h1>
            </a>
            <div class="issues" v-for="issue in result.issues" :key="issue.name">
                <div>
                    <a :href="issue.url">
                        <h2>{{ issue.title }}</h2>
                    </a>
                    <p v-for="tag in issue.tags" :key="tag" class="tags">
                        <span>{{ tag }}</span>
                    </p>
                </div>
                <span>{{ issue.status }}</span>
                <span>#{{ issue.id }} opened {{issue.date_opened}} ago by {{issue.author}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Issues list',
        props: {
            results: Array
        }
    })
</script>

<style lang="scss">
    .list {
        background-color: var(--issues);
        height: 100%;
        width: 100%;
        padding: 1rem 1rem;

        > div{
            border-bottom: 2px solid var(--grey);

            a {
            text-decoration: none;
                h1 {
                    color: var(--dark-blue);
                    display: inline-block;
                }
            }
            .issues {
                > div {
                    color: var(--black);
                    .tags {
                        display: flex;

                        span {
                            background: var(--tag);
                            color: var(--button);
                            border-radius: 20px;
                            padding-right: 1rem;
                        }
                    }
                }

                span {
                    &:first-child {
                        color: var(--description);
                    }

                    &:last-child {
                        color: var(--description);
                    }
                }
            }
        }
    }
</style>
