import Home from './components/Pages/Home.vue'
import About from './components/Pages/About'
import Contact from './components/Pages/ContactUs'
import Category from './components/Category.vue'
import Product from './components/Product.vue'

export const routes = [
	{ 
		path:'/', 
		name: 'home', 
		component:Home
	},
	{ 
		path:'/about', 
		name: 'about',  
		component:About
	},
	{ 
		path:'/contact',
		name: 'contact',   
		component:Contact
	},
	{ 
		path:'/category', 
		name : 'category', 
		component:Category
	},
	{ 
		path:'/products/category/:name', 
		name : 'product', 
		component:Product
	}
]