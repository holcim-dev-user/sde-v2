<template>
        <q-btn
                color="primary"
                @click="$q.fullscreen.toggle()"
                :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
                />
</template>

<script>

export default {
        name: 'device',
        methods:{
                enterFullScreen() {
                       this.$q.fullscreen.toggle()
                }
        },
        created() {
                this.enterFullScreen();
        }
}
</script>