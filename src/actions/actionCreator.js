export function listagem(fotos){
    return {type:'LISTAGEM',fotos};
}

export function comentario(fotoId,novoComentario){
    return {type:'COMENTARIO',fotoId,novoComentario}    
}

export function like(fotoId,liker){
    return {type:'LIKE',fotoId,liker};    
}