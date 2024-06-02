<body>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#contactModal">
</button>

<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="contactModalLabel">Contact Us</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="contact-name">Name</label>
            <input type="text" class="form-control" id="contact-name" placeholder="Enter your name"/>
          </div>
          <div class="form-group">
            <label for="contact-email">Email</label>
            <input type="email" class="form-control" id="contact-email" placeholder="Enter your email"/>
          </div>
          <div class="form-group">
            <label for="contact-book name">Book name</label>
            <input type="bookname" class="form-control" id="contact-email" placeholder="Enter the book name"/>
          </div>
          <div class="form-group">
            <label for="contact-message">Message</label>
            <textarea class="form-control" id="contact-message" rows="3" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
</body>