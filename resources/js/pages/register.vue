<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 mt-4">

                <h2>Register</h2>
                <p class="text-danger" v-for="error in errors" :key="error">
                    <span v-for="err in error" :key="err">{{err}}</span>
                </p>
                <form @submit.prevent="register">
                    <div class ="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" v-model="form.name">
                    </div>
                    <div class ="form-group">
                        <label for="email">Email Address:</label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                    </div>
                    <div class ="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                    </div>
                    <div class ="form-group">
                        <label for="c_password">Conform Password:</label>
                        <input type="password" class="form-control" id="c_password" v-model="form.password">
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { reactive,ref  } from 'vue'
    import { reactive } from 'vue'
    import { useRouter } from "vue-router"

    export default{
        setup(){
            const router = useRouter()

            let form = reactive({
                name :'',
                email: '',
                password: '',
                c_password: '',
            });

            const register = async() =>{
                await axios.post('/api/register,',form).then(res=>{
                  if (res.data.sucess) {
                     localStorage.setItem('token',res.data.token)
                     router.push({name:'Dashboard'})
                  }
                  }) .catch(e=>{
                    errors.value = e.response.data.message
                })
            }
            return{
                form,
                register,
                login
            }
        }
    }
</script>