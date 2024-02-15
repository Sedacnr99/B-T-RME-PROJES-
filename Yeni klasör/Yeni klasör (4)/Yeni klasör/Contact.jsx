import React from 'react'

function contact() {
  return (
    <div>
      <div class="container">
  <label for="exampleFormControlInput1" class="form-label">E-posta</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Mesajınız</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-success">Gönder</button>
    </div>
  )
}

export default contact
