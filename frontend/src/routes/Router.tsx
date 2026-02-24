import { createBrowserRouter, Navigate } from "react-router-dom";
import PostsListPage from "../pages/PostsListPage";
import CreatePostPage from "../pages/CreatePostPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/posts" replace/>,
    },
    { 
        path: "/posts", 
        element: <PostsListPage/> 
    },
    { 
        path: "/createpost", 
        element: <CreatePostPage/> 
    },
]);

export default router;
