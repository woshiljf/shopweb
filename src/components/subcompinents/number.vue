<template>
    
         <span class="mui-numbox" data-numbox-min="1" data-numbox-max="9">           
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" ref="txt" value="1" @change="getValue">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		 </span>
    
</template>

<script>
import mui from '../../lib1/mui/js/mui.js'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getValue(){
            // console.log(this.$refs.txt.value);
            this.$emit("numberValue",this.$refs.txt.value);
            // console.log('max');
            console.log(this.max)
        }
    },
    props:["max"],  //双引号
    mounted() {
        mui(".mui-numbox").numbox()
    },
}
</script>

<style lang="scss" scoped>
    
</style>