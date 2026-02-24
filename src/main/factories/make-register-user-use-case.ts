import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { RegisterUseCase } from "../../application/use-cases/user /register";

export function makeRegisterUserUseCase (){
    const usersRepository =  new PrismaUserRepository()
    const createUserUseCase = new RegisterUseCase(usersRepository)
    
    return createUserUseCase
}