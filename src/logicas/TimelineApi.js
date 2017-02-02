export default class TimelineApi {
    static lista(urlPerfil){
      return dispatch => {
        fetch(urlPerfil)
        .then(response => response.json())
        .then(fotos => {         
            dispatch({type:'LISTAGEM',fotos});
            return fotos;
        });
      }              
    }

    static comenta(fotoId,textoComentario) {
      return dispatch => {
        const requestInfo = {
          method:'POST',
          body:JSON.stringify({texto:textoComentario}),
          headers: new Headers({
            'Content-type':'application/json'
          })
        };

        fetch(`http://localhost:8080/api/fotos/${fotoId}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`,requestInfo)
          .then(response => {
            if(response.ok){
              return response.json();
            } else {
              throw new Error("não foi possível comentar");
            }
          })
          .then(novoComentario => {
              dispatch({type:'COMENTARIO',fotoId,novoComentario});            
              return novoComentario;
          }); 
      }     
    }    

    static like(fotoId){
      return dispatch => {
        fetch(`http://localhost:8080/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`,{method:'POST'})
          .then(response => {
            if(response.ok) {
              return response.json();
            } else {            
              throw new Error("não foi possível realizar o like da foto");
            }
          })
          .then(liker => {          
            dispatch({type:'LIKE',fotoId,liker});   
            return liker;         
          });             
      } 
    }

}