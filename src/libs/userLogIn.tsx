export default async function userLogin(userEmail:string, userPassword:string) {
    const response = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login" , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            email:userEmail,
            password: userPassword
        }) ,
    })
    if (!response.ok) {
        const errorBody = await response.json().catch(() => response.text());
        console.error("Login failed:", response.status, errorBody); // 👈 check terminal or browser console
        throw new Error(`Failed to login: ${response.status} - ${JSON.stringify(errorBody)}`);
    }
    return await response.json()
}