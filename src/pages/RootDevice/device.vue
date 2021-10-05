<template>
<div>
        <q-btn
                color="primary"
                @click="$q.fullscreen.toggle()"
                :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
                />
        <p>{{$q.platform}}</p>
        <p>{{$q.sessionStorage.getItem('urlPath')}}</p>
</div>
</template>

<script>
import { colors } from 'quasar'

export default {
        name: 'device',
        methods:{
                enterFullScreen() {
                       this.$q.fullscreen.toggle()
                },
                async getDefaultConfig(){
                        await this.$axios.get('config.json')
                        .then((response) => {
                        if(response && response.data){
                                this.username = response.data.defaultUser
                                this.password = response.data.defaultPassword
                                this.$q.sessionStorage.set('URL_Data',response.data.URL_Data)
                                this.$q.sessionStorage.set('URL_Port',response.data.URL_Port)
                                this.$q.sessionStorage.set('URL_Path',response.data.URL_Path)
                                this.$q.sessionStorage.set('URL_ws',response.data.URL_ws)
                                this.$q.sessionStorage.set('serverFilesPath',response.data.serverFilesPath)
                                this.$q.sessionStorage.set('serverTempFilesPath',response.data.serverTempFilesPath)
                                this.$q.sessionStorage.set('urlPath',this.$q.sessionStorage.getItem('URL_Data') + (this.$q.sessionStorage.getItem('URL_Port')?(':' + this.$q.sessionStorage.getItem('URL_Port')):'') + this.$q.sessionStorage.getItem('URL_Path'))
                                this.$q.loading.hide()
                        }
                        })
                        .catch((error) => {
                        this.$q.loading.hide()
                        console.error(error)
                        this.$q.notify({
                                color: 'red'
                                ,position: 'bottom'
                                ,message: 'Error al cargar configuración.<br>Revise su conexión a Internet, y luego actualice la página.'
                                ,icon: 'fas fa-exclamation-circle'
                                ,multiLine: true, html: true
                        })
                        })
                }
        },
        async created() {
                this.$q.sessionStorage.clear();//Clear Storage
                this.$q.sessionStorage.set('pathname',window.location.pathname)
                Object.keys(this.$store.state).filter(y=>y=='main').map(x=>{
                        this.$store.commit(x+'/resetToDefaultState')
                })
                colors.setBrand('primary', '#2F74EB') //#1976D2 //ANTES:1867C0 //389ffd //2A68D3 //2F74EB nuevo
                await this.getDefaultConfig();
                const url = this.$q.sessionStorage.getItem('urlPath') + 'getIPaddress'
                this.$axios.get(url)
                .then(response => {
                        console.dir('OK')
                        console.dir(response);
                }).catch(error => {
                        console.dir('Error')
                        console.dir(error)
                })
        }
}
</script>