<template>
    <div>
        <div class="field">
            <label class="label">Product Name</label>
            <div class="control">
                <input
                  class="input"
                  type="text"
                  min="3" max="25"
                  placeholder="Product Name"
                  v-model="productName"
                />
            </div>
        </div>
  
        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input
                  class="input"
                  type="number"
                  min="0"
                  placeholder="Price"
                  v-model="productPrice"
                />
            </div>
        </div>

        <div class="field">
            <label class="label">Quantity</label>
            <div class="control">
                <input
                  class="input"
                  type="number"
                  min="0"
                  placeholder="Quantity"
                  v-model="quantity"
                />
            </div>
        </div>

        <div class="field">
            <label class="label">Stock</label>
            <div class="control">
                <input
                  class="input"
                  type="number"
                  min="0"
                  placeholder="Stock"
                  v-model="stock"
                />
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="updateProduct" :disabled="!isComplete">UPDATE</button>
        </div>
    </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
    name: "EditProduct",
    data() {
        return {
            productName: "",
            productPrice: null,
            quantity:null,
            stock:null,
            error: false

        };
    },
    created: function () {
        this.getProductById();
    },
    methods: {
        // Get Product By Id
        async getProductById() {
            try {
                const response = await axios.get(
                    `http://localhost:5000/products/${this.$route.params.id}`
                );
                this.productName = response.data.productName;
                this.productPrice = response.data.price;
                this.quantity = response.data.quantity;
                this.stock = response.data.stock;
            } catch (err) {
                console.log(err);
            }
        },
  
        // Update product
        async updateProduct() {
            try {
                await axios.put(
                    `http://localhost:5000/products/${this.$route.params.id}`,
                    {
                        productName: this.productName,
                        price: this.productPrice,
                        quantity:this.quantity,
                        stock:this.stock
                    }
                );
                this.productName = "";
                this.productPrice = "";
                this.quantity=null;
                this.stock=null;
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
    hasError() {
      return this.error;
    }
    }
};
</script>