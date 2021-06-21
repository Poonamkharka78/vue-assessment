<template>
  <div class="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="#" class="navbar-brand">Vue Assessment</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item active">
                <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
              </li>
              <li class="nav-item active">
                <router-link :to="{name : 'contact'}" class="nav-link">Contact</router-link>
              </li>
              <li class="nav-item active">
                <router-link :to="{name : 'category'}" class="nav-link">Category</router-link>
              </li>
            </ul>
          </div>
      </nav>
      <div class="container">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
