<template>
    <div>
      <RegisterPage />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import RegisterPage from '@/components/RegisterPage.vue'
  
  export default {
    name: 'MemberAreaView',
    components: {
      RegisterPage
    }
  }
  </script>
  