import React, { useState } from "react";
import "./Cart.css";
// import Facewash from  "../assets/images/01.jpg";

// function Cart() {
//     const [formData, setFormData] = useState({
//         fullName: "",
//         dob: "",
//         mobileNumber: "",
//         email: "",
//         address: "",
//         pincode: ""
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form Data Submitted:", formData);
//         alert("Form submitted successfully!");
//     };

//     return (
//         <div className="form-container">
//             <h1>Delivery Information</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="fullName">First Name:</label>
//                     <input
//                         type="text"
//                         id="fullName"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         placeholder="Enter first name"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="fullName">Last Name:</label>
//                     <input
//                         type="text"
//                         id="fullName"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         placeholder="Enter last name"
//                         required
//                     />
//                 </div>
                
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter email address"
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="mobileNumber">Mobile</label>
//                     <input
//                         type="tel"
//                         id="mobileNumber"
//                         name="mobileNumber"
//                         value={formData.mobileNumber}
//                         onChange={handleChange}
//                         placeholder="Enter mobile number"
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="pincode">Pincode:</label>
//                     <input
//                         type="text"
//                         id="pincode"
//                         name="pincode"
//                         value={formData.pincode}
//                         onChange={handleChange}
//                         placeholder="Enter Pincode"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="State">State</label>
//                     <input
//                         type="text"
//                         id="State"
//                         name="State"
//                         value={formData.State}
//                         onChange={handleChange}
//                         placeholder="Enter State"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="City">City</label>
//                     <input
//                         type="text"
//                         id="State"
//                         name="State"
//                         value={formData.State}
//                         onChange={handleChange}
//                         placeholder="Enter City"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="Address">Address Line 1</label>
//                     <input
//                         type="text"
//                         id="Address"
//                         name="Address"
//                         value={formData.State}
//                         onChange={handleChange}
//                         placeholder="Enter Address "
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="Address">Address Line 2</label>
//                     <input
//                         type="text"
//                         id="Address"
//                         name="Address"
//                         value={formData.State}
//                         onChange={handleChange}
//                         placeholder="Enter Address "
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <h3>Payment Methods</h3>
//                     <label htmlFor="Payment">Online Payment</label>
//                     <input
//                         type="radio"
//                         id="payment"
//                         name="payment"
//                         value="Online Payment"
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="Payment">Cash On Delivery</label>
//                     <input
//                         type="radio"
//                         id="payment"
//                         name="payment"
//                         value="Cash on Delivery"
//                         onChange={handleChange}
//                     />
//                 </div>


//                 <button type="submit" className="submit-button">Total  ₹</button>
//             </form>
//         </div>
//     );
// }
// import React, { useState } from "react";
// import "./CheckoutForm.css";

function Cart() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    paymentMethod: "Online Payment",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-container">
      <form className="delivery-form" onSubmit={handleSubmit}>
        <h1>Delivery Information</h1>
        <div className="form-group">
            <label htmlFor="fullName">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="fullName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <label htmlFor="State">State</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <label htmlFor="City">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="Address">Address Line 1</label>
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1"
            value={formData.address1}
            onChange={handleChange}
          />
          <label htmlFor="Address">Address Line 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <h2>Payment Methods</h2>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Online Payment"
              checked={formData.paymentMethod === "Online Payment"}
              onChange={handleChange}
              required
            />
            Online Payment
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cash on Delivery"
              checked={formData.paymentMethod === "Cash on Delivery"}
              onChange={handleChange}
              required
            />
            Cash on Delivery
          </label>
        </div>
        {/* <button type="submit" className="submit-button">Total ₹</button> */}
      </form>

      <div className="product-summary">
        <h1>Product Summary</h1>
        <div className="product-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35W5Jiu8Kf6f3Psm6SvFzf45FNoJMAXuMzA&s" alt="Glower Face Cleanser"/>
          <p>Glower Face Cleanser</p>
          <p>₹499 x 2</p>
        </div>
        <hr />
        <p>Subtotal: ₹998.00</p>
        <p>Shipping: Free</p>
        <h2>Total: ₹998</h2>
        <button type="submit" className="submit-button">Total ₹</button>
      </div>
    </div>
  );
}

// export default CheckoutForm;


export default Cart;

