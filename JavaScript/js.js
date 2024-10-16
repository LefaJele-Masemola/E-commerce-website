/* global let */

function showName() {

    var name = document.getElementById("fName").value;
    var surname = document.getElementById("lName").value;

    var full_name = name + " " + surname;

    document.getElementById("fullName").innerHTML = full_name;
    
    var name = document.getElementById("fName").value;
     var surname = document.getElementById("lName").value;
     
    if (name.length < 3) {
        
        //alert('Name should at least be 3 characters long');
        
        document.getElementById("errorName").innerHTML = "Name should at least be 3 characters long";
    }else{
        document.getElementById("errorName").innerHTML = "";
    }
    
     if (surname.length < 3) {
        
        //alert('Name should at least be 3 characters long');
        
        document.getElementById("errorSurname").innerHTML = "Surname too short";
    }else{
        document.getElementById("errorSurname").innerHTML = "";
    }
    
}

function openPage()  {
              var x= document.getElementById("search").value;
              
               if(x=== "bucket hat") {
             window.open("/ThankYou.html"); 
          }
          
          if(x=== "hoodie"){
           window.open("/Photo Gallery.html");   
          }

          }
         
        /*cart*/
        /* Set rates + misc */
var taxRate = 0.5;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
        

