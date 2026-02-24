import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { ComponentProps} from "react"

const API_URL = 'https://lab-2-eco.vercel.app';

export default function CreatePostPage() {
    const navigate = useNavigate();

    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');


    const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault()
    setError("")


        //aqui llamamos a la funcion de posttt del backend, para que funcione el crear
        //envia la peticion al backend
        fetch(`${API_URL}/posts`, {
            method: 'POST',
            //se envian datos en formato json
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageUrl, title, description }),
        })
            //primera respuesta del backend
            //si no es OK salta error
            .then((res) => {
                if (!res.ok) throw new Error('Failed to create post :(');
                return res.json();
            })
            //si todo salio bien, nos devolvemos a posts (luego de crear)
            .then(() => navigate('/posts'))
            //si algo falla al crear, slata error
            .catch(() => setError('Could not create the post. Check the fields!'));
    };

    return (
        <div className="min-h-screen bg-base-200/30">
            {/* Boton de backkk */}
            <Link
                to="/posts"
                className="
    fixed top-15 left-15
    px-10 py-3 rounded-lg
    text-[17px] font-medium
    bg-pink-600 text-white
    transition-all duration-300 ease-out
    hover:shadow-lg
    hover:scale-105
    active:scale-95"
            >
                Back
            </Link>

            {/* el formmms */}
            <div className="flex min-h-screen items-center justify-center p-6">
                <div className="w-full max-w-xl rounded-2xl border border-base-200 bg-base-100 p-8 shadow-sm">
                    <h1 className="text-[27px] text-pink-700 font-semibold tracking-tight">
                        Create Post
                    </h1>
                    <p className="mt-1 text-sm text-base-content/60">
                        Add an image, a title and a short description!
                    </p>

                    {error && (
                        <div className="mt-4 rounded-lg border border-error/20 bg-error/10 px-4 py-3 text-sm text-error">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                        <div>
                            <label className="block text-sm text-pink-700 font-medium mb-2">
                                Image URL
                            </label>
                            <input
                                required
                                type="url"
                                placeholder="https://..."
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="
                    input input-bordered w-full
                    focus:outline-none focus:ring-2 focus:ring-base-300
                "
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-2">
                                Title
                            </label>
                            <input
                                required
                                placeholder="Write a clear title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="
                    input input-bordered w-full
                    focus:outline-none focus:ring-2 focus:ring-base-300
                "
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-2">
                                Description
                            </label>
                            <textarea
                                required
                                placeholder="Write something short and cool :D"
                                rows={5}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="
                    textarea textarea-bordered w-full
                    focus:outline-none focus:ring-2 focus:ring-base-300
                "
                            />
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-2">
                            <Link
                                to="/posts"
                                className="
                                px-6 py-2
                                btn btn-ghost 
                                transition-all duration-300 ease-out
                                hover:shadow-lg
                                hover:scale-105
                                active:scale-95"
                            >
                                Cancel
                            </Link>
                            <button
                                className="
            px-6 py-2 rounded-lg
            text-white font-medium
            bg-pink-600
            transition-all duration-300 ease-out
            hover:shadow-lg
            hover:scale-105
            active:scale-95

"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
