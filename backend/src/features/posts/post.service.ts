import { CreatePostDTO, Post } from "./post.types";

import Boom from "@hapi/boom"

//el servicio hace el trabajo real; crea post, get, delete, validar reglas 
//el servicio es una clase y capa donde se pones la logica y el manejo de datos, pero sin cosas de HTTP (esto va en el controller)
//es el cerebro (?)

export class PostService {
    private posts: Post[]
    //inicializar: darle un valor por defecto al atributo
    constructor() {
        this.posts = []
    }

    //arreglo de posts (incia vacio) 
    getPosts = (): Post[] => {
        return this.posts
    }


    createPost = (post: CreatePostDTO): Post => {
        const newPost: Post = {
            id: new Date().getTime().toString(), //el number se convierte a texto
            imageUrl: post.imageUrl,
            title: post.title,
            description: post.description
        }

        //lo guarda en el array
        //y devuelve el post creado
        this.posts.push(newPost)
        return newPost
    }

    deletePost = (postId: string): void => {
        //busca si existe un post con ese id
        const postFound = this.posts.find((post) => post.id === postId)
        //si no lo encontre , lanze error
        if (!postFound) {
            throw Boom.notFound("Post not found :( ")
        }
        
        //filter = busca el id que quiero eliminar
        //si el id existe, lo borra con filter (se queda con todos menos ese )
        // filtreme todos los usuarios tal que su id sea diferente al que yo seleccione
        this.posts = this.posts.filter((post) => post.id !== postId)
    }

}