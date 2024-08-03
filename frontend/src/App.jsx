/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import SignInPage from "./pages/SignInPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <SignedIn>
        <UserButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </SignedIn>
      <SignedOut>
        <SignInPage />
      </SignedOut>
    </div>
  );
};

export default App;
