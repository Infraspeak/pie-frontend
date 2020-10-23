<template>
    <div class="issues">
        <div class="list" :key="result.repo.name" v-for="result in results">
            <a :href="result.repo.url">
                <h1>{{ result.repo.name }} ({{ result.issues.length }})</h1>
            </a>
            <div v-for="issue in result.issues" :key="issue.name">
                <div>
                    <a :href="issue.url">
                        <h2>{{ issue.title }}</h2>
                    </a>
                    <p v-for="tag in issue.tags" :key="tag">{{ tag }}</p>
                </div>
                <span>{{ issue.status }}</span>
                <span>{{ issue.id }} opened {{issue.date_opened}} ago by {{issue.author}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    interface ComponentData {
        results: [];
    }

    export default defineComponent({
        name: 'Issues list',
        data (): ComponentData {
            return {
                results: []
            }
        }
    })
</script>

<style lang="scss">
</style>
