class ApiClient{
    constructor(){
        this.baseURL="http://localhost:2500/api/v1"
        this.defaultHeaders={
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }

    async customFetch(endpoint,options={}){
        try {
            const url =`${this.baseURL}${endpoint}`;
            const headers={...this.defaultHeaders,...options.headers}


            const config = {
                ...options,
                headers,
                credentials:'include'
            }

            console.log(`Fetching ${url}`)
            const response = await fetch(url, config)
            // check if response.ok===value
            const data =await response.json()
            return data
            
        } catch (error) {
            console.error('Api Error',error)
            throw error
        }
    }

    //Auth endpoints

    async signup(name, email, password){
        return this.customFetch("/users/register",{
            method : "POST",
            body: JSON.stringify({name,email,password})
        })
    }
    async login(email, password){
        return this.customFetch("/users/login",{
            method : "POST",
            body: JSON.stringify({email,password})
        })
    }

    async getProfile(){
        return this.customFetch("/users/me", {
            method: "GET",
        })
    }

    async logout(){
        return this.customFetch("/users/logout", {
            method: "GET",
        });
    }
    async verification(email, verificationCode){
        return this.customFetch(`/users/verify/${verificationCode}`, {
            method: "GET",
            body: JSON.stringify({email, verificationCode})
        })
    }
}

const apiClient=new ApiClient()
export default apiClient