<template>
  <div>
    <p>Micro App page1</p>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    message: String
  },
  created () {
    // alert(111333)
    console.log(this.message)
    // console.log('aaaaaaaaaaacc')
  }
}
</script>

<style scoped>

</style>
