<template>
    <div class='main'>
        <div><img src="@/assets/logo.png" /></div>
        <div><H1>weclome to 瑶子星球</H1></div>
    
     <div> 
         你的名字：<input type="text" v-model="message">
    </div>
    <div>
         <button @click="start">开始使用</button>
     </div>
    </div>
</template>

<script>


export default {
    
    name:'weclome',
    props:['username'],
    data: function() {
        return {
            message: ""
        }

    },
    methods: {
    start: function() {
      this.$router.push("/MainView/" + this.message);
    }
  }
}
</script>

<style>
.main {
  text-align: center;
}

</style>