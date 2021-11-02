import { getProviders, signIn } from "next-auth/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../components/Login";

// Client-side
function SignIn(
  {
    /*providers*/
  }
) {
  return (
    <>
      <Header />
      <Login />
      {/* <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  signIn(provider.id, { callbackUrl: "/" }, { prompt: "login" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div> */}
      <Footer />
    </>
  );
}

// Server-side
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
