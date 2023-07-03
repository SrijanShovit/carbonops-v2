import { useRouter } from "next/navigation";

const protectRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    // Check if user is logged in, if not, redirect to login page
    const isLoggedIn = false; // Add your authentication logic here

    //if we are using  JWT token for authenticating user  after login  then we can keep track of JWT token in local storage or in session also and from here we can authenticate the user .

    if (!isLoggedIn) {
      // Redirect to login page if user is not  logged in
      router.replace("/login");
      return null; // Return null to prevent rendering the protected component
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default protectRoute;
