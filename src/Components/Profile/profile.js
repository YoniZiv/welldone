import React, { Component, PropTypes } from "react";
import Header from "../Header/header";
import AppContainer from "../../StyledComponents/app-container";
import headerText from "../../assets/header-text";
import Slavs from "../Slavs/slavs";
import Locations from "../Locations/locations";

const Profile = () => (
  <section id="app-profile">
    <Header title={ headerText.Profile.title } subTitle={ headerText.Profile.subTitle } />
      <AppContainer>
        {/*<Slavs/>*/}
        <Locations/>
      </AppContainer>
  </section>
)

const text = "Some header";
const subText = "Some subText";

export default Profile;
