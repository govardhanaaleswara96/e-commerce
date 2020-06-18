E-Commerce Api End Points

// 1.api for register user -
method : post
url : http://localhost:2000/user/register
body : { userName,email,password,chennai }

// 2.api for login -
method : post
url : http://localhost:2000/user/login
body : { email,password }


// 2.api for create product - 
method : post
url : http://localhost:2000/product/create
body : { product_name,product_price } via csv  file 
header : authorization token (bearer token) 

// 3.api for create order - 
method : post
url : http://localhost:2000/order/
body : { productId,quantity,userId }
header : authorization token (bearer token) 


// 4.api for update order - 
method : put
url : http://localhost:2000/order/
body : { orderId,productId,quantity }
header : authorization token (bearer token) 


// 5.api for cancel order - 
method : delete
url : http://localhost:2000/order/
body : { orderId }
header : authorization token (bearer token) 

// 5.api for list ordered product based on the customer - 
method : get
url : http://localhost:2000/order/products
body : { userId }
header : authorization token (bearer token) 


// 6.api for list ordered product count based on date - 
method : get
url : http://localhost:2000/order/date
body : { date (YYYY-MM-DD) }
header : authorization token (bearer token)

//7.api for list of all customer and ordered products  - 
method : get
url : http://localhost:2000/order/all-products
body : none
header : authorization token (bearer token)

//8.api for customer based on the number of product purchased - 
method : get
url :http://localhost:2000/order/products-count
body : {userId}
header : authorization token (bearer token)
