<template>
    <div class="user-list">
        <ul>
            <li @click="gotoUserDetails(user)" v-for="(user, index) in users" :key="index">
                <div>
                    <img :src="user.picture.thumbnail" width="150" />
                </div>
                
                <div class="ms-3">
                    <h2>{{ user.name.title }}</h2>
                    <h2>{{ user.name.first + " " + user.name.last }}</h2>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "",
    data() {
        return {
            users: []
        }
    },

    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            // Make a request for a user with a given ID
            let _self = this;
            axios.get('https://randomuser.me/api/?results=20')
            .then(function (response) {
                // handle success
                console.log(response.data, 'lllll');
                console.log(response.data.results , 'lll')
                let users= [];
                response.data.results.forEach((item) => {
                    if(item.dob.age > 17 && users.length < 15 ) {
                        users.push(item);
                    }
                });
                _self.users = users;

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        },

        gotoUserDetails(user) {
            localStorage.setItem('userDetails', JSON.stringify(user));
            this.$router.push({
                path: '/user-details'
            });
        }
    }
}
</script>

<style  scoped>
    .ms-3 {
        margin-left: 15px;
    }
    .user-list ul { margin: 0px; padding: 0px; }
    .user-list ul li { list-style-type: none; padding: 15px; margin: 15px; display: flex; flex-direction: row; background-color: #EAEAEA; border-radius: 20px;}
</style>