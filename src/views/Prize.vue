<template>
  <div>
    <h1 class="title is-1 has-text-centered">Prize List</h1>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="Position">#</abbr>
          </th>
          <th>Prize</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>
            <abbr title="Position">#</abbr>
          </th>
          <th>Prize</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="(prize,index) in prizes" :key="index">
          <th>{{ prizes.length - index }}</th>
          <td>{{ prize | money }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { PRIZES } from "../helper/const";
export default {
  computed: {
    prizes() {
      return PRIZES.slice().reverse();
    }
  }
};
</script>

<style scoped>
</style>