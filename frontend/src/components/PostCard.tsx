import type { Post } from '../types/post';

type PostCardProps = {
    post: Post;
    onDelete: (id: string) => void;
};

export default function PostCard({ post, onDelete }: PostCardProps) {
    return (
        <div className="card bg-base-100 w-90 h-105 shadow-md">
            <figure className="overflow-hidden">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-80 w-full object-cover"
                />
            </figure>

            <div className="card-body">
                <h2 className="text-[20px] text-lg font-bold">{post.title}</h2>

                <p className="text-[17px] opacity-70 line-clamp-3">{post.description}</p>

                <div className="card-actions justify-end mt-4">
                    <button
                        onClick={() => onDelete(post.id)}
                        className="
                cursor-pointer
                px-8 py-3
                rounded-md
                text-sm font-medium
                text-neutral-600
                bg-neutral-100
                transition-all duration-300 ease-out
                hover:bg-pink-600
                hover:text-white
                hover:scale-105
                shadow-pink-300
                hover:shadow-md
                active:scale-95
            "
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
