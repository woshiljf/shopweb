<template>
    <div>
        <ctm-box :id='id'></ctm-box>
    </div>
</template>

<script>
import comment from '../subcompinents/comment.vue'
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
    components:{
        ctmBox:comment
    }
}
</script>

<style lang="scss" scoped>

</style>