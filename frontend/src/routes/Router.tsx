import { createBrowserRouter, Navigate } from "react-router-dom";
import PostsListPage from "../pages/PostsListPage";


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
        path: "/create", 
        //element: <CreatePostPage/> 
    },
]);

export default router;
