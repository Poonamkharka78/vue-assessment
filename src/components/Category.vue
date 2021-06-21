<template>
    <div class="container-fluid">
        <h3>All Categories List</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="cat in categoryList" :key="cat.id"><router-link :to="{name : 'product', params : { name: cat}}">{{ cat }}</router-link></li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'Category',
    data() {
        return{
            categoryList : null,
        }
    },
    
    methods :{
        getCategories(){
        axios.get("https://fakestoreapi.com/products/categories").then((result) => {
            console.log(result.data);
           this.categoryList = result.data;
        })
      },
    },
    mounted () {
      this.getCategories()
    }
}
</script>
