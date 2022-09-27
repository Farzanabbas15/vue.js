
import store from '../store';
<template>

  <nav class="navbar navbar-default">

    <router-link class="navbar-band" :to="{name : 'Home'}">Home {{ $store.getters.token }}</router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="text-white" to="{name : 'Login' }">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="text-white" to="{name : 'Register' }">Register</router-link>
      </li>
      <li class="nav-item">
        <router-link class="text-white" to="{name : 'Dashboard' }">Dashboard</router-link>
      </li>

    </ul>

  </nav>
  <router-view></router-view>

</template>
