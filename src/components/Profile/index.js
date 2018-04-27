import React from 'react';
import profileImage from '../../../public/default-image.png';

const Profile = props => (
  <div className="bg-light-purple height-50px pad-box display-flex align-items-center">
    <img
      className="width-40px border-radius-50-percent border-white-2px cursor-pointer"
      src={profileImage}
      alt="Profile pic"
    />
    <div className="margin-left-10">
      <span className="font-size-small display-block font-size-small color-white line-height-6 margin-top-12">Brodey Newman</span>
      <span className="display-block color-white"><b>yBrodey</b></span>
    </div>
  </div>
);

export default Profile;
