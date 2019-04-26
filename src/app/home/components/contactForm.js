import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send"
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("/api/contactus", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log("Message not sent");
      });
  };
  render() {
    return (
      <section className="section--overlap cta cta-8">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-5 text-center">
              <div className="boxed bg--white box-shadow">
                <form
                  id="subForm"
                  data-error="Please fill all fields correctly."
                  data-success="Thanks for reaching out! We will ge back to you soon!"
                  onSubmit={e => this.formSubmit(e)}
                >
                  <div className="input-with-icon">
                    <label htmlFor="fieldName">Your Name</label>
                    <i className="icon icon-Male-2" />
                    <input
                      className="validate-required"
                      id="fieldName"
                      name="name"
                      type="text"
                      onChange={e => this.setState({ name: e.target.value })}
                      value={this.state.name}
                    />
                  </div>
                  <div className="input-with-icon">
                    <label htmlFor="fieldEmail">Email Address</label>
                    <i className="icon icon-Mail-2" />
                    <input
                      className="validate-required validate-email"
                      id="fieldEmail"
                      name="email"
                      type="email"
                      onChange={e => this.setState({ email: e.target.value })}
                      value={this.state.email}
                      required=""
                    />
                  </div>
                  <div className="input-with-icon">
                    <label htmlFor="fieldName">About your needs</label>
                    <i className="icon icon-Idea" />
                    <input
                      className="validate-required"
                      id="fieldMessage"
                      name="message"
                      onChange={e => this.setState({ message: e.target.value })}
                      value={this.state.message}
                      type="text"
                    />
                  </div>
                  <button type="submit" className="btn btn--primary vpe">
                    Send
                  </button>
                </form>
                <span className="type--fine-print">
                  View our
                  <a href="#top">privacy policy</a>
                </span>
              </div>
            </div>
            <div className="col-md-6 col-md-push-1 col-sm-7 col-sm-push-0">
              <h3>
                You alone can do it, but you can't do it alone.... give us a
                shout.
              </h3>
              <p>
                Fill out the form with your contact info and a few sentences
                about your idea or specific needs. Within one business day, we
                will contact you and set up a time to chat about how we can
                help. After our conversation, the arus team will put together a
                free customized quote for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
