<template>
  <div class="Product">
    <div class="container">
        <div>
          <h3><span>"{{ catgeoryName | capitalizeFirstLetter}}"</span> Product's List</h3>
          <button type="button" class="btn btn-warning"> <router-link :to="{name : 'category'}">Back</router-link></button>
        </div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.price}}</td>
                <td>{{item.description}}</td>
                <td>{{item.category}}</td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Product',
  data () {
    return {
      products: null,
      catgeoryName: this.$route.params.name,
    }
  },
  methods:{
      getPorducts(){
        let uri = 'https://fakestoreapi.com/products/category/' + this.catgeoryName;
        axios.get(uri).then((response) => {
           this.products = response.data;
        })
      },
    },
    mounted () {
      this.getPorducts()
    },
    filters : {
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }
  }
</script>

<style scoped>
  span {
    color:coral;
  }
</style>
