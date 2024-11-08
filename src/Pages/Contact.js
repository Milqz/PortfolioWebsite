import React from 'react'
import Github from "../Components/Github"
import LinkedIn from "../Components/LinkedIn"

export default function Contact() {

        const [result, setResult] = React.useState("");

        const onSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);

            formData.append("access_key", "880608e2-3d16-4cef-9377-0e3b434a4003");

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
        <div>
            <section className="contact">
                <form onSubmit={onSubmit}>
                    <h2>Contact now</h2>
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" className="field" placeholder="Enter your name" name="name" required/>
                    </div>
                    <div className="input-box">
                        <label>Email Addres</label>
                        <input type="email" className="field" placeholder="Enter your email" name="email" required/>
                    </div>
                    <div className="input-box">
                        <label>Your Message</label>
                        <textarea name="message" className="field mess" placeholder="Enter your message"
                                  required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>
            <div className="linksTile">
                <Github/>
                <LinkedIn/>
            </div>
        </div>
    )
}