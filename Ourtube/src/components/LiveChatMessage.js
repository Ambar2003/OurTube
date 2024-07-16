import { userIcon } from "../utils/constants"
export const LiveChatMessage = ({name,message}) =>{
    // console.log(name)
    return(
        <div className="items-center px-3 flex">
            <img className="h-14 w-14" src = {userIcon} alt = "user-icon"></img>
            <div className="flex">
            <p className="mx-2 text-xl font-bold">{name}</p>
            <p className="mx-1 text-xl">{message}</p>
            </div>
        </div>      
        
    )
}