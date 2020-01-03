<template>
  <div class="toast" v-show="isShow">
    <div>{{messsage}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
        messsage:'',
        isShow:false
    };
  },
  methods:{
    show(messsage,duration=2000){
      this.isShow=true
      this.messsage=messsage

      setTimeout(()=>{
        this.isShow=false
        this.messsage=''
      },duration)
      }
  }
};
</script>

<style scoped>
.toast {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50% ,-50%);
  padding: 8px 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>