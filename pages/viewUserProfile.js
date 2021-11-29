import Footer from "../components/Footer";
import Header from "../components/Header";
import OtherProfileInfo from "../components/OtherProfileInfo";

function viewUserProfile() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80)",
      }}
    >
      <Header />
      <OtherProfileInfo />
      <Footer />
    </div>
  );
}

export default viewUserProfile;
