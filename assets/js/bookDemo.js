
async function requestDemo(){
    let personName = $("#person-name").val().trim()
    let personEmail = $("#person-email").val().trim()
    let personTile = $("#person-title").val().trim()
    let personOrg = $("#person-org").val().trim()
    let addInfo =  $("#add-info").val().trim()
    let bookDate =  $("#book-date").val().trim()
    bookDate = moment(bookDate,"D/M/Y")

    if(personName==''||personEmail==''||personOrg==''||personTile==''||bookDate=='') 
    return swal({
        title: "Alert",
        text: "Please fill the required fields",
        icon: "warning",
    });

    try{
        let  response = await axios.post(`${API_BASE_URL}/api/contactims/bookdate`,{
            name:personName ,
            email:personEmail ,
            jobTitle:personTile ,
            organisationName:personOrg ,
            additionalInformation:addInfo  ,
            bookedDate:bookDate 
        })
        swal({
            title: "Thank You",
            text: `Meeting booked successfully. Schedule is on ${$("#book-date").val().trim()}`,
            icon: "success",
        });
        $("#person-name").val('')
        $("#person-email").val('')
        $("#person-title").val('')
        $("#person-org").val('')
        $("#add-info").val('')
        $("#book-date").val('')
        $.magnificPopup.close()
    }catch(ex){
        console.log(ex,ex.response)
        swal({
            title: "Error",
            text: "Server error occured",
            icon: "error",
        });
    }
}
 
function setForm(payLoad){
    return`
<section class="ev-process relative section5 " id="section8">
    <div class="cta my-5" id='contact-form' >
        <div class="container my-5">
            <div class="row mini-section-separator relative">
                <div class="overlay-img">
                    <div class="each-color image-bg" style="background-image:url(assets/images/cta-overlay.svg)"></div>
                </div>
                <div class="cta-inner col-sm-12">
                    <div class="row vertical-middle-content">
                        <div class="col-sm-12 col-lg-3">
                            
                        </div>
                        <div class="col-lg-6">
                            <form>
                            <h2 class="text-white mb-4">Book demo</h2>
                            <div class="form-group">
                                <label class="text-white" for="">Name (required)</label>
                                <input required id='person-name' type="text" class="form-control bg-white"  placeholder="Your name here...">
                            </div>
                            <div class="text-white" class="form-group">
                                <label for="">Job Title (required)</label>
                                <input required id='person-title' type="text" class="form-control bg-white"  placeholder="Title here...">
                            </div>
                            <div class="text-white" class="form-group">
                                <label  for="">Organisation (required)</label>
                                <input required id='person-org' type="text" class="form-control bg-white"  placeholder="Organisation name...">
                            </div>
                            <div class="form-group">
                                <label class="text-white" for="">Email address (required)</label>
                                <input required id='person-email' type="email" class="form-control bg-white"  placeholder="name@example.com">
                            </div>
                            <div class="form-group text-white">
                                <label for="">Book date (required)</label>
                                <div class="input-group date" id="datetimepicker" data-target-input="nearest">
                                    
                                    <input required id='book-date' type="text" class="form-control datetimepicker-input bg-white" data-target="#datetimepicker" placeholder="Book a date ..." />
                                    <div class="input-group-append" data-target="#datetimepicker" data-toggle="datetimepicker">
                                        <span class="input-group-text"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-white" class="form-group">
                                <label for="">Additional information (optional)</label>
                                <input type="text" class="form-control bg-white" id='add-info' placeholder="Add more information...">
                                <!-- <textarea  style="resize: none" class="form-control bg-white" id="" rows="3"></textarea> -->
                            </div>
                            <div class="text-white">
                                <button type="button" onClick='requestDemo()' id='book-btn' class="btn btn-primary btn-lg">Submit</button>
                            </div>
                           
                            </form>
                        </div>
                        <div class="col-sm-12 col-lg-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    `
}
function setPopUp(element){
    let formPayload={
        service:element,
    }
    $(`.${element}`).magnificPopup({ 
        type: 'inline', 
        items: {
            src: setForm(formPayload),
        },
        fixContentPos: true, 
        closeBtnInside: false, 
        preloader: false, 
        removalDelay: 160, 
        mainClass: 'mfp-fade' ,
        callbacks:{
            open:async function(){
                try{
                    let {data:bookings} = await  axios.get(`${API_BASE_URL}/api/contactims/bookeddates`)
                    var DATE_RFC2822 = "ddd, DD MMM YYYY HH:mm:ss ZZ";
                    $('#datetimepicker').datetimepicker({
                        format: 'D/M/Y',
                        disabledDates:bookings.map(booking=>moment(booking.bookedDate).format(DATE_RFC2822))
                    });
                }catch(ex){
                        console.log(ex)
                }
            }
        }
    }); 
    
}
setPopUp('book-demo')