<template>
    <header>
        <a href="/">
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.9752 9.43394C26.6281 9.43394 26.4298 9.38435 26.2314 9.28518C24.4959 4.3265 19.8347 0.706665 14.281 0.706665C8.67769 0.706665 4.01653 4.3265 2.28099 9.28518C2.08264 9.38435 1.8843 9.43394 1.58678 9.43394C0.694215 9.43394 0 10.1777 0 11.0207C0 11.9133 0.694215 12.6075 1.58678 12.6075C3.17355 12.6075 4.06612 11.9629 4.61157 11.5166C5.10744 11.1695 5.2562 11.0207 5.80165 11.0207C6.34711 11.0207 6.49587 11.1695 6.99174 11.5166C7.53719 11.9629 8.42975 12.6075 10.0165 12.6075C11.6033 12.6075 12.4959 11.9629 13.0909 11.5166C13.5372 11.1695 13.7355 11.0207 14.281 11.0207C14.7769 11.0207 14.9752 11.1695 15.4215 11.5166C16.0165 11.9629 16.9091 12.6075 18.4959 12.6075C20.0826 12.6075 20.9752 11.9629 21.5702 11.5166C22.0165 11.1695 22.2149 11.0207 22.7107 11.0207C23.2562 11.0207 23.4545 11.1695 23.9008 11.5166C24.4959 11.9629 25.3884 12.6075 26.9752 12.6075C27.8182 12.6075 28.562 11.9133 28.562 11.0207C28.562 10.1777 27.8182 9.43394 26.9752 9.43394ZM10.2149 5.0703L9.42149 6.65708C9.27273 6.90501 9.02479 7.05377 8.72727 7.05377H8.67769C8.28099 7.05377 7.8843 6.70667 7.8843 6.26038C7.8843 6.16121 7.93388 6.01245 7.98347 5.91328L8.77686 4.3265C8.92562 4.07857 9.17355 3.88022 9.52066 3.88022C9.91736 3.88022 10.314 4.27691 10.314 4.67361C10.314 4.82237 10.2645 4.97113 10.2149 5.0703ZM15.0744 6.26038C15.0744 6.70667 14.6777 7.05377 14.281 7.05377C13.8347 7.05377 13.4876 6.70667 13.4876 6.26038V4.67361C13.4876 4.27691 13.8347 3.88022 14.281 3.88022C14.6777 3.88022 15.0744 4.27691 15.0744 4.67361V6.26038ZM20.1818 7.00419C20.0826 7.05377 19.9339 7.05377 19.8347 7.05377C19.4876 7.05377 19.2397 6.90501 19.0909 6.65708L18.2975 5.0703C18.2479 4.97113 18.2479 4.82237 18.2479 4.72319C18.2479 4.27691 18.595 3.92981 19.0413 3.92981C19.3388 3.92981 19.5868 4.07857 19.7355 4.3265L20.5289 5.91328C20.5785 6.01245 20.5785 6.16121 20.5785 6.26038C20.5785 6.60749 20.4298 6.85543 20.1818 7.00419ZM22.0661 17.3678H6.44628L5.05785 13.1529C4.41322 13.5992 3.61983 13.9463 2.82645 14.0951L4.36364 18.7067C4.56198 19.3017 5.15702 19.748 5.90083 19.748H22.6116C23.3554 19.748 23.9504 19.3017 24.1488 18.7067L25.686 14.0951C24.8926 13.9463 24.0992 13.5992 23.4545 13.1529L22.0661 17.3678Z" fill="white"/>
            </svg>
        </a>
    </header>
    <main>
        <FileUploader v-show="!this.file && !isLoading" @file-uploaded="onFileUploaded"/>
        <Loading v-show="isLoading" />
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Pusher from 'pusher-js'

    import FileUploader from './components/FileUploader.vue'
    import Loading from './components/Loading.vue'

    Pusher.logToConsole = true

    // const pusher = new Pusher('9e8983378d5ecccac51e', {
    //     cluster: 'eu'
    // })

    // const channel = pusher.subscribe('my-channel')

    interface ComponentData {
        uuid: string | null;
        file: File | null;
        isLoading: boolean;
        results: Result[];
    }

    type IssueStatus = 'open' | 'closed'

    interface Issue {
        url: string;
        title: string;
        description: string;
        author: string;
        status: IssueStatus;
        tags: string[];
        id: string;
        date_opened: any;
    }

    interface Result {
        repo: {
            name: string;
            url: string;
        };
        issues: Issue[];
    }

    export default defineComponent({
        name: 'App',
        components: {
            FileUploader,
            Loading
        },
        data (): ComponentData {
            return {
                uuid: null,
                file: null,
                isLoading: false,
                results: []
            }
        },
        watch: {
            file (value) {
                console.log('file', value)
            }
        },
        methods: {
            onFileUploaded (file: File) {
                this.isLoading = true
                this.file = file
            },
            createUUID () {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
                    return v.toString(16)
                })
            },
            async generateUUID () {
                this.uuid = this.createUUID()

                const reponse = await fetch('url', {
                    method: 'POST',
                    body: JSON.stringify({
                        uuid: this.uuid
                    })
                })

                const data = await reponse.json()
                console.log('data', data)
            }
        },
        async created () {
            // await this.generateUUID()

            // channel.bind('my-event', this.onIssuesUpdate)
        }
    })
</script>

<style lang="scss">
#app {
  header {
      height: 50px;
      padding: 0 1rem;
      display: flex;
      background-color: var(--dark-blue);
      align-items: center;
  }

  main {
    display: flex;
    height: calc(100vh - 50px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
