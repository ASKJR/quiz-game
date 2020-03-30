<template>
  <div>
    <h1 class="title is-1 has-text-centered">Ranking</h1>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="User">User</abbr>
          </th>
          <th>Prize</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in ranking" :key="user.id">
          <th>{{ user.name }}</th>
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