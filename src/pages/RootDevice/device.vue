<template>
<div>
        <div class="q-pa-md">
                <q-stepper
                        v-model="step"
                        vertical
                        color="primary"
                        animated
                        >
                        <q-step
                                :name="1"
                                title="Identificación de Dispositivo"
                                icon="fas fa-network-wired"
                                :done="step > 1"
                        >
                                Obteniendo Dirección IP...
                        </q-step>

                        <q-step
                                :name="2"
                                title="Obtener Formulario"
                                icon="far fa-window-maximize"
                                :done="step > 2"
                                >
                                        Obteniendo Formulario para Dirección IP: {{myIP}}...
                        </q-step>

                        <q-step
                                :name="3"
                                title="Redireccionando"
                                icon="assignment"
                        >
                                Redireccionando a {{formToOpen}}...
                        </q-step>
                </q-stepper>
         </div>

        <q-btn
                color="primary"
                @click="$q.fullscreen.toggle()"
                :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
                />
        <p>{{$q.platform}}</p>
        <p>{{$q.sessionStorage.getItem('urlPath')}}</p>
        <p>Mi dirección IP = {{myIP}}</p>
</div>
</template>

<script>
import { colors } from 'quasar'

export default {
        name: 'device',
        data() {
                return {
                        step: 1,
                        myIP: null,
                        formToOpen: null,
                }
        },
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
                },
                async getForm(){
                        const url = this.$q.sessionStorage.getItem('urlPath') + 'spEquipmentGetUI'
                        await this.$axios({
                                method: 'GET',
                                url: url,
                                params: {
                                        userCompany: 1,
                                        ipAddress: this.myIP,
                                }
                        }).then(response => {
                                this.formToOpen = JSON.parse(response.data[0].basic).urlRedirect
                                setTimeout(() => {  this.step = 3;  }, 3000);
                                //return response;
                        }).catch(error => {
                                console.dir(error);
                                return error;
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
                        this.myIP = response.data;
                        setTimeout(() => {  this.step = 2;  this.getForm(); }, 3000);
                }).catch(error => {
                        console.dir(error)
                })
        }
}
</script>