<template>
    <div class="user-list">
        <router-link to="/"><h1>&larr;</h1></router-link>
        <img :src="user.picture.large" />
        <div class="info-div">
            <h2>Name: {{ user.name.title + " " + user.name.first + " " + user.name.last }}</h2>
            <h2>Date of Birth: {{ user.dob.date }}</h2>
            <h2>Place of residence: {{ user.location.city+", "+ user.location.state + ", "+ user.location.country }}</h2>
            <h2>E-mail: {{ user.email }}</h2>
            <h2>Phone Number: {{ user.phone}}</h2>   
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data()  {
        return {
            user: JSON.parse(localStorage.getItem('userDetails'))
        }
    }
}
</script>

<style>
.user-list { padding: 15px 10px; }
.user-list h1{font-weight: bold; margin-top: 0px;}
.user-list a {text-decoration: none;}
.info-div {background-color: #EAEAEA; padding: 10px;}
</style>
