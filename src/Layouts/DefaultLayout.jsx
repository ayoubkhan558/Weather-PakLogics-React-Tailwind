
import NavBar from "@layouts/NavBar";
import Footer from "@layouts/Footer";

function DefaultLayout(props) {

  return (
    <>
      <header className="">
        <NavBar />
      </header>
      <div className="flex flex-col">
        {props.children}
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
