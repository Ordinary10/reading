export default {
	getCookie(name) {
		let cookie = document.cookie;
		if(cookie) {
			let cookies = cookie.split(";");
			let len = cookies.length;
			for(let i = 0; i < len; i++) {
				let keys = cookies[i].split("=")[0];
				let val = cookies[i].split("=")[1];
				if(val==-1){
					return null;
				}else{
					let keys1 = keys.replace(/^\s+|\s+$/g, "");
					let val1 = val.replace(/^\s+|\s+$/g, "");
					if(keys1 === name) {
						return val1;
					}
				}	
			}
		}else{
			return null;
		}
	}
}