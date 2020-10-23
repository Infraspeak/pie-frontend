<template>
    <header>
        <h1>pie</h1>
    </header>
    <main>
        <h2>Should we make some pies?</h2>
        <div class="upload">
            <!-- <label for="file">Drag your package.json into the oven or <b>click to upload it</b></label> -->
            <p>Drag your <span>package.json</span> into the oven or <span>click to upload it</span></p>
            <input name="file" type="file" accept="application/JSON" @v-model="file" required/>
            <button @click="loadIssues" :disabled="isLoading">Load Issues</button>
        </div>
        <div>
            <div>{{ file }}</div>
            <div v-for="result in results" :key="result.name">
                {{ result.name }}
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'App',
        data () {
            return {
                file: null,
                isLoading: false,
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
                    this.isLoading = true,
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

:root {
  --blue: #18a0fb;
  --white: #ffffff;
  --grey: #ccc;
  --dark-blue: #24292E;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;

  header {
      background-color: var(--dark-blue);
  }

  main {
    display: flex;
    height: calc(100vh - 50px);
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 2.5rem;
        font-weight: lighter;
    }

    .upload {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50vw;
      height: 20vh;
      background-color: var(--white);
      border: 2px dashed var(--grey);
      border-radius: 20px;
      position: relative;

        p {
            span {
                &:first-of-type {
                    font-weight: bold;
                }

                &:last-of-type {
                    color: var(--blue);
                }
            }
        }

        input[type="file"] {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
    }
  }
}
</style>
