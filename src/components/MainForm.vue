<template>
    <main>
        <div class="find-document-block">
            <h2 class="find-document-header">Поиск документа</h2>
            <input type="text" class="find-document-input" placeholder="Введите ID документа" v-model="documentName">
            <h2 class="results-document-header">Результаты</h2>
            <div v-show="store.documents.length === 0">
                Ничего не найдено
            </div>
            <div class="results-items" v-show="store.documents.length > 0">
                <ResultsItem v-for="(item, index) in store.documents" v-bind="item" :index="index" :key="item.id"/>
            </div>
        </div>
        <div class="show-document-block">
            <div class="select-document-block" v-show="store.selectedDocument === null">
                <p>Выберите документ, чтобы посмотреть его содержимое</p>
            </div>
            <div class="selected-document-block" v-if="store.selectedDocument">
                <div class="document-img">
                    <img width="424" v-if="store.selectedDocument.image === null" :src="image" alt="">
                    <img width="424" v-if="store.selectedDocument.image !== null" :src="store.selectedDocument.image" alt="">
                </div>
                <div class="document-info">
                    <h2 class="document-info-name">{{ store.selectedDocument.name }}</h2>
                    <div class="document-buttons">
                        <button class="document-button download">Скачать</button>
                        <button class="document-button delete">Удалить</button>
                    </div>
                    <h2 class="document-info-desc-header">Описание</h2>
                    <p class="document-description">
                        {{ store.selectedDocument.description }}
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { ref, watch } from 'vue';
    import { useDocumentsStore } from '../stores/documents'
    import image from '../assets/img-template.png'
    import ResultsItem from '../components/ResultsItem.vue'
    export default {
        name: 'MainForm',
        components: {
            ResultsItem
        },
        setup() {
            const documentName = ref('')
            const store = useDocumentsStore()

            watch(documentName, (currentValue) => {
                store.fetchDocuments(currentValue)
            })

            return {
                documentName, 
                store,
                image 
            }
        }
    }
</script>

<style scoped>
    main {
        display: flex;
        right: 10px;
        background-color: #FDFDFD;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        flex: 1
    }
    h2 {
        margin: 0;
        font-weight: 600;
        font-size: 16px;
    }
    .find-document-block {
        padding-top: 27px;
        padding-left: 20px;
        padding-right: 22px;
        padding-bottom: 60px;
        width: 23%;
    }
    .find-document-header {
        margin-bottom: 14px;
    }
    .find-document-input {
        width: 100%;
        border-radius: 8px;
        padding: 16px 24px;
        border: 1.5px solid #E9ECEF;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 29px;
    }
    .results-document-header {
        margin-bottom: 18px;
    }
    .show-document-block {
        width: 77%;
        border-left: 1px solid #E0E0E0;
    }
    .show-document-block p {
        font-weight: 400;
        font-size: 14px;
        color: #6C757D
    }
    .select-document-block {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .selected-document-block {
        display: flex;
        padding: 30px;
        height: 100%;
    }
    .document-img {
        margin-right: 61px;
    }
    .document-info-name {
        margin-bottom: 21px;
    }
    .document-buttons {
        display: flex;
        margin-bottom: 54px;
    }
    .document-button {
        font-family: 'Montserrat';
        display: flex;
        align-items: center;
        text-align: center;
        padding: 7px 28px;
        border-radius: 8px;
        font-size: 14px;
        line-height: 17px;
        background: transparent;
        cursor: pointer
    }
    .download {
        color: #0D6EFD;
        border: 1px solid #0D6EFD;
        margin-right: 17px;
    }
    .delete {
        color: #DC3545;
        border: 1px solid #DC3545;
    }
    .results-items {
        height: 350px;
        overflow-y: scroll;
    }
</style>