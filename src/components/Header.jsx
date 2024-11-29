import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 p-4 mx-4'>
            <h1 className='text-4xl font-bold '>Knowledge Zone</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;