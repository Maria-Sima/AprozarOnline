import {useParams} from 'react-router-dom'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'
import SingleBanner from '../../Components/Banners/SingleBanner.jsx'
import UserSidebar from '../../Components/UserProfile/UserSidebar/UserSidebar.jsx'
import AccountSettings from '../../Components/UserProfile/AccountSettings/AccountSettings.jsx'
import './UserProfile.scss'
import ChangePassword from '../../Components/UserProfile/ChangePassword.jsx'
import YourOrders from '../../Components/UserProfile/YourOrders/YourOrders.jsx'

const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
    return (<div className='userprofile'>
            <SingleBanner
                heading={`My Profile`}
                bannerimage='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            />

            <div className='userprofilein'>
                <div className='left'>
                    <UserSidebar activepage={activepage}/>
                </div>
                <div className='right'>
                    {activepage === 'accountsettings' && <AccountSettings/>}
                    {activepage === 'changepassword' && <ChangePassword/>}
                    {activepage === 'yourorders' && <YourOrders/>}
                </div>
            </div>
            <Footer1/>
            <Footer2/>
        </div>)
}

export default UserProfile