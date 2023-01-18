import { ArrowCircleLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { Error } from "../components/Error";
import Navbar from "../components/navBar";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1">
        <div className="min-h-full w-full flex flex-col items-center justify-center gap-8 lg:flex-row text-center">
          <Error />

          <div className="flex flex-col">
            <span className="text-4xl font-extrabold">Oops!</span>
            <span className="leading-loose text-xl text-blue-500 ">
              Como você veio parar aqui?
            </span>

            <Link
              to="/"
              className="flex items-center justify-center text-md mt-2 gap-2 hover:text-blue-100"
            >
              <ArrowCircleLeft />
              Voltar
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}