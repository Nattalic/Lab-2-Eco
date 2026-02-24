import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Post } from "../types/post";
import PostCard from "../components/PostCard";

//nuestro backend
const API_URL = "https://lab-2-eco.vercel.app";

export default function PostsListPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  //fetch de nuestro backend
    useEffect(() => {
        fetch(`${API_URL}/posts`)
        .then((res) => res.json())
        .then((data: Post[]) => {
            setPosts(data);
        })
        .catch((error) => {
            console.error("Error fetching posts :(", error);
        });
    }, []);

    //aqui llamamos a la funcion de delete del backend, para que funcione
    const handleDelete = (id: string) => {
        fetch(`${API_URL}/posts/${id}`, { method: "DELETE" })
        .then((res) => {
            if (!res.ok) throw new Error("Delete failed");
            // quita el post de la lista sin recargar
            setPosts((prev) => prev.filter((p) => p.id !== id));
        })
        .catch((error) => {
            console.error("Error deleting post :(", error);
        });
    };

    return (
        <div className="p-6 ">
        <h1 className="justify-center text-4xl font-bold mb-4 text-cyan-950">Posts (´・ω・`) </h1>

        {posts.length === 0 && <p>No posts yet.</p>}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDelete} />
            ))}
        </div>

        {/* burbuja + */}
        <Link
            to="/create"
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-pink-600 text-white text-3xl pb-1.5 flex items-center justify-center shadow-lg hover:-translate-y-2 transition"
        >
            +
        </Link>
        </div>
    );
}
