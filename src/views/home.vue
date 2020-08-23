<template>
  <div>
     <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
name:"home",
  data () {
    return {
      name:""
    }
  },
  created(){
    console.log(this.$route)
  }
}
</script>

<style  scoped>

</style>
