<template>
    <Header/>
    <MainForm/>
</template>

<script>
    import Header from '../components/Header.vue'
    import MainForm from '../components/MainForm.vue'
    //import { onMounted, /*computed*/ } from 'vue';
    //import { useDocumentsStore } from '../stores/documents'

    export default {
       name: 'MainPage',
       components: {
        Header,
        MainForm
       },
       setup() {
        //const store = useDocumentsStore()

        /*const getDocuments = computed(() => {
            return store.getDocuments()
        })

        const documents = computed(() => {
            return store.documents
        })*/

        /*onMounted(() => {
            store.fetchDocuments()
        })*/

    } 
    }
</script>

<style scoped>

</style>