<template>
<div>
  <mu-date-picker hintText="竖屏模式选择" v-model="value"/> 
  <div @click="handleClick()">
111
  </div>
  <datebar></datebar>
  
 
  <Maps></Maps>
</div>
  
 
</template>
<script>


export default{
  name:'test',
  data(){
    return{
     
      value:'',
     
    }
  },
  components:{
    'Maps': () => import('@/components/common/map.vue'),
     'datebar': () => import('@/components/common/datebar.vue')
  },
  computed:{
    old:()=>{
      
      return this.value;
    }
  },
  mounted () {
     // this.initMap();
  },
  methods:{
    
    handleClick: function() {
        console.log(this.value)
      
    },
     initMap(){
       

     }
    
 
  }
}
  
</script>
<style scoped>

</style>
