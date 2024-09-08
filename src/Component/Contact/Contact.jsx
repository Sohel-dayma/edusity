import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "927f5b19-d97e-41d2-95f9-f8eae63a0ac7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
       <div className='contact-col'>
         <h3>Send us a message <img src={msg_icon} alt='' /></h3>
         <p>Feel ree to reach out through contact from or find our contact information below.Your feedbacks,queations, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
         <ul>
            <li> <img src={mail_icon} /> abc@gmail.com</li>
            <li> <img src={phone_icon} /> +1 123-456-7890</li>
            <li> <img src={location_icon} />11 Masachusetts Ave, Cambridge, United States</li>
         </ul>
       </div>
        <div className='contact-col'>
           <form onSubmit={onSubmit}>
               <label> Your Name </label>
               <input type='text' name='name' placeholder='Enter your name' required />
               <label> phone Numbe </label>
               <input type='tel' name='phone' placeholder='Enter your Phone Number' required />
               <label> Write your message here </label>
               <textarea name='message' rows='6' placeholder='Enter your message' required ></textarea>
               <button type='submit' className='btn dark-btn'>Submit now <img src= {white_arrow}/></button>
           </form>
              <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
