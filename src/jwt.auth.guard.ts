import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthGuard implements CanActivate{
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const ctx = GqlExecutionContext.create(context).getContext()
        if(!ctx.headers.authorization){
            return false
        }
        ctx.user = await this.validateToken(ctx.headers.authorization)
        return true
    }

    async validateToken(auth : string){
        if(auth.split(' ')[0] !== 'Bearer'){
            throw new HttpException('Invalid Token' , HttpStatus.UNAUTHORIZED)
        }

        const token = auth.split(' ')[1]

        try{
            const decoded = jwt.verify(token , process.env.SECRET)
            return decoded
        }catch(err){
            const message = 'Token Error: ' +(err.message || err.name);
            throw new HttpException(message , HttpStatus.UNAUTHORIZED)
        }
    }
}