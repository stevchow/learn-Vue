<template>
    <ul class="nav nav-tabs">
        <router-link to="/" tag="li" class="nav-link" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/alert" tag="li" class="nav-link" active-class="active" ><a>Alert</a></router-link>
        <router-link to="/success" tag="li" class="nav-link" active-class="active" ><a>Success</a></router-link>
        <router-link to="/list" tag="li" class="nav-link" active-class="active" ><a>List</a></router-link>
    </ul>
</template>

<style>
.nav-tabs {
  margin-bottom: 1rem;
}
</style>

