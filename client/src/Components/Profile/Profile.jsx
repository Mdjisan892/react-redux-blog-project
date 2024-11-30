import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-lg">
      <img
        src={user.picture}
        alt={user.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
    </div>
    
    )
  );
};

export default Profile;