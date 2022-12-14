const apagaProduto = async (id)=>{
    const data = await axios.post(`/produto/${id}?_method=DELETE`);
}