<template>
<div>
    <b-container>
        <h3>Loginpage</h3>
        <div>
            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" ></GoogleLogin>
        </div>
        <div class="form-row mt-3 px-5">
            <div class="form-group my-2">
                <label>User Name</label>
                <b-form-input type="text" class="form-control" v-model.trim="login.userName" placeholder="Enter your username"></b-form-input>
            </div>
            <div class="form-group my-3">
                <label>Password</label>
                <b-form-input type="password" class="form-control" v-model.trim="login.password" placeholder="Enter your password"></b-form-input>
            </div>
            <div>
                <b-button type="submit" @click="signin()" variant="outline-primary">signin</b-button>
                <b-button class="float-end" type="submit" @click="oauthCheck()" variant="outline-primary">check</b-button>
            </div>

        </div>
    </b-container>
</div>
</template>

<script>
import axios from 'axios'
import GoogleLogin from 'vue-google-login';
import btoa from 'btoa'


export default {
    name : 'Login',
    data() {
        return {
            login : {
                userName : '',
                password : ''
            },
            params: {
                client_id: "171717666890-5qr9lc7kfeim2m8jr90suh2cn51d4o1m.apps.googleusercontent.com"
            },
            // only needed if you want to render the button with the google ui
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    components : {
        GoogleLogin
    },
    methods : {
        onSuccess : function (googleUser) {
            // console.log(googleUser);

            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token);
            // // id_token
            // var xhr = new XMLHttpRequest();
            // xhr.open('POST', 'http://localhost:9095/user/tokensignin');
            // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // xhr.onload = function() {
            // console.log('Signed in as: ' + xhr.responseText);
            // };
            // xhr.send('idtoken=' + id_token);
            // var axi = axios.create()
            // ({
            //     baseURL: "http://localhost:9095",
            // });
            // return new Promise((resolve, reject) => {
            //     const username = 'dexter'
            //     const password = 'dexter'
            //     const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
            //     const url = 'http://localhost:9095/user/tokensignin'
            //     axi.get(url, {
            //     headers: {
            //         'Authorization': `Basic ${token}`,
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //         'Accept': 'application/json',
            //     }
            //     })
            //     .then((response) => {
            //         console.log(response.data);
            //         resolve(response);
            //     }).catch((err) => {
            //         reject(err);
            //     })
            // })

        },
        signin : function() {
            var authAxios = axios.create({
                baseURL: 'https://test.examsdaily.in:8443/edaily-auth',
            });
            return new Promise((resolve, reject) => {
                authAxios({
                    method: 'post',
                    url: 'oauth/token',
                    headers: {
                        'Authorization': 'Basic ' + btoa("barClientIdPassword:password"),
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    params: {
                        'grant_type': 'password',
                        'username': this.login.userName,
                        'password': this.login.password
                    }
                }).then((response) => {
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                    this.accessToken = response.data;
                    console.log(this.accessToken);
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        oauthCheck : function(){
            var authAxios = axios.create({
                baseURL: 'http://localhost:9095',
            });

            return new Promise((resolve, reject) => {

                // authAxios({
                //     method: 'get',
                //     url: 'http://localhost:9095/admin/view',
                //     headers: {
                //         'Authorization': `Basic ${this.accessToken}`,
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/x-www-form-urlencoded',
                //     },
                //     // params: {
                    //     'grant_type': 'password',
                    //     'username': 'dexter',
                    //     'password': 'dexter'
                    // }
                // })
                // const token = this.accessToken;
                // const bodyParameters = {
                //     username: "dexter",password: "dexter"
                // };
                authAxios.get('http://localhost:9095/admin/view',this.token, {
                    // headers: {
                    //     'Authorization': +`Basic ${token}`
                    // }
                })
                .then((response) => {
                    console.log(response.data);
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        }
    }
}
</script>