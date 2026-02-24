//aqui se definen los tipos 

export interface Post {
    id: string
    imageUrl: string
    title: string
    description: string
}

//objeto dummy
//estructura de datos específica para una acción específica
//en este caso crear post
//el id se asigna en la base de datos
//interfaz que permite transportar informacion
//representa lo que llega desde el frontend

export interface CreatePostDTO   {
    imageUrl: string
    title: string
    description: string
}

