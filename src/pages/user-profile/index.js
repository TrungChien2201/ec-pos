import UserProfile from "views/UserProfile";
import { withAuth } from 'middleware/auth';

const UserProfilePage = () => {
  return (
    <UserProfile />
  );
};

// Apply authentication middleware to this page
export const getServerSideProps = withAuth();

export default UserProfilePage;
