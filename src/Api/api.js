 
 
//  const URL = "http://localhost:8085"
 const URL = "https://dhs.herokuapp.com"

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
        doctorById:"doctor",
        doctorSave:"doctor/save",
        doctorUpdate:"doctor/update",
        hospitalUpdate:"hospital/update",
        doctorDelete:"doctor/delete",
        hospitalDelete:"hospital/delete",
        patientSave: "patient/add"
     }
 }


 export default API_KEY;