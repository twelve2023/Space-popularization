import http from "@/util/http";

export function getLogin(data){
    return http({
        url:'/login',
        method:'POST',
        data
    })
}

export function getRegister(data){
    return http({
        url:'/register',
        method:'POST',
        data
    })
}