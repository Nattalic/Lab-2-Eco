//capa intermedia que nos va a permitir validar
//validar params
//aqui vive la logica del codigo
import { Request, Response } from "express"
import Boom from "@hapi/boom"
import { Post } from "./post.types"


export class PostController {
    private posts: Post[]
    constructor() {
        this.posts = []
    }

    getPosts = (req: Request, res: Response) => {
        return res.json(this.posts)

    }

    createPost = (req: Request, res: Response) => {
        const { imageUrl, title, description } = req.body

        if (imageUrl === undefined) {
            throw Boom.badRequest("Image is required!")
        }

        if (title === undefined) {
            throw Boom.badRequest("Title is required!")
        }

        if (description === undefined) {
            throw Boom.badRequest("Description is required!")
        }

        const newPost: Post = {
            id: new Date().getTime().toString(),
            imageUrl: imageUrl.trim(), //trim limpia espacios!
            title: title.trim(),
            description: description.trim(),
        }

        this.posts.push(newPost)
        return res.json(newPost)
    }

    deletePost = (req: Request, res: Response) => {
        const { id } = req.params //el id se guarda en req params 

        //aqui se busca si el post existeee
        //si encuentra el post devuelve la posicion 0 1 2 3 lol
        //pero si no lo encuentra va a devolver -1, osea que no hay post con ese id, no existe (borrado pues)
        const index = this.posts.findIndex((p) => p.id === id)
        if (index === -1) {
            throw Boom.notFound("Post not found :(") //lanza error
        }

        //se elimina
        //splice = array.splice(posición, cantidad)
        //desde la posición index, se elimina 1 elemento
        this.posts.splice(index, 1)
        return res.status(204).send()
    }
}