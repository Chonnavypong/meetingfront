<template>
  <div class="container" id="test">
      <table class="table">
        <thead>
          <th scope="col"> Picture </th>
          <th scope="col"> Name </th>
          <th scope="col"> Detail </th>
          <th scope="col"> Edit / Delete </th>
        </thead>
        <tbody>
          <tr v-for="equip in info" :key="equip._id">
            <td>
              <img 
                :src="getImage(equip)" 
                :alt="equip.photos[1]"
                lazy-src="/img/equipment/62.jpg"
                class="equipImg"
                >
            </td>
            <td>{{equip.name}} </td>
            <td>{{equip.detail}}</td>
            <td class="text-right">
              <i class="fa fa-edit text-info"></i> 
              <i class="material-icons">restore_from_trash</i>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      info: null,
      picture: null
    }
  },
  mounted() {
    axios
      .get("/api/v1/equips")
      .then(res => {
        // res.data.data.equip.map( 
        //   (item) => console.log(item)
        // )
        console.log(res.data.equip)
        return this.info = res.data.equip
        })
  },
  methods: {
    getImage(item) {
      return `http://127.0.0.1:3000/img/equipment/${item.photos[0]}`
    }
  },

}
</script>

<style>
td {
  padding: 10px;
}
.equipImg {
  height: 20%
}
</style>