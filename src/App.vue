<template>
    <div>
        <form>
            <label for="file">Insert file</label>
            <input name="file" type="file" accept="application/JSON" @v-model="file"/>
            <button>Upload</button>
        </form>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'App',
        data () {
            return {
                file: null
            }
        },
        watch: {
            file (value) {
                console.log(value)
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
