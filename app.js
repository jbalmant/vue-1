const app = Vue.createApp({
    data() {
        return {
            firstName: 'Jonaba',
            lastName: 'balmant',
            email: 'jonatasbalmnt@gmail.com',
            gender: 'male',
            picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQH3C-vAa4i1rg/profile-displayphoto-shrink_100_100/0/1620756455841?e=1626307200&v=beta&t=vwA7nFyaQ3akZCgiJiAfuZIFyhfk3O4LtuMGzmAiJFE'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json();

            console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large

        }
    }
})

app.mount('#app')