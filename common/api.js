import {baseUrl} from "./config.js"

export function topList() {
	let listIds = ['19723756','3779629','2884035','3778678']
 return	new Promise(function(resolve,reject){
		uni.request({
			url:`${baseUrl}/toplist/detail`,
			method:"GET",
			data:{},
			success: (res) => {
				let result = res.data.list
				result.length = 4
				for(var i =0;i<listIds.length;i++) {
					result[i].listId = listIds[i]
				}
				resolve(result)
			}
		})
	})
	
}

export function list(listId) {
	return uni.request({
		url:`${baseUrl}/playlist/detail?id=${listId}`,
		method:"GET"
	})
}
export function songDetail(songId) {
	return uni.request({
		url:`${baseUrl}/song/detail?ids=${songId}`,
		method:"GET"
	})
}
export function songSimi(songId) {
	return uni.request({
		url:`${baseUrl}/simi/song?id=${songId}`,
		method:"GET"
	})
}
export function songComment(songId) {
	return uni.request({
		url:`${baseUrl}/comment/music?id=${songId}`,
		method:"GET"
	})
}
export function songLyric(songId) {
	return uni.request({
		url:`${baseUrl}/lyric?id=${songId}`,
		method:"GET"
	})
}
export function songUrl(songId) {
	return uni.request({
		url:`${baseUrl}/song/url?id=${songId}`,
		method:"GET"
	})
}
export function searchHot() {
	return uni.request({
		url:`${baseUrl}/search/hot/detail`,
		method:'GET'
	})
}
export function searchWord(word) {
	return uni.request({
		url:`${baseUrl}/search?keywords=${word}`,
		method:'GET'
	})
}
export function searchSuggest(word) {
	return uni.request({
		url:`${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method:'GET'
	})
}

export function login(phone){
	return uni.request({
		url:`${baseUrl}/captcha/sent?phone=${phone}`,
		method:'POST'
	})
}

export function verify(phone,code){
	return uni.request({
		url:`${baseUrl}/captcha/verify?phone=${phone}&captcha=${code}`,
		method:'POST'
	})
}

export function register(phone,code,password,nickname){
	return uni.request({
		url:`${baseUrl}/register/cellphone?phone=${phone}&password=${password}&captcha=${code}&nickname=${nickname}`,
		method:'POST'
	})
}

export function loginCellphone(phone,password){
	return uni.request({
		url:`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`,
		method:'POST'
	})
}

export function loignOut(){
	return uni.request({
		url:`${baseUrl}/logout`,
		method:'POST'
	})
}

export function loignStatus(){
	return uni.request({
		url:`${baseUrl}/login/status`,
		method:'POST'
	})
}

export function anonimous(){
	return uni.request({
		url:`${baseUrl}/register/anonimous`,
		method:'POST'
	})
}