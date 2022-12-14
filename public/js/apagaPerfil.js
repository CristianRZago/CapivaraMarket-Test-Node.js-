const apagaPerfil = async (id)=>{
    const data = await axios.post(`/usuario/${id}?_method=DELETE`);
}