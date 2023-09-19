import { UserData } from "../../store";

export function Save(formData: any) {
    UserData.update((userData) => {
        userData.subscription = formData.subscription;        
        return userData
    })
}