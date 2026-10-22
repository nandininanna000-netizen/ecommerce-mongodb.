use("ecom")

db.createCollection("products")
db.products.insertMany([
 {
  name: "Dell Inspiron 15",
 brand: "Dell",
 price: 55000,
 stock: 25,
 category: "Laptop",
 tags: ["i5", "8GB RAM"],
 ratings: 4.5,
 description: "15.6 inch laptop with Intel i5 processor"
 },
 {
 name: "HP Pavilion Gaming",
 brand: "HP",
 price: 72000,
 stock: 15,
 category: "Laptop",
 tags: ["Ryzen 5", "16GB RAM"],
 ratings: 4.7,
 description: "Gaming laptop with Ryzen 5 and GTX graphics"
 },
 {
 name: "Lenovo IdeaPad Slim 3",
 brand: "Lenovo",
 price: 48000,
 stock: 30,
 category: "Laptop",
 tags: ["i3", "SSD"],
 ratings: 4.2,
 description: "Slim laptop with fast SSD storage"
 }
  ])


db.products.find().pretty()
db.products.find({name: "Dell Inspiron 15"})

// to fetch products with filters
db.products.find({price :{$gt: 50000 } } )
db.products.find({brand:"hp "})

// update product stock using $inc operator
db.products.updateOne({name: "Dell Inspiron 15"},
     {$inc: {stock: -1}})

//increase quantity using $inc operator
db.products.updateOne({name: "lenovo IdeaPad Slim 3"},
    {$inc:{stock: 5}}
)     

//add new tag to product using $push operator
 db.products.updateOne({name: "HP Pavilion Gaming"},
    {$push: {tags: "SSD"}}
)

//delete product using deleteOne method
db.products.deleteOne({name: "Lenovo IdeaPad Slim 3"})