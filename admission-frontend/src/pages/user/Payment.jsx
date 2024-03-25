import React from 'react'
import '../../assets/css/Payment.css'
import { useStates } from '../../services/States'
import { useNavigate } from 'react-router-dom'
export default function Payment() {

    const navigate=useNavigate();

    const gotohome=()=>{
        navigate("/home")
    }

    const{
        setAid,
        handlePaymentSubmit,
    }=useStates();

  return (
    <>

<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css' />
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />

<div class="container1">
  <div id="Checkout1" class="inline1">
      <h1>Pay Invoice</h1>
      <div class="card-row1">
          <span class="visa"></span>
          <span class="mastercard"></span>
          <span class="amex"></span>
          <span class="discover"></span>
      </div>
      <form>
          <div class="form-group">
             <b> <label for="PaymentAmount">Payment amount</label></b>
              <div class="amount-placeholder">
                  <span>Rs.</span>
                  <span>500.00</span>
              </div>
          </div>
          <br />
          <div class="form-group">
              <label for="NameOnCard"><b>Name on card</b></label>
              <br />
              <input id="NameOnCard" class="form-control" type="text" maxlength="255"></input>
          </div>
          <br />
          <div class="form-group">
              <label for="CreditCardNumber"><b>Card number</b></label>
              <br />
              <input id="CreditCardNumber" class="form-control" type="text" maxLength="9"></input>
          </div>
          <br />
          <div class="expiry-date-group form-group">
              <label for="ExpiryDate"><b>Expiry date</b></label>
              <br />
              <input id="ExpiryDate" class="form-control" type="text" placeholder="MM / YY" maxlength="7"></input>
          </div>
          <div class="security-code-group form-group">
              <label for="SecurityCode"><b>Security code</b></label>
              <div class="input-container" >
                  <input id="SecurityCode" class="form-control" type="text" ></input>
                  <i id="cvc" class="fa fa-question-circle"></i>
              </div>
          </div>
          <button id="PayButton" class="btn btn-block btn-success submit-button" type="submit" onClick={handlePaymentSubmit}>
              <span class="submit-button-lock"></span>
              <span class="align-middle">Pay Rs.500.00</span>
          </button>
          <button id="PayButton" class="btn btn-block btn-success submit-button" onClick={gotohome}>
              Cancel
          </button>
      </form>
  </div>
</div>
    </>
  )
}