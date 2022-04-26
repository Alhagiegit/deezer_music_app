
export const useLocalStorage = () => {
        const getLocalStorageByName=(name:any)=>localStorage.getItem(`${name}`);
        const setLocalStorageByName=(name:any, value:any)=>localStorage.setItem(`${name}`, value)
        const clearLocalStorage=()=>localStorage.clear();
        const removeLocalStorageByName=(name:string)=>localStorage.removeItem(name);
    return {getLocalStorageByName, setLocalStorageByName, clearLocalStorage, removeLocalStorageByName}
}