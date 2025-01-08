import React, { useState } from 'react';
import '../assets/styles/Faq.css';  // Assuming styles are in this file

const FAQ = () => {
    // State to track the expanded/collapsed state of each FAQ item
    const [expandedFAQ, setExpandedFAQ] = useState(null);

    // Function to toggle the expanded state of a FAQ item
    const toggleFAQ = (index) => {
        if (expandedFAQ === index) {
            setExpandedFAQ(null); // If clicked item is already expanded, collapse it
        } else {
            setExpandedFAQ(index); // Otherwise, expand the clicked item
        }
    };

    // FAQ data array
    const faqData = [
        {
            question: "What is included in each pricing package?",
            answer: "Each package includes a specific amount of photography time, RAW files, edited photos, and premium film collages. Additional services like makeup and hairstyling are also available."
        },
        {
            question: "Can I customize a package based on my needs?",
            answer: "Yes, you can! Please get in touch with us to discuss your specific requirements, and we will tailor a package just for you."
        },
        {
            question: "How can I book a session?",
            answer: "You can easily book a session by clicking on the 'Get A Quote' button in the pricing section or by contacting us directly through the provided contact form."
        },
        {
            question: "Do you offer any discounts for large events or bookings?",
            answer: "Yes, we offer discounts for large events and bulk bookings. Please contact us for more details on pricing and available offers."
        },
        {
            question: "What happens if I need to cancel or reschedule my booking?",
            answer: "We understand that plans can change. If you need to cancel or reschedule, please contact us as soon as possible. Our team will assist you with the next steps."
        },
        {
            question: "Do you have video services?",
            answer: "Yes, we offer video services! Please reach out to discuss your specific video requirements."
        },
        {
            question: "Is there a difference in quality among the photographers of your team?",
            answer: "All photographers on our team maintain a high standard of quality, ensuring that your photos are consistently exceptional. Each photographer brings their own unique style, so feel free to discuss your preferences with us."
        },
        {
            question: "Will you be posting images of our wedding on your pages/blogs/Instagram?",
            answer: "We would love to share the beautiful moments from your wedding on our platforms. However, if you prefer privacy, let us know, and we will respect your wishes."
        }
    ];

    return (
        <section id="faqs" className="faq-section pt-5 pb-5">
            <div className="container">
                <h3 className="faq-subtitle">Frequently Asked Questions</h3>
                <h2 className="section-title">Everything You Need to Know</h2>
                <div className="accordion mt-4" id="faqAccordion">
                    {faqData.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-header" id={`heading${index}`}>
                                <button
                                    className={`faq-toggle ${expandedFAQ === index ? 'collapsed' : ''}`}
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={expandedFAQ === index ? 'true' : 'false'}
                                    aria-controls={`collapse${index}`}
                                >
                                    {faq.question}
                                </button>
                            </div>
                            <div
                                id={`collapse${index}`}
                                className={`collapse ${expandedFAQ === index ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-parent="#faqAccordion"
                            >
                                <div className="faq-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
