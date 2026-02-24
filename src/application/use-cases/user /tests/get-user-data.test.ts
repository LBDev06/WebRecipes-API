import { InMemoryUserRepository } from "../../../../repositories/in-memory-repository/in-memory-user-repository";
import { randomUUID } from "crypto";
import { GetUserDataUseCase } from "../get-user-data";
import { describe, beforeEach, it, expect} from "vitest";
import { hash } from "bcryptjs";

let usersRepository: InMemoryUserRepository
let sut: GetUserDataUseCase


describe(('Get User Data Use Case'), ()=>{
   
   beforeEach(()=>{
     usersRepository = new InMemoryUserRepository()
     sut = new GetUserDataUseCase(usersRepository)
   })

   it('should be able to get user data', async()=>{
    const createUser =  await usersRepository.create({
               name: "John Doe",
               email: "johndoe@example.com",
               password: String(hash('sdadasda', 6)),
             })
    
    const { user } = await sut.execute({
        id:createUser.id
    }) 

    expect(user.id).toEqual(expect.any(String))
    expect(user.id).toEqual(createUser.id)
   })

   it('should not be able to get user data with invalid id', async()=>{
    await expect(()=>
    sut.execute({
        id:randomUUID()
    })).rejects.instanceOf(Error)

   })
})