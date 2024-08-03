import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/book-store-background.jpg')" }}
    >
      <SignIn path="/" />
    </div>
  );
};

export default SignInPage;
