//capa intermedia que nos va a permitir validar
//validar params
//decide que responder 
import { Request, Response } from "express"
import Boom from "@hapi/boom"
import { PostService } from "./post.service"


export class PostController {

    //le inyectamos el service
    //el controller no crea el service, se lo pasamos desde afuera
    private postService: PostService
    constructor(postService: PostService) {
        this.postService = postService
    }

    getPosts = (req: Request, res: Response) => {
        //controller llama al service 
        //el service devuelve datos 
        //controller responde en formato http
        const posts = this.postService.getPosts()
        return res.json(posts)

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

        //crea 3 valores  y se los pasa al service!
        //el service crea el post completo (agrega id)
        //devuelve el post creado y se guarda en la variable post

        const post = this.postService.createPost({
            imageUrl,
            title,
            description
        })

        return res.json(post)
    }

    //lee el id desde la url y luego llama al service
    //service decide si existe el id o no (la logicaa)
    //controller solo responde

    deletePost = (req: Request, res: Response) => {
        const { id } = req.params
        this.postService.deletePost(String(id))
        return res.send('Post deleted succesfully!')
    }
}