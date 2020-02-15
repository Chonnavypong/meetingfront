<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th v-for="(headerKey, index) in getTableKey" :key="index" scope="col">{{headerKey}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(rowData, index) in getRowData" :key="index" scope="row">
        <td v-for="(data, ind) in rowData" :key="ind" >{{data}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["obj"],
  computed: {
    getTableKey() {
      const headerAll = Object.keys(this.obj[0]);
      function headerKey(obj) {
        return obj != "_id";
      }
      const headerName = headerAll.filter(headerKey);
      headerName.push('edit', 'delete')
      return headerName;
    },
    getRowData() {
      const data = this.obj;
      const header = this.getTableKey;
      console.log(header);
      const rowData = data.map((el) =>
        header.map((key, index) => el[key])
      );
      console.log(`rowData: ${rowData}`, rowData)
      return rowData;
    }
  }
};
</script>

<style>
</style>