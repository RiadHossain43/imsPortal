
async function requestDemo(){
    let personName = $("#person-name").val().trim()
    let personEmail = $("#person-email").val().trim()
    let personTile = $("#person-title").val().trim()
    let personOrg = $("#person-org").val().trim()
    let addInfo =  $("#add-info").val().trim()
    let bookDate =  $("#book-date").val().trim()
    bookDate = moment(bookDate,"D/M/Y")
    let formData = new FormData();
    formData.append('name', personName);
    formData.append('email', personEmail);
    formData.append('jobTitle', personTile);
    formData.append('organisationName', personOrg);
    formData.append('additionalInformation', addInfo);
    formData.append('bookedDate',bookDate)

    if(personName==''||personEmail==''||personOrg==''||personTile==''||bookDate=='') 
    return swal({
        title: "Alert",
        text: "Please fill the required fields",
        icon: "warning",
    });

    try{
        let  response = await axios.post("https://ims-backend.herokuapp.com/api/contactims",{
            name:personName ,
            email:personEmail ,
            jobTitle:personTile ,
            organisationName:personOrg ,
            additionalInformation:addInfo  ,
            bookedDate:bookDate 
        })
        swal({
            title: "Thank You",
            text: "Meeting booked successfully.",
            icon: "success",
        });
        $("#person-name").val('')
        $("#person-email").val('')
        $("#person-title").val('')
        $("#person-org").val('')
        $("#add-info").val('')
        $("#book-date").val('')
    }catch(ex){
        console.log(ex.response)
        swal({
            title: "Error",
            text: "Server error occured",
            icon: "error",
        });
    }
}
 

$('#book-btn').click(requestDemo)
$('#package-sms').click(e=>{
    e.preventDefault()
    swal({
        title: "We are working",
        text: "System will be launched soon",
        icon: "info",
    });
})
$('#package-isms').click(e=>{
    e.preventDefault()
    swal({
        title: "We are working",
        text: "System will be launched soon",
        icon: "info",
    });
})
$('#package-qms').click(e=>{
    e.preventDefault()
    swal({
        title: "We are working",
        text: "System will be launched soon",
        icon: "info",
    });
})


// let html =  
// `
// <div class="cta" >
//     <div class="container">
//         <div class="row mini-section-separator relative">
//             <div class="overlay-img">
//                 <div class="each-color image-bg" style="background-image:url(assets/images/cta-overlay.svg)"></div>
//             </div>
//             <div class="cta-inner col-sm-12">
//                 <div class="row vertical-middle-content">
//                     <div class="col-sm-12 col-lg-2">
                        
//                     </div>
//                     <div class="col-lg-8">
//                         <form>
//                         <div class="form-group">
//                             <label class="text-white" for="">Name</label>
//                             <input id='person-name' type="text" class="form-control bg-white" id="" placeholder="Your name here...">
//                         </div>
//                         <div class="form-group">
//                             <label class="text-white" for="">Email address</label>
//                             <input id='person-email' type="email" class="form-control bg-white" id="" placeholder="name@example.com">
//                         </div>
//                         <div class="text-white" class="form-group">
//                             <label for="">Title</label>
//                             <input id='person-title' type="text" class="form-control bg-white" id="" placeholder="Title here...">
//                         </div>
//                         <div class="text-white" class="form-group">
//                             <label id='person-org' for="">Organisation</label>
//                             <input type="email" class="form-control bg-white" id="" placeholder="Organisation name...">
//                         </div>
//                         <div class="text-white" class="form-group">
//                             <label for="exampleFormControlTextarea1">Additional information</label>
//                             <textarea class="form-control bg-white" id="exampleFormControlTextarea1" rows="10"></textarea>
//                         </div>
//                         <div class="text-white">
//                             <button type="button" id='book-btn' class="btn btn-primary btn-lg">Submit</button>
//                         </div>
//                         </form>
//                     </div>
//                     <div class="col-sm-12 col-lg-2">
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// `
// $('.get-started').magnificPopup({ 
//     type: 'inline', 
//     items: {
//         src: 'contact.html#contact-form'
//     },
//     // Fixed position will be used 
//     fixContentPos: true, 

//     // Since disabled, Magnific Popup 
//     // will not put close button 
//     // inside content of popup 
//     closeBtnInside: false, 
//     preloader: false, 

//     // Delay in milliseconds before 
//     // popup is removed 
//     removalDelay: 160, 

//     // Class that is added to 
//     // popup wrapper and background 
//     mainClass: 'mfp-fade' 
// }); 