import axios from "axios";


const veriCek = async (id) =>{
const {data: user} = await axios (`https://jsonplaceholder.typicode.com/users/${id}`);
const {data: userPost } = await axios (`https://jsonplaceholder.typicode.com/posts?id=${id}`);


return {"User":user,"userPost":userPost}
}
export default veriCek;