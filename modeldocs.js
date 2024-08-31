/*
banner model
title, description, image, brands,analytics(title,nos)

the banner model consists of 
title: a message to display to the users (eg: find clothes that match your style.)
this title is a heading of big size

description: some text about the website (eg: browse through styles and fashion)

image: banner image only 1 image

brands: displays an array of brands

analytics: is an array of objects
each obj consists of title and nos
(eg: title : brands nos: 200 i.e. 200+ brands)
(eg: title: products nos: 20000 ie. 20000+products)

I'll separate admin frontend where I can update the banner data
i want to count the no of brands in brands collection and give it in banner data
similarly no of happy customers based on no of normal users
no of products based on no of products
i.e. I will only get the title,description and image from post request rest I should process internally

*/

/*
product model
title,description,category,brand,tag,variants(color,images,sizes)

title: the name of the product
description: some description about the product
category: eg: men,women, kids , electronics etc
(I have a separate category collection)

brand: eg: allen solly
(I have separate collection)

tag: eg: new arrival, On Sale, trending, etc
(I have separate collection)

variants: is an array of objects
containing color, images,sizes
(eg: color: red, images: [is an array of images string]
sizes: [is an array of strings]
)

should i add any more fields in the above schema
*/

/*
brand model
title
it is a string
(eg: versace)

*/
/*
category model
name,slug
name: is a string 
slug : is a string

is slug necessary
*/
/*
price model
productId,maxPrice,salePrice,discount

productId: is an objectId from mongoose
maxPrice: is the mrp price
salePrice: is the current selling price
discount: is the discount percentage

I will have a post api to get the details
how do i get the productId. the admin will be having a frontend which will show him all the products in the store
*/

/*

review model
productId,userId,username,rating,description,postedOn

productId is mongoose objectId
userId is the mongoose objectId
username is a string
rating is a number
description is the description of the review
postedOn is a date

user can post review only if he bought the proudct 
we can get the userId from the accessToken and authenticaton req.user = userId
username,productId,postedOn should be processed internally
*/

/*
stock model
productId,stock(color,size,quantity)

productId is mongoose objectId
stock is an array of objects
color is a string
size is a string
quantity is number


*/

/*
tags model
name,slug
name is a string
slug is a string

is slug necessary
*/

/*
these are mongoose schemas please tell if anything needs to be improved. below are my requirements
the frontend homepage has: 
1. dropdown with all categories
2. buttons for tags such as onSale new Arrival
3. search box for autocomplete like amazon website search box
4. banner which contains the above details of the banner schema
5. sections with new arrival products and top selling products
6. an image grid with shop by casual,formal,party,gym
7.our happy customers div which shows top reviews
8. proudct page with all details of the proudct
9. it has a review tab where we can see reviews of the particular product
10. we can also wrtie a review if we have bought the product 
11. I have a you might also like section which shows similar products


based on the above data suggest some improvments if any or necessary
*/


/*
store brand ref in banner model
add lastupdated field to the analytics field

add avg rating and no of reviews field in the product schema

if we want we can add brands logo in the brands schema

make the tags in product schema to an array of strings

add verifiedpurchase and helpful votes in review schema

add created at and updated at fields in products


*/
