<template>
    <div class="list">
        <div :key="result.repo.name" v-for="result in results">
            <a :href="result.repo.url" class="list-repo-title" target="_blank">
                <h2>{{ result.repo.name }}</h2>
            </a>
            <div class="issues" v-for="issue in result.issues" :key="issue.name">
                <div>
                    <a :href="issue.url" >
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
        width: 100%;
        padding: 1rem 1rem;

        > div{
            border-top: 2px solid var(--grey);
            margin-top: 32px;

            a {
            text-decoration: none;
                h2 {
                    color: var(--dark-blue);
                    display: inline-block;
                }
            }
            .list-repo-title {
                h2 {
                    font-size: 25px;
                    text-transform: uppercase;
                    color: var(--blue);
                }
            }
            .issues {
                border-top: 1px solid var(--grey);
                padding-bottom: 10px;
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
