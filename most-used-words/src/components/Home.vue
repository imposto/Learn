<template>
    <v-container fluid>
        <v-form>
            <v-file-input 
            multiple 
            chips 
            v-model="files" 
            outlined 
            prepend-icon="mdi-message-text" 
            label="Selecione as Legendas" 
            append-outer-icon="mdi-send"
            @click:append-outer="processSubtitles"/>
        </v-form>
        <div class="pills">
            <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"/>
        </div>
    </v-container>
</template>

<script>
import Pill from './Pill'
import {ipcRenderer} from 'electron'
export default {

    components: {Pill},
    data: function(){
        return {

            files: [],

            groupedWords: [

                { name: 'you', amount: 900},
                { name: 'time', amount: 830},
                { name: 'jonas', amount: 700},
            ]
        }
    },
    methods:{
        processSubtitles(){
            console.log(this.files)

            ipcRenderer.send('blabla', 'ping')
            ipcRenderer.on('blabla', (event, resp) =>{
                console.log(resp)
            })
        }
    }
}
</script>

<style>
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>