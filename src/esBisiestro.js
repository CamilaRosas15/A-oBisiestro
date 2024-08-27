function esBisiestro(anio)
{
    if(anio % 400 == 0 ){
        return true;
    }else{
        if(anio === 4)
            {
                return true;
            }
    }
    return false;
}

export default esBisiestro;