import { defineStore } from 'pinia'
import axios from 'axios'

export const useDocumentsStore = defineStore("document", {
    state: () => ({
        documents: [],
        selectedDocument: null
    }),
    getters: {
        getDocuments(state) {
            return state.documents
        },
        getDocument(state) {
            return state.selectedDocument
        }
    },
    actions: {
        async fetchDocuments(search) {
            try {
                const data = await axios.get(`https://agile-sands-40710.herokuapp.com/user/docs?search=${search}`)
                console.log(search)
                this.documents = data.data
            } catch (err) {
                alert(err)
                console.log(err)
            }
        },
        selectDocument(index) {
            this.selectedDocument = this.documents[index]
        }
    }
})