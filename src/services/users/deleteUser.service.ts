import repositories from "../../utils/respositorys"

const deleteUser = async (userId: number): Promise<void> => {

    await repositories.user.softDelete({
        id: userId
    })
}

export default deleteUser