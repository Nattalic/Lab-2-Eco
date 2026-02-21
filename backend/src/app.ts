//configuracion inicial 
//aqui se crea la app   
//se levanta la app 
import express, { Router } from "express";
import { NODE_ENV, PORT } from "./config"
import cors from "cors"
import { errorsMiddleware } from "./middlewares/errorsMiddlewares"
import { PostController } from "./features/posts/post.controller";
import { PostRouter } from "./features/posts/post.router";

const app = express();
app.use(express.json())
app.use(cors())

//ruta raiz prueba :3 se confirma que el server esta vivo
app.get("/", (req, res) => {
    res.send("Hello, World!!");
});


const apiRouter = Router()
app.use('/', apiRouter)

//post controller 
//tiene la logica de post,delete,get
const postController = new PostController()

//instancia, hace que se ejcute el constructor
const postRouter = new PostRouter(postController)
apiRouter.use(postRouter.router)

//controlador de errores!!, solo se ejecuta cuando algo falla dentro de las rutas
app.use(errorsMiddleware)

if (NODE_ENV !== "production") {
    //si es diferente de production ejecute este codigo (ya que node_env es develpoment)
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}

export default app

//variables de entorno: se leen para arrancar la aplicacion (tokens, credenciales de datos)