'use client';

import Alert from 'react-bootstrap/Alert';
import Image from 'next/image';
import heroContact from 'public/img/hero-contact.jpg';
import { useRef, useState, useEffect } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const ContactPage = () => {
  const serverId = process.env.NEXT_PUBLIC_SERVER_ID
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  if (!serverId || !templateId || !publicKey) {
    throw new Error('Environment variables not set');
  }
  const form = useRef<HTMLFormElement | null>(null);

  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (emailSent) {
      timer = window.setTimeout(() => {
        setEmailSent(false);
      }, 5000); // time in milliseconds
    }

    // Cleanup function to clear the timeout when the component is unmounted or if the email is sent multiple times
    return () => clearTimeout(timer);
  }, [emailSent]);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs.sendForm(serverId, templateId, form.current, publicKey).then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        setEmailSent(true);
      },
      (error: Error) => {
        console.log(error.message);
      }
    );

    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <div className="contact-page">
      <section className="heading-section section section-on-bg">
        <div className="hero-wrapper">
          <Image
            src={heroContact}
            style={{ width: '100%', objectFit: 'cover' }}
            height={360}
            alt="hero-contact"
          />
          <div className="hero-mask-solid"></div>
        </div>

        <div className="container heading-content">
          <h2 className="headline">Get in Touch</h2>
          <div className="meta">
            We&apos;d love to hear from you. Lorem ipsum dolor sit amet,
            <br className="d-none d-md-block" />
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </div>
        </div>
      </section>

      <div className="contact-methods">
        <div className="container">
          <div className="row">
            <div className="item col-12 col-md-6">
              <div className="item-inner">
                <h4 className="item-title">
                  <i
                    className="fas fa-phone-volume item-icon"
                    aria-hidden="true"
                  ></i>{' '}
                  Enterprise Sales
                </h4>
                <div className="item-content">
                  Lorem ipsum dolor sit amet, consectetuer. Contact our sales
                  team at <p className="text-link">xxxx xxx xxx</p>.
                </div>
              </div>
            </div>

            <div className="item col-12 col-md-6">
              <div className="item-inner">
                <h4 className="item-title">
                  <i className="fas fa-users item-icon" aria-hidden="true"></i>{' '}
                  Partnership Inquiries
                </h4>
                <div className="item-content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor Use the contact form below.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-block">
        {emailSent && (
          <Alert
            className="email-alert"
            key={'success'}
            variant={'success'}
            onClose={() => setEmailSent(false)}
            dismissible
          >
            Email has been sent successfully!
          </Alert>
        )}
        <form
          id="contact-form"
          className="contact-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <h3 className="form-title text-center">Quick Contact Form</h3>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label className="sr-only" htmlFor="cname">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="cname"
                name="user_name"
                placeholder="Name"
                minLength={2}
                required
                aria-required
              />
            </div>
            <div className="form-group col-12 col-md-6">
              <label className="sr-only" htmlFor="cemail">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="cemail"
                name="user_email"
                placeholder="Email"
                required
                aria-required
              />
            </div>
            <div className="form-group col-12">
              <label className="sr-only" htmlFor="cmessage">
                Your message
              </label>
              <textarea
                className="form-control"
                id="cmessage"
                name="message"
                placeholder="Enter your message"
                rows={12}
                required
                aria-required
              ></textarea>
            </div>
            <div className="form-group col-12">
              <button type="submit" className="btn w-100 btn-cta btn-warning">
                Send It
              </button>
            </div>
          </div>
          <div id="form-messages"></div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
