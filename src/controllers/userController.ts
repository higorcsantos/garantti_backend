import {Request, Response} from 'express';
import {User} from '../entities/User';

export const createUser = async (req: Request, res: Response) => {
    try{
        const {name, email, cpf, telefone} = req.body;

        const user = new User();
    
        user.name = name;
        user.email = email;
        user.cpf = cpf;
        user.telefone = telefone;
    
        await user.save();

        return res.json(user);

    } catch(error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const listUser = async (req: Request, res: Response) => {
    try{
        const users = await User.find();
        return res.json(users);
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}