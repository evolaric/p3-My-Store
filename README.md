# P3MyStore

There aren't many instructions to share on this project:

1. clone the project: `git clone https://github.com/evolaric/p3-My-Store.git`
2. run `npm install` to install dependencies
3. run `ng serve` from the command line to serve the project

The testing specs were generated automatically, but contain no tests as they were not a requirement for this project.

The component css files were left intact even though I used global styles in most cases.

# Features

Upon visiting the root path (/), the user will be presented a list of products. The user can add a product to the cart, change the quantity, remove the product from the cart, and set the quanity in the cart via direct number input.

In the main view, clicking on a picture will load a product detail page that has slightly more information than the list (though not much), and also allows the user to add and remove products from the cart. The component and service logic are meant to mimic the process of getting the information from an API rather than a file or array-in-memory.

The user can begin closing out their order by clicking on the cart picture and/or widget in the upper right hand corner. This will show a list of products in the cart, the quantities, and a grand total. In order to finish the transactiom, the user must provide a small collection of data, and a series of numbers between 13 and 19 characters long. The data is not sanitized or validated by a back-end, so the field will accept pretty much and number of the right length.

Upon submitting the validated form, the user will be presented with a confirmation page (to represent the end of the transaction and as a placeholder for a variety of back-end actions), and empty cart, and the opportunity to return to the shop.

# On third party libraries

My initial review suggested several third party libraries, and while they are useful, I always try to avoid using them for these projects as I feel I learn more if I try and do things on my own. That said, I did utiltize a third party toast library for the notifications.
