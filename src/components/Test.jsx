// import { LoginSocialFacebook } from "reactjs-social-login";
// import { FacebookLoginButton } from "react-social-login-buttons";
import FacebookLogin from "react-facebook-login";
import { useState } from "react";
// import axios from "axios";
const Test = () => {
  const [profile, setProfile] = useState(null);
  // const [pages, setPages] = useState([]);

  const handleFacebookCallback = (response) => {
    if (response?.status === "unknown") {
      console.error("Sorry!", "Something went wrong with facebook Login.");
      return;
    }
    console.log(response);
    setProfile(response.data);
  };

  return (
    <div>
      {!profile ? (
        <FacebookLogin
          buttonStyle={{ padding: "6px" }}
          appId="946726573608245" // we need to get this from facebook developer console by setting the app.
          autoLoad={false}
          fields="name,email,picture"
          callback={handleFacebookCallback}
        />
      ) : null}

      {profile ? (
        <div>
          <h1>{profile.name} my username</h1>
          <img src={profile.picture.data.url} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default Test;
