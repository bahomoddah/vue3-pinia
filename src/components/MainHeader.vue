<template>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">
      <img src="/public/vite.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </router-link>
    <div>
    
  
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-heart"></i>
            محمد أحمد

          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">            
            <li><router-link to="/" class="dropdown-item">Home</router-link></li>
            <li><router-link to="/stores/" class="dropdown-item">Stores</router-link></li>
            <li><router-link to="/login/" class="dropdown-item">Login</router-link></li>
          </ul>
        </div>
      
    </div>
  </div>
</nav>
</template>