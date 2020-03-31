<template>
  <div>
    <h1 class="title is-1 has-text-centered">Ranking</h1>
    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Prize</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) in ranking" :key="user.id">
          <th>{{ index + 1 }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.balance | money }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["ranking"])
  }
};
</script>

<style>
</style>