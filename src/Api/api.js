 
 
 const URL = "http://localhost:8085"
 
 const API_KEY = {
     URL:{
         baseurl:URL
     },
     path:{
        adminLogin:"admin/login",
        hospitalGetAll:"hospital/get-all",
        hospitalById:"hospital",
        hospitalSave:"hospital/save",
        doctorGetAll:"doctor/get-all",
        doctorSave:"doctor/save",
        doctorUpdate:"doctor/update",
        hospitalUpdate:"hospital/update",
        doctorDelete:"doctor/delete",
        hospitalDelete:"hospital/delete"
     }
 }


 export default API_KEY;