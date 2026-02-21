//Aqui viven funciones intermedias que se ejecutan antes de responder
//manejar errores globales

import { Request, Response, NextFunction } from "express"
//libreria para los estados de error
//middleware centraliza los errores 
import Boom from "@hapi/boom"

export const errorsMiddleware = (
    error: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {

    //boomify lo manda a boom
    //para que siga un formato de de texto (json)
    const boomError = Boom.boomify(error)
    return res.status(boomError.output.statusCode).json(boomError.output.payload)

}