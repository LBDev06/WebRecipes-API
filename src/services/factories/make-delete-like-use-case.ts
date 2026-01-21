import { PrismaLikeRepository } from "@/repositories/prisma/prisma-like-repository"
import { DeleteLikeUseCase } from "../use-cases/likes/delete-like"

export function makeDeleteLikeUseCase(){
        const likeRepository = new PrismaLikeRepository()
        const deleteLikeUseCase = new DeleteLikeUseCase(likeRepository)
    
        return deleteLikeUseCase
}