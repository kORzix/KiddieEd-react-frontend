import loginNav from '../../images/games-nav-img.png';
import profile from '../../images/profile.png';
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar';

function Profile() {
  return (
    <div className="Profile">
      <Navbar img={loginNav} />

      <div className="container" style={{ padding: '6em', display: 'flex', justifyContent: 'center' }}>
        <div className="row" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="col-md-4 col-lg-3 text-center">
            <div className="nav-buttons mb-4">
              <Link to="/profile" className="nav-button-main">Profile</Link>
            </div>
          </div>

          <div className="col-md-8 col-lg-9 sub-container" style={{ border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="row" style={{ border: '1px solid red', width: '100%' }}>
              <div className="col-md-6">
                <img src={profile} className="profile-img img-fluid" alt="Profile" />
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Alex Thompson</td>
                    </tr>
                    <tr>
                      <td>Age</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>Sri Lanka</td>
                    </tr>
                    <tr>
                      <td>Level</td>
                      <td>Level 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
