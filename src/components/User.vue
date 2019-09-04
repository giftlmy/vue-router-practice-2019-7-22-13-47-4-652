<template>
  <div>
      <div>
          姓名：{{username}}
      </div>
      <div>
          头像：<img src="@/assets/logo.png" /> 
      </div>
      <div>
          电话：13223719420
      </div>
  </div>
</template>

<script>
export default {
    props:['username'],

}
</script>

<style>

</style>