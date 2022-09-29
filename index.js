const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require("method-override");

const Product = require('./models/product');

//DB CONNECTION
mongoose.connect('mongodb://localhost:27017/marketApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


//APPLICATION CONNECTION & SETUP
const app = express();

const port = 3030;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(methodOverride('_method'));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}`);
})


const categories = ['fruit','vegetable', 'dairy'];

app.get('/products', async (req,res) => {
    const {category} = req.query;
    if(category){
        const products = await Product.find({category})
        res.render('products/index',{products, category});

    }else{
        const products = await Product.find({});
        res.render('products/index',{products, category: "All"});

    }

    //console.log(products);
    //res.send("ALL PRODUCTS WILL BE HERE!");
    //res.render('products/index',{products});
})

app.get('/products/new',(req, res) => {
    res.render('products/new', {categories});
})

app.post('/products', async (req,res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    //console.log(req.body);
    //res.send('making your product!');
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req,res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show',{product});

})


app.get('/products/:id/edit', async (req,res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit',{product, categories});
})

app.put('/products/:id', async (req,res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`);

})

app.delete('/products/:id', async (req,res) => {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');

});
