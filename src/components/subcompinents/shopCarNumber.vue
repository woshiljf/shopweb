<template>
    
         <span class="mui-numbox" data-numbox-min="1" data-numbox-max="9">           
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" ref="txt" :value="goodsCount" @change="getValue" readonly>
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
            // this.$emit("numberValue",this.$refs.txt.value);
            // console.log('max');
          
            this.$store.commit("updateGoodsInfo",{
                count:this.$refs.txt.value,
                id:this.goodsid
            });
        }
    },
    props:["goodsCount","goodsid"],
    mounted() {
        mui(".mui-numbox").numbox()
    },
}
</script>

<style lang="scss" scoped>
    
</style>