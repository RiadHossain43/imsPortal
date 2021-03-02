async function requestService(){
    let personName = $("#person-name").val().trim()
    let personEmail = $("#person-email").val().trim()
    let personTile = $("#person-title").val().trim()
    let personOrg = $("#person-org").val().trim()
    let service =  $("#service").val().trim()

    if(personName==''||personEmail==''||personOrg==''||personTile=='') 
    return swal({
        title: "Alert",
        text: "Please fill the required fields",
        icon: "warning",
    });
    console.log({
        name:personName ,
        email:personEmail ,
        jobTitle:personTile ,
        organisationName:personOrg ,
        service,
        iso27001:$("input[name='iso27001']:checked")?true:false,
        iso27002:$("input[name='iso27002']:checked")?true:false,
        iso20000:$("input[name='iso20000']:checked")?true:false,
        iso45001:$("input[name='iso45001']:checked")?true:false,
    })
    try{
        let  response = await axios.post(`${API_BASE_URL}/api/contactims/getstarted`,{
            name:personName ,
            email:personEmail ,
            jobTitle:personTile ,
            organisationName:personOrg ,
            service,
            iso27001:$('#chkiso27001').is(':checked'),
            iso27002:$('#chkiso27002').is(':checked'),
            iso20000:$('#chkiso20000').is(':checked'),
            iso45001:$('#chkiso45000').is(':checked'),
            iso14001:$('#chkiso14001').is(':checked'),
            iso22301:$('#chkiso22301').is(':checked'),
            iso9001 :$('#chkiso9001').is(':checked'),

        })
        swal({
            title: "Thank You",
            text: "For your interest in iMS Systems. One of our experts will get in contact to discuss next steps",
            icon: "success",
        });
        $("#person-name").val('')
        $("#person-email").val('')
        $("#person-title").val('')
        $("#person-org").val('')
        $.magnificPopup.close()

    }catch(ex){
        console.log(ex.response)
        swal({
            title: "Error",
            text: "Server error occured",
            icon: "error",
        });
    }
}
function setForm(payLoad){
    console.log(payLoad)
    return  `
<div class="cta get-started-form my-5" style='z-index:99' >
    <div class="container my-5">
        <div class="row mini-section-separator relative">
            <div class="overlay-img">
                <div class="each-color image-bg" style="background-image:url(assets/images/cta-overlay.svg)"></div>
            </div>
            <div class="cta-inner col-sm-12">
                <div class="row vertical-middle-content">
                    <div class="col-sm-12 col-lg-2">
                        
                    </div>
                    <div class="col-lg-8">
                        <form>
                        <h2 class='text-white text-center'>Let's talk !!!</h2>
                        <div class="form-group">
                            <label class="text-white" for="">Requested service</label>
                            <input id='service' disabled type="text" class="form-control bg-white text-info" id="" value="Request for ${payLoad.service}">
                        </div>
                        ${
                            payLoad.service === "package-iso"? 
                            `
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="iso20000" id="chkiso20000">
                                <label class="form-check-label text-white mb-1" for="flexCheckDefault">
                                ISO 20000
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="iso27001" id="chkiso27001">
                                <label class="form-check-label text-white mb-1" for="flexCheckChecked">
                                ISO 27001
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="iso27002" id="chkiso27002">
                                <label class="form-check-label text-white mb-1" for="flexCheckChecked">
                                ISO 27002
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="iso9001" id="chkiso9001">
                                <label class="form-check-label text-white mb-1" for="flexCheckChecked">
                                ISO 9001
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="iso45001" id="chkiso45001">
                                <label class="form-check-label text-white mb-1" for="flexCheckChecked">
                                ISO 45001
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="iso22301" id="chkiso22301">
                                <label class="form-check-label text-white mb-1" for="flexCheckChecked">
                                ISO 22301
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="iso14001" id="chkiso14001">
                                <label class="form-check-label text-white mb-2" for="flexCheckChecked">
                                ISO 14001
                                </label>
                            </div>
                            `:'' 
                        
                        }
                        <div class="form-group">
                            <label class="text-white" for="">Name</label>
                            <input id='person-name' type="text" class="form-control bg-white" id="" placeholder="Your name here...">
                        </div>
                        <div class="form-group">
                            <label class="text-white" for="">Email address</label>
                            <input id='person-email' type="email" class="form-control bg-white" id="" placeholder="name@example.com">
                        </div>
                        <div class="text-white" class="form-group">
                            <label for="">Title</label>
                            <input id='person-title' type="text" class="form-control bg-white" id="" placeholder="Title here...">
                        </div>
                        <div class="text-white" class="form-group">
                            <label  for="">Organisation</label>
                            <input id='person-org' type="text" class="form-control bg-white" id="" placeholder="Organisation name...">
                        </div>
                        <div class="text-white">
                            <button type="button" id='get-started-submit-btn' onClick='requestService()' class="btn btn-primary btn-lg">Submit</button>
                        </div>
                        </form>
                    </div>
                    <div class="col-sm-12 col-lg-2">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
}


function setPopUp(elementId){
    let formPayload={
        service:elementId,
    }
    $(`#${elementId}`).magnificPopup({ 
        type: 'inline', 
        items: {
            src: setForm(formPayload),
        },
        fixContentPos: true, 
        closeBtnInside: false, 
        preloader: false, 
        removalDelay: 160, 
        mainClass: 'mfp-fade' 
    }); 
}

setPopUp('package-iso')
setPopUp('package-cqc')
setPopUp('package-dspt')
