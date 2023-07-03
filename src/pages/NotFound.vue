<template>
    <div class="container-fluid text-center py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 col-sm-10 col-12">
          <h1 class="display-4 font-weight-bold">404</h1>
          <p class="lead">Oops! The page you're looking for doesn't exist.</p>
          <p>Please check the URL and try again.</p>
          <router-link to="/" class="btn btn-primary">Go to Home</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  h1 {
    color: #dc3545;
  }
  </style>