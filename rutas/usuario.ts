import { Request, Response, Router } from 'express';

const usuarioRoutes = Router ();

usuarioRoutes.get( '/', ( req: Request, res: Response ) => { 
    return res.status(200).json({
       ok: true,
       mensaje: 'todo bien'
    });
});

usuarioRoutes.post('/', ( req: Request, res: Response ) => {
   const body = req.body;

    console.log( body );

     return res.status(200).json({
        ok: true,
       datos: body
   });
});

usuarioRoutes.put('/', ( req: Request, res: Response ) => {
    const body = req.body.POST;
    
    console.log( body );

    return res.status(200).json({
        ok:true,
        datos: body
    });
});
 
usuarioRoutes.delete('/',( req:Request, res:Response) => {
    const body = req.body.D;

    console.log( body );
        return res.status(200).json({
            ok:true,
            datos:body 
        })


})
export default usuarioRoutes;

