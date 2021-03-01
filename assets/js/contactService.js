
async function requestDemo(){
    let personName = $("#person-name").val()
    let personEmail = $("#person-email").val()
    let personTile = $("#person-title").val()
    let personOrg = $("#person-org").val()
    let addInfo =  $("#addInfo").val()

    let formData = new FormData();
    formData.append('name', personName);
    formData.append('email', personEmail);
    formData.append('title', personTile);
    formData.append('org', personOrg);
    formData.append('additionalInfo', addInfo);


    try{
        let  data = await fetch("http://localhost:5000/api/contactims",{
            body: formData,
            method: "POST",
        })
    }catch(ex){
        console.log(ex)
    }
}
 

$('#book-btn').click(requestDemo)

let html =  
`
<div class="cta" >
    <div class="container">
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
                            <label id='person-org' for="">Organisation</label>
                            <input type="email" class="form-control bg-white" id="" placeholder="Organisation name...">
                        </div>
                        <div class="text-white" class="form-group">
                            <label for="exampleFormControlTextarea1">Additional information</label>
                            <textarea class="form-control bg-white" id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                        <div class="text-white">
                            <button type="button" id='book-btn' class="btn btn-primary btn-lg">Submit</button>
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
$('.get-started').magnificPopup({ 
    type: 'inline', 
    items: {
        src: '#contact-form'
    },
    // Fixed position will be used 
    fixContentPos: true, 

    // Since disabled, Magnific Popup 
    // will not put close button 
    // inside content of popup 
    closeBtnInside: false, 
    preloader: false, 

    // Delay in milliseconds before 
    // popup is removed 
    removalDelay: 160, 

    // Class that is added to 
    // popup wrapper and background 
    mainClass: 'mfp-fade' 
}); 