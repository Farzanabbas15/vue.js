<template>

<nav class="navbar navbar-default" >
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand " href="#">Laravel App</a>
    </div>
    <ul class="nav navbar-nav">
      <li > <router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link> </li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
  </div>
</nav>

   
    <router-view></router-view>

</template>
