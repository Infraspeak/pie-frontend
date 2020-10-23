<template>
    <div>
        <h1>Should we make some pies?</h1>
        <label for="file">Drag your package.json into the oven or click to upload it</label>
        <input name="file" type="file" accept="application/JSON" @v-model="file" required/>
        <button @click="loadIssues">Load Issues</button>
        <div>
            <div>{{ file }}</div>
            <div v-for="result in results" :key="result.name">
                {{ result.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'App',
        data () {
            return {
                file: null,
                results: []
            }
        },
        watch: {
            file (value) {
                console.log(value)
            }
        },
        methods: {
            loadIssues () {
                this.results = [
                    { name: 'issue 1' },
                    { name: 'issue 2' },
                    { name: 'issue 3' },
                    { name: 'issue 4' }
                ]
            }
        }
    })
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
