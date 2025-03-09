// interface person {
//     name: string;       // name of the person
//     age: number;        // age of the person                                        
var products = JSON.parse(localStorage.getItem('products') || '[]'); // تحميل المنتجات من الذاكرة المحلية
function addProduct(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة عند الإرسال
    // جلب القيم من الحقول
    var nameInput = document.getElementById('name').value;
    var descriptionInput = document.getElementById('description').value;
    var priceInput = parseFloat(document.getElementById('price').value);
    var quantityInput = parseInt(document.getElementById('quantity').value);
    // إنشاء كائن منتج جديد
    var newProduct = {
        name: nameInput,
        description: descriptionInput,
        price: priceInput,
        quantity: quantityInput
    };
    // إضافة المنتج للمصفوفة وتحديث الـ Local Storage
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    // إعادة عرض المنتجات وتفريغ الحقول
    displayProducts();
    document.getElementById('product-form').reset();
}
function displayProducts() {
    var productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // تفريغ المحتوى القديم
    products.forEach(function (product) {
        productContainer.innerHTML += "\n            <div class=\"card\">\n                <h3>".concat(product.name, "</h3>\n                <p>").concat(product.description, "</p>\n                <p>Price: ").concat(product.price, " JOD</p>\n                <p>Quantity: ").concat(product.quantity, "</p>\n            </div>\n        ");
    });
}
// استدعاء دالة عرض المنتجات عند تحميل الصفحة
displayProducts();
document.getElementById('product-form').addEventListener('submit', addProduct);
