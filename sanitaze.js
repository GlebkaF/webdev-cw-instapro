export function sanitaze(string){
    return string.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
}