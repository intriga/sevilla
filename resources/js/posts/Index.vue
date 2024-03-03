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
                    <h1>Blank Page</h1>
                    </div>
                    <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Blank Page</li>
                    </ol>
                    </div>
                    </div>
                    </div><!-- /.container-fluid -->
                </section>

                <!-- Main content -->
                <section class="content">

                    <!-- Default box -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Title</h3>

                            <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                                <i class="fas fa-times"></i>
                            </button>
                            </div>
                        </div>
                        <div class="card-body">
                            POSTS
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            Footer
                        </div>
                        <!-- /.card-footer-->
                    </div>
                    <!-- /.card -->

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
                axios.get('http://127.0.0.1:8000/api/posts').then(res => {
                    this.posts = res.data;
                    //console.log(this.posts);
                });
            },
        }
        

        
    }
</script>