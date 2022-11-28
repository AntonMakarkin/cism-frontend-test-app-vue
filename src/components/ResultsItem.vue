<template>
    <div class="results-item-block" @click="setupDocument">
        <div class="image-block">
            <img v-if="image === null" :src="imageFile" alt="">
            <img v-if="image !== null" :src="image" alt="">
        </div>
        <div class="document-name">
            <h2>{{ name }}</h2>
            <p>12 MB</p>
        </div>
    </div>
</template>

<script>
    import { useDocumentsStore } from '../stores/documents'
    import imageFile from '../assets/img-template.png'
    export default {
        name: 'ResultsItem',
        props: {
            id: Number,
            name: String,
            description: String,
            image: {
                type: String,
                default: ''
            }
        },
        setup() {
            const store = useDocumentsStore()

            const setupDocument = (event) => {
                const documentIndex = event.target.getAttribute('index')
                store.selectDocument(documentIndex)
            }

            return {
                setupDocument,
                store,
                imageFile
            }
        }
    }
</script>

<style scoped>
    .results-item-block {
        display: flex;
        /*width: 240px;*/
        height: 70px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-bottom: 18px;
        cursor: pointer
    }

    .document-name {
        padding: 15px;
    }

    .document-name p {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #6C757D;
    }

    .image-block {
        width: 30%;
        height: 100%;
    }

    .image-block img {
        width: 100%;
        height: 100%;
        border-radius: 10px 0px 0px 10px;
    }

    .results-item-block h2 {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 6px;
    }
</style>