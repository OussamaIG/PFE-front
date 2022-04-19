const app = Vue.createApp({
    data(){
        return{
            show:false,
            username:"",
            password:"",
            green: false,
            greens: false,
            type: 'password',
            passfield: false,
            userfield: false,
        }
    },
    methods:{
        login(){
            if(this.show === false){
                this.show = true;
            }
            else{
                this.show = false;
            }
            console.log(this.show);
        },
        close(){
            this.show = false;
        },
        getusername(event){
            this.username = event.target.value;
        },
        getpassword(event){
            this.password = event.target.value;
        },
        showpassword(){
            if(this.type === "text"){
                this.type = "password";
            }else{
                this.type = "text";
            }
        },
        done(){
            if(this.password === ""){
                this.passfield = true;
            }else if(this.password != ""){
                this.passfield = false;
            }
            if(this.username === ""){
                this.userfield = true;
            }else if(this.username != ""){
                this.userfield = false;
            }
        }
    },
    watch:{
        username(){
            if(this.username != ""){
                this.green = true;
            }
            else{
                this.green = false;
            }
        },
        password(){
            if(this.password != ""){
                this.greens = true;
            }
            else{
                this.greens = false;
            }
        }
    },
    computed:{
       flou(){
        return {showgrey: this.show};
       },
       opacity(){
        return {opacity1: this.show};
       },
       over(){
        return {overflow: this.show};
       },
       events(){
        return{event: this.show};
       },
       greenstyle(){
           return[{greenst: this.green}, {red: this.userfield}];
       },
       greenpass(){
           return[{greenst: this.greens}, {red: this.passfield}];
       }
    }
});
app.mount("#body");