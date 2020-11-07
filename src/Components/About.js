import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      // var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      // var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="seven columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
          </div>
          <div className="five columns">
            <h2>Contact Details</h2>
            <div className="columns contact-details">
              <div className="address">
                <span>{name}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  <a href="mailto:hxwd20@gmail.com">hxwd20@gmail.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
