<template>
    <b-container>
        <h3>Student</h3>
        <div class="form-row mt-3 px-5">
            <div class="form-group my-2">
                <label>Student Name</label>
                <b-form-input type="text" class="form-control" v-model.trim="register.name" placeholder="Enter your name"></b-form-input>
            </div>
            <div class="form-group my-3">
                <label>Qualification</label>
                <b-form-input type="text" class="form-control" v-model.trim="register.qualification" placeholder="Enter your qualification"></b-form-input>
            </div>
            <div>
                <b-button type="submit" @click="insert()" variant="outline-primary">Register</b-button>
            </div>
        </div>
    </b-container>
</template>

<script>
import axios from 'axios'
// import http from "../components/http-common";
import btoa from 'btoa'

export default {
    name : 'Student',
    data() {
        return {
            register : {
                studentId : '',
                name : '',
                qualification : ''
            }
        }
    },
    methods : {
        insert : function(){
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
                    // 'X-Requested-With': 'XMLHttpRequest'
                },
                // params: {
                //     'grant_type': 'password',
                //     'username': 'dexter',
                //     'password': 'dexter'
                // }
            }).then((response) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    // },
    //         },
            // var axio = axios.create({
            //     baseURL : 'http://localhost:9095',
            // })
            // return new Promise((resolve, reject) => {
                // const username = 'dexter'
                // const password = 'dexter'
                // const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

                // var configHeader = {
                //     headers: {
                //         'Authorization': `Basic ${token}`,
                //         "Content-type": "application/json",
                //     }
                // };
                // const data = {
                //     register : this.register
                // }
                // axio.post('/student/insert',token,this.register,configHeader)
                // .then((response) => {
                //     console.log(response.data);
                    // if (response.status === 200) {
                    //     window.location.href = response.request.responseURL;
                    // }
                //     resolve(response);
                // }).catch((err) => {
                //     console.log(err);
                //     reject(err);
                // })
            // })
        }
    }
}
</script>