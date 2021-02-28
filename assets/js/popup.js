const html = `

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
                            <input type="text" class="form-control bg-white" id="" placeholder="">
                        </div>
                        <div class="form-group">
                            <label class="text-white" for="">Email address</label>
                            <input type="email" class="form-control bg-white" id="" placeholder="name@example.com">
                        </div>
                        <div class="text-white" class="form-group">
                            <label for="">Title</label>
                            <input type="email" class="form-control bg-white" id="" placeholder="">
                        </div>
                        <div class="text-white" class="form-group">
                            <label for="">Organisation</label>
                            <input type="email" class="form-control bg-white" id="" placeholder="">
                        </div>
                        <div class="text-white" class="form-group">
                            <label for="exampleFormControlTextarea1">Details</label>
                            <textarea class="form-control bg-white" id="exampleFormControlTextarea1" rows="10"></textarea>
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
    items:[
        {
            src: html, // CSS selector of an element on page that should be used as a popup
            type: 'inline'
        }
    ]
});