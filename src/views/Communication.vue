<script setup lang="ts"></script>
<template>
  <div>
    <ul>
      <li><RouterLink :to="{ name: 'props' }" active-class="active">props</RouterLink></li>
      <li>
        <RouterLink to="/communication/custom-event" active-class="active">custom-event</RouterLink>
      </li>
    </ul>
  </div>
  <div>
    <RouterView></RouterView>
  </div>
</template>
<style>
.active {
  color: red;
}
</style>
