// interface person {
//     name: string;       // name of the person
//     age: number;        // age of the person                                        

// }
// // const persons:person = {name: "John", age: 25};
// const persons: person[] = [
//     { name: "John", age: 25 },
//     { name: "Doe", age: 17 }
// ]

// function displayPerson(person: person) {

//     if (person.age < 18) {
//         console.log("Name: " + person.name + " is a minor");
//     } else {
//         console.log("Name: " + person.name + " is an adult");
//     }
// }
// const a: person = { name: "John", age: 25 };
// displayPerson(a); // Name: John is an adult 


// Task 2
// interface Teacher {
//     name: string;
//     subjects: string[];
// }
// let teacher: Teacher = {
//     name: "Mr. Hazem",
//     subjects: ["Math", "Physics", "Chemistry"]
// };

// console.log(`Subjects taught by ${teacher.name}:`);
// teacher.subjects.forEach((subject) => {
//     console.log(subject);
// });
// Output:
// Subjects taught by Mr. Hazem:
// Chemistry
// Math
// Physics



// Task 3 

// interface product {
//     name: string;
//     price: number;
//     quantity: number;
// }
// const products: product[] = [
//     { name: "Laptop", price: 25000, quantity: 5 },
//     { name: "Mobile", price: 20000, quantity: 10 }
// ]

// function applyDiscount() {
//     products.forEach((product) => {
//         if (product.quantity > 5) {
//             product.price *= 0.85; // تخفيض السعر بنسبة 15%
//         }
//     });
// }
// applyDiscount();
// console.log(products); // [ { name: 'Laptop', price: 21250, quantity: 5 }, { name: 'Mobile', price: 20000, quantity: 10 } ]



// Task 4

interface Product { // تعريف الانترفيس
    name: string; // اسم المنتج
    description: string; // وصف المنتج
    price: number; // سعر المنتج
    quantity: number;// كمية المنتج
}
let products: Product[] = JSON.parse(localStorage.getItem('products') || '[]'); // تحميل المنتجات من الذاكرة المحلية

function addProduct(event: Event) {
    event.preventDefault();  // لمنع إعادة تحميل الصفحة عند الإرسال

    // جلب القيم من الحقول
    const nameInput = (document.getElementById('name') as HTMLInputElement).value;
    const descriptionInput = (document.getElementById('description') as HTMLInputElement).value;
    const priceInput = parseFloat((document.getElementById('price') as HTMLInputElement).value);
    const quantityInput = parseInt((document.getElementById('quantity') as HTMLInputElement).value);

    // إنشاء كائن منتج جديد
    const newProduct: Product = {
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
    (document.getElementById('product-form') as HTMLFormElement).reset();
}

function displayProducts() {
    const productContainer = document.getElementById('product-container') as HTMLElement;
    productContainer.innerHTML = '';  // تفريغ المحتوى القديم

    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price} JOD</p>
                <p>Quantity: ${product.quantity}</p>
            </div>
        `;
    });
}

// استدعاء دالة عرض المنتجات عند تحميل الصفحة
displayProducts();
(document.getElementById('product-form') as HTMLFormElement).addEventListener('submit', addProduct);





