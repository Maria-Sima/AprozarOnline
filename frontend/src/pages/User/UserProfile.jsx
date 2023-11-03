import { useParams } from 'react-router-dom';
import SingleBanner from '../../components/Banners/SingleBanner.jsx';
import Footer1 from '../../components/Footer/Footer1.jsx';
import Footer2 from '../../components/Footer/Footer2.jsx';
import AccountSettings from '../../components/UserProfile/AccountSettings/AccountSettings.jsx';
import ChangePassword from '../../components/UserProfile/ChangePassword.jsx';
import UserSidebar from '../../components/UserProfile/UserSidebar/UserSidebar.jsx';
import './UserProfile.scss';

const UserProfile = () => {
  const { activepage } = useParams();

  return (
    <div className="userprofile">
      <SingleBanner
        heading={`My Profile`}
        bannerimage="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />

      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {activepage === 'accountsettings' && <AccountSettings />}
          {activepage === 'changepassword' && <ChangePassword />}
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default UserProfile;
