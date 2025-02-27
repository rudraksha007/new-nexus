import { RedirectToSignIn } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <RedirectToSignIn redirectUrl={'/'}/>
    </div>
  );
};

export default Home;
