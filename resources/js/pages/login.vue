<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 mt-4">
                <form @submit.prevent="login">
                    <div class ="form-group">
                        <label for="email">Email Address:</label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                    </div>
                    <div class ="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
import { reactive } from 'vue'
    export default{
        setup(){
            let form = reactive({
                email: '',
                password: ''
            });

            const login = async() =>{
                await axios.post('/api/login,',form).then(res=>{
                    console.log(res);
                })
            }
            return{
                form,
                login
            }
        }
    }
</script>