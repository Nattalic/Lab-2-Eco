import type { Post } from "../types/post"

type PostCardProps = {
  post: Post
  onDelete: (id: string) => void
}

export default function PostCard({ post, onDelete }: PostCardProps) {
  return (
    <div className="card bg-base-100 w-90 h-105 shadow-md">
      
      <figure className="overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold">
          {post.title}
        </h2>

        <p className="text-sm opacity-70 line-clamp-3">
          {post.description}
        </p>

        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => onDelete(post.id)}
            className="
              cursor-pointer relative px-10 py-3 rounded-lg
              bg-linear-to-r from-red-500 to-pink-500
              text-white text-sm font-medium
              transition-all duration-300
              hover:from-pink-500 hover:to-red-500
              hover:scale-105 hover:shadow-lg
              active:scale-95
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}