<template>
    <div>
         <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotu" :key="item.src">
                <img :src="item.src" alt="">
            </mt-swipe-item>
            
        </mt-swipe>
    </div>
</template>

<script>
export default {
   data() {
       return {
           
       }
   },
   methods: {
       
   },
    props:['lunbotu']
}
</script>

<style lang="scss" scoped>
      .mint-swipe{
       height: 200px;
       img{
           width: 100%;
       }
  
   }
</style>