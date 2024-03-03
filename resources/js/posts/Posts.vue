<template>
<div class="dark-mode">
   
   <!-- Site wrapper -->
   <div class="wrapper">
       <!-- Navbar -->            
       <Navbar></Navbar>
       <!-- /.navbar -->

       <!-- Main Sidebar Container -->
       <Aside></Aside>

       <!-- Content Wrapper. Contains page content -->
       <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Post</h1>
                        </div>
                        <div class="col-sm-2 offset-md-3">
                            <button type="button" class="btn btn-primary btn-block">
                                <i class="fas fa-plus"></i>
                                Create
                            </button>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">

                <table class="table table-striped table-bordered table-hover table-condensed">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="value in posts" :key="value">
                            <td>{{ value.id }}</td>
                            <td>{{ value.title }}</td>
                            <td>{{ format_date(value.created_at) }}</td>
                            <td>
                                <button type="button" class="btn btn-warning">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger">
                                    <i class="fas fa-eraser"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </section>

            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

       <Footer></Footer>


   </div>
<!-- ./wrapper -->

</div>
</template>

<script>
    import Navbar from '../layouts/Navbar.vue'  
    import Aside from '../layouts/Aside.vue'  
    import Footer from '../layouts/Footer.vue'  


    import axios from 'axios';
    import moment from 'moment';


    export default {
        components: { Navbar, Aside, Footer },

                
        data() {
            return {
                posts: []
            }
        },
        created() {
            if (window.Laravel.user) {
                this.name = window.Laravel.user.name
            }
        },
        beforeRouteEnter(to, from, next) {
            if (!window.Laravel.isLoggedin) {
                window.location.href = "/login";
            }
            next();
        },

        mounted() {
            this.getPosts();
        },

        methods: {
            getPosts() {
                axios.get('/api/posts').then(res => {
                    this.posts = res.data;
                    console.log(this.posts);
                });
            },

            format_date(value) {
                if (value) {
                    return moment(String(value)).format('YYYY/MM/DD');
                }
            }

        }
        

        
    }
</script>