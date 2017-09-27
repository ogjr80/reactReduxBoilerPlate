import React, {Component} from 'react';
import LeftComponent from './Profile/LeftComponent'; 
import RightComponent from './Profile/RightComponent'; 

class Profile extends Component{
  render(){
    return (
      <div className="container" style={{marginTop: 20}}>
        <div className="row">
          <div className="col-md-3">
            <LeftComponent />
          </div>


      <div className="col-md-7">
          <RightComponent />
      	</div>
      </div>
    </div>

    )
  }
}

export default Profile;
