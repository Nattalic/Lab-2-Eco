    import dotenv from "dotenv"

    dotenv.config()

    export const PORT = process.env.PORT || 3000 //si no esta definido en el archivo de variables de entorno, dara 3000
    export const NODE_ENV = process.env.NODE_ENV || 'development' 