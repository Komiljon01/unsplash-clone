// Firebase
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// Global Context
import { MdVerifiedUser } from "react-icons/md";

// React icons
import { useGlobalContext } from "../hooks/useGlobalContext";

// Toast
import { toast } from "sonner";

function Profile() {
  const { user } = useGlobalContext();

  const sendVerification = () => {
    sendEmailVerification(auth.currentUser, {
      url: "http://localhost:5173/profile",
    }).then(() => {
      toast.success("Verification sent. Check your email");
    });
  };

  return (
    <div className="align-elements py-10">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-stretch">
        <div>
          <img
            src={user.photoURL}
            alt={`${user.displayName} avatar`}
            className="h-40 w-40 rounded-full"
          />
        </div>
        <div className="grid grow grid-cols-2 gap-5 rounded-lg bg-base-200 p-5 lg:grid-cols-3">
          <h2>
            <span className="block font-medium">Full Name:</span>
            <span>{user.displayName}</span>
          </h2>

          <h2>
            <span className="block font-medium">Status user:</span>
            <span className="flex items-center gap-1">
              {user.emailVerified ? (
                <>
                  Verified <MdVerifiedUser className="text-xl text-green-500" />
                </>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Not verified! </span>
                  <button
                    className="btn btn-primary btn-xs"
                    onClick={sendVerification}
                  >
                    Send
                  </button>
                </span>
              )}
            </span>
          </h2>

          <h2>
            <span className="block font-medium">Email:</span>
            <span>{user.email}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
