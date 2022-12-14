const apagaCliente = async (id)=>{
    const data = await axios.post(`/cliente/${id}?_method=DELETE`);
}

const apagaPet = async (id)=>{
    const data = await axios.post(`/pet/${id}?_method=DELETE`);
}