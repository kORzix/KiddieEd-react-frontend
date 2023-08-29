import loginNav from '../../images/games-nav-img.png';
import profile from '../../images/profile.png';
import Navbar from '../../components/navbar';

function Profile() {
  return (
    <div className="Profile">
      <Navbar img={loginNav} />

      {/* <div className="text-center">
        <div className="nav-buttons">
          <Link to="/profile" className="nav-button-main">Profile</Link>
        </div>
      </div> */}

      <div className="container mb-5 mt-5" style={{ padding: '4em 1em 4em 1em', display: 'flex', justifyContent: 'center'}}>
        <div className="row d-flex justify-content-center" style={{ maxWidth: '800px', margin: '0 auto'}}>
          {/* <div className="col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="row"> */}
              <div className="col-xl-6 d-flex justify-content-center">
                <img src={profile} className="img-fluid" alt="Profile" />
              </div>
              <div className="col-xl-6 mt-5 d-flex justify-content-center">
                <div className='table-responsive'>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>Nirwan Rajapaksha</td>
                      </tr>
                      <tr>
                        <th>Age</th>
                        <td>6</td>
                      </tr>
                      <tr>
                        <th>Country</th>
                        <td>Sri Lanka</td>
                      </tr>
                      <tr>
                        <th>Level</th>
                        <td>Level 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
}

export default Profile;
