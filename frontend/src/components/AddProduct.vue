<template>
    <div>
        <div class="field">
            <label class="label">Product Name</label>
            <div class="control">
                <input class="input" type="text" min="3" max="25" placeholder="Product Name" v-on:keypress="checkValue" 
                    v-model="productName" />
            </div>
        </div>

        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input class="input" type="number" min="0" placeholder="Price" v-model="productPrice" />
            </div>
        </div>

        <div class="field">
            <label class="label">Quantity</label>
            <div class="control">
                <input class="input" type="number" min="0" placeholder="Quantity" v-model="quantity" />
            </div>
        </div>

        <div class="field">
            <label class="label">Stock</label>
            <div class="control">
                <input class="input" type="number" min="0" placeholder="Stock" v-model="stock" />
            </div>
        </div>
        <div class="control">
            <button class="button is-success" @click="saveProduct" :disabled="!isComplete">SAVE</button>
        </div>
    </div>
</template>
  
<script>
// import axios
import axios from "axios";

export default {
    name: "AddProduct",
    data() {
        return {
            productName: "",
            productPrice: null,
            quantity: null,
            stock: null,
            error: false
        };
    },
    methods: {
        // Create New product
        async saveProduct() {
            try {
                await axios.post("http://localhost:5000/products", {
                    productName: this.productName,
                    price: this.productPrice,
                    quantity: this.quantity,
                    stock: this.stock
                });
                this.productName = "";
                this.productPrice = "";
                this.quantity = null;
                this.stock = null;
                this.$router.push("/");
            } catch (err) {
                console.log(err);
            }
        },
        checkValue() {
            if (/[^a-zA-Z]/.test(this.productName)) {
                this.error = true;
                alert('Product name contain only letters');
            } else {
                this.error = false;
            }
        }

    },
    computed:{
        isComplete () {
      return (
        this.productName != '' &&
        this.productPrice != null &&
        this.quantity != null &&
        this.stock != null 
      )
    },
    }
};
</script>