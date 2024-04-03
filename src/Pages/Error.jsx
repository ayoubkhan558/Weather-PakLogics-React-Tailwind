
import { Link } from "react-router-dom"

import ErrorImg from "/404.png"

function Error() {

  return (
    <div className="container-main min-h-screen mb-5">
      <div className="flex justify-center bg-blue-400/30 backdrop-blur rounded-lg overflow-hidden shadow-lg">
        <div className="p-4 lg:px-5 xl:px-7 2xl:p-8 text-white">
          <img className="h-72 md:h-72 lg:h-72 xl:h-72 2xl:h-72" src={ErrorImg} alt="Error image" />
          <h1 className="my-2 font-semibold text-2xl">
            Error 404
          </h1>
          <p className="my-2">Sorry about that! Please visit our hompage to get where you need to go.</p>
          <Link to="/" className="btn-main">
            Take me there!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;