import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
export const CreatePost = () => {
  const navigate = useNavigate();
  const postsRef = collection(db, "post");
  const handleSubmit = (e) => {
    e.preventDefault();
    const document = {
      title: e.target.title.value,
      description: e.target.description.value,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
      },
    };
    addDoc(postsRef, document);
    navigate("/");
  };
  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form onSubmit={handleSubmit} className="createPost">
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          type="text"
          className="description"
          name="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
