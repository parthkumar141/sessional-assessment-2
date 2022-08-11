let response = [];
fetch('https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09')
.then( (response) => {
    return response.json();
})
.then ( (data)=>{
    this.response = data
    console.log(this.response);
})
.catch( (error)=>{
    console.log(error);
});



function getData(index){
    document.querySelector('.para').style.display = "flex";
    document.querySelector('.buttons').style.display = "none";
    console.log(index)
    this.response.forEach((res) => {
        if (res.id === index) {
            document.getElementById('name').innerHTML = res.name
            document.getElementById('email').innerHTML = res.email
             document.getElementById('address').innerHTML = res.address.street
            // document.getElementById('address').innerHTML = res.address.street
            // document.getElementById('suite').innerHTML = res.address.suite 
            // document.getElementById('address').innerHTML = res.address.city
            // document.getElementById('address').innerHTML = res.address.zipcode
            // //document.getElementById('address').innerHTML = res.address.geo 
            // document.getElementById('address').innerHTML = res.address.geo.lat  
            //  document.getElementById('address').innerHTML = res.address.geo.lng 
            

            

            document.getElementById('phone').innerHTML = res.phone
            document.getElementById('website').innerHTML = res.website
            document.getElementById('company').innerHTML = res.company.name
            console.log(res)
            
        }
    })
}
