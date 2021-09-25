<template>
<q-form style="margin: -16px;" ref="formulario" greedy autofocus no-error-focus spellcheck="false" autocorrect="off" autocapitalize="off" class="q-gutter-sm q-pa-md">
    <div class="row">
      <q-toggle class="col-4"
        tabindex="-1"
        v-model="estado" icon="fas fa-check" color="positive" label="Estado" :disable="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        />
    </div>
    <q-input
        ref="cod_chofer" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        placeholder="Código del Chofer (*)" label="Código del Chofer (*)" filled
        v-model="cod_chofer"
        :rules="[
                val => !!val || '* Requerido',
                val => val.length > 0 || 'Campo debe tener al menos 1 carateres',
        ]"
        >
        <template v-slot:prepend><q-icon name="far fa-address-card" /></template>
    </q-input>
    <q-input
        ref="cod_chofer_sap" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        placeholder="Código SAP del Chofer (*)" label="Código SAP del Chofer (*)" filled
        v-model="cod_chofer_sap"
        :rules="[
                val => !!val || '* Requerido',
                val => val.length > 0 || 'Campo debe tener al menos 1 carateres',
        ]"
        >
        <template v-slot:prepend><q-icon name="fas fa-address-card" /></template>
    </q-input>
    <q-input
        ref="nombre1" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        placeholder="Primer Nombre del Chofer (*)" label="Primer Nombre del Chofer (*)" filled
        v-model="nombre1"
        :rules="[
                val => !!val || '* Requerido',
                val => val.length > 0 || 'Campo debe tener al menos 1 carateres',
        ]"
        >
        <template v-slot:prepend><q-icon name="far fa-user" /></template>
    </q-input>
    <q-input
        ref="nombre2" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        placeholder="Segundo Nombre del Chofer (*)" label="Segundo Nombre del Chofer (*)" filled
        v-model="nombre2"
        :rules="[
                val => !!val || '* Requerido',
                val => val.length > 0 || 'Campo debe tener al menos 1 carateres',
        ]"
        >
        <template v-slot:prepend><q-icon name="far fa-user" /></template>
    </q-input>
    <q-input
        ref="apellido1" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        placeholder="Apellido Paterno del Chofer (*)" label="Apellido Paterno del Chofer (*)" filled
        v-model="apellido1"
        :rules="[
                val => !!val || '* Requerido',
                val => val.length > 0 || 'Campo debe tener al menos 1 carateres',
        ]"
        >
        <template v-slot:prepend><q-icon name="fas fa-user" /></template>
    </q-input>
    <q-input
        ref="apellido2" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        placeholder="Apellido Materno Nombre del Chofer (*)" label="Apellido Materno del Chofer (*)" filled
        v-model="apellido2"
        :rules="[
                val => !!val || '* Requerido',
                val => val.length > 0 || 'Campo debe tener al menos 1 carateres',
        ]"
        >
        <template v-slot:prepend><q-icon name="fas fa-user" /></template>
    </q-input>
    <q-input
        ref="correo" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        placeholder="Correo del Chofer (*)" label="Correo del Chofer (*)" filled
        v-model="correo"
        :rules="[
                val => !!val || '* Requerido',
                val => val.length > 0 || 'Campo debe tener al menos 1 carateres',
        ]"
        >
        <template v-slot:prepend><q-icon name="fas fa-envelope" /></template>
    </q-input>
    <q-input
        ref="celular" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        placeholder="Celular del Chofer (*)" label="Celular del Chofer (*)" filled
        v-model="celular"
        :rules="[
                val => !!val || '* Requerido',
                val => val.length > 0 || 'Campo debe tener al menos 1 carateres',
        ]"
        >
        <template v-slot:prepend><q-icon name="fas fa-mobile" /></template>
    </q-input>
    <q-input
        label="Comentarios" placeholder="Ingrese comentarios sobre este chofer" filled
        type="textarea" :readonly="(!editMode&&!allow_edit)||(editMode&&!allow_insert)"
        v-model="comments"
        />

    <br><br>
</q-form>
</template>
<script>
/*import Vue from 'vue';
import Vuex from 'vuex';
*/
export default ({
    props: {
        moduleName: { type: String , required: true },
    },
    mounted(){
        this.$refs.formulario.validate()
    },
    computed:{
        userColor: { get () { return this.$store.state.main.userColor }  },
        allow_view: { get () { 
            let resultado = false;
            this.$store.state[this.moduleName].editData.security.filter(x=>x.label=='allow_view').map(y=>{
              resultado = y.value;  
            }).value; 
            return resultado }, 
        },
        allow_edit: { get () { 
            let resultado = false;
            this.$store.state[this.moduleName].editData.security.filter(x=>x.label=='allow_edit').map(y=>{
              resultado = y.value;  
            }).value; 
            return resultado }, 
        },
        allow_insert: { get () { 
            let resultado = false;
            this.$store.state[this.moduleName].editData.security.filter(x=>x.label=='allow_insert').map(y=>{
              resultado = y.value;  
            }).value; 
            return resultado }, 
        },
        allow_report: { get () { 
            let resultado = false;
            this.$store.state[this.moduleName].editData.security.filter(x=>x.label=='allow_report').map(y=>{
              resultado = y.value;  
            }).value; 
            return resultado }, 
        },
        allow_disable: { get () { 
            let resultado = false;
            this.$store.state[this.moduleName].editData.security.filter(x=>x.label=='allow_disable').map(y=>{
              resultado = y.value;  
            }).value; 
            return resultado }, 
        },
        editMode: { get () { return this.$store.state[this.moduleName].editMode }, },
        estado: {
            get () { return this.$store.state[this.moduleName].editData.basic.estado },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'estado', value: val}) }
        },
        cod_chofer: {
            get () { return this.$store.state[this.moduleName].editData.basic.cod_chofer },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'cod_chofer', value: val}) }
        },
        cod_chofer_sap: {
            get () { return this.$store.state[this.moduleName].editData.basic.cod_chofer_sap },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'cod_chofer_sap', value: val}) }
        },
        nombre1: {
            get () { return this.$store.state[this.moduleName].editData.basic.nombre1 },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'nombre1', value: val}) }
        },
        nombre2: {
            get () { return this.$store.state[this.moduleName].editData.basic.nombre2 },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'nombre2', value: val}) }
        },
        apellido1: {
            get () { return this.$store.state[this.moduleName].editData.basic.apellido1 },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'apellido1', value: val}) }
        },
        apellido2: {
            get () { return this.$store.state[this.moduleName].editData.basic.apellido2 },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'apellido2', value: val}) }
        },
        nom_chofer: {
            get () { return this.$store.state[this.moduleName].editData.basic.nom_chofer },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'nom_chofer', value: val}) }
        },
        correo: {
            get () { return this.$store.state[this.moduleName].editData.basic.correo },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'correo', value: val}) }
        },
        celular: {
            get () { return this.$store.state[this.moduleName].editData.basic.celular },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'celular', value: val}) }
        },
        comments:  {
            get () { return this.$store.state[this.moduleName].editData.basic.comments },
            set (val) { this.$store.commit((this.moduleName)+'/updateEditData', {section: 'basic', key: 'comments', value: val}) }
        },
    },
})
</script>
