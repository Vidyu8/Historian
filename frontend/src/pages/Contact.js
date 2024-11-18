import React, { useState } from "react";
import '../styles/contact.css';  // Link to an external CSS file (you can also use CSS modules or styled-components)

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, for example, sending the form data to an API
        console.log("Form submitted", formData);
    };

    return (
        <div>
            <header>
                <h1>Contact Us - Historian</h1>
            </header>

            <div className="container">
                {/* About Us Section */}
                <div className="about-us">
                    <h2>About Us</h2>
                    <p>Welcome to historian, where history comes alive through research, resources, and storytelling. As historians dedicated to preserving the past, we strive to offer accurate, well-researched, and insightful perspectives on historical events, figures, and periods.</p>
                    <p>Our mission is to make history accessible to all. Whether you're a student, educator, researcher, or history enthusiast, we offer a wealth of resources, including articles, historical documents, consultations, and lectures. We specialize in various fields of history.</p>
                    <p>If you're interested in historical research, have a question about a specific period, or would like to collaborate on a project, we'd love to hear from you!</p>
                </div>

                <br></br>

                {/* Contact Form */}
                <h2>Get in Touch</h2>
                <br></br>
                <p>We welcome inquiries about historical research, consultations, or educational resources. Please fill out the form below, and we'll respond as soon as possible.</p>
                <br></br>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="email">Your Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />

                    <input type="submit" value="Send Message" />
                </form>

                {/* Contact Info Section */}
                <div className="contact-info">
                    <h3>Contact Details:</h3>
                    <p>Email: <a href="mailto:contact@historian.com">contact@historian.com</a></p>
                    <p>Phone: +91 9876543210</p>
                    <p>Address: 371,ITPL Main Road,Bangalore,India</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}

export default ContactUs;
