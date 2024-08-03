/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        alert("An error has occured. Please check console");
        console.log(error);
      });
  }, []);

  const handleUpdateBook = () => {
    const editedBook = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, editedBook)
      .then((response) => {
        setLoading(false);
        // Show success toast notification
        toast.success("Book Updated successfully!", {
          theme: "colored",
          position: "bottom-center",
          autoClose: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // Show error toast notification
        toast.error("Please Fill The required Fields", {
          theme: "colored",
          position: "bottom-center",
          autoClose: 2000,
        });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            required
            value={publishYear}
            onChange={(e) => {
              setPublishYear(e.target.value);
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8 cursor-pointer"
          onClick={handleUpdateBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
