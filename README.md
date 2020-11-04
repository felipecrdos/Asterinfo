# Asterinfo  
Retorna um json contendo algumas informações sobre asteroides.  
## URL
> https://asterinfo.herokuapp.com/  
## Requisições
### Metodos
> GET &emsp;| &emsp; POST &emsp; | &emsp; PUT &emsp;| &emsp; DELETE   
### Parâmetro
> id = [Integer]
### Listar asteroides *[ GET ]*
* #### Listar Todos
> /asteroid    
* #### Listar por ID
> /asteroid/id  
* #### Listar random
> /asteroid/random  
### Salvar Asteroide *[ POST ]*
> /asteroid/save  
### Atualizar Asteroide *[ PUT ]*
> /asteroid/update/id  
### Deletar Asteroide *[ DELETE ]*
> /asteroid/delete/id  

## Respostas
* ### Sucesso
```javascript
{
  message: String,
  asteroid:{  
    _id:Number,  
    name:String,  
    diameter:Number,  
    sum_distance:String,  
    discovery_date:String,  
    finder:String,  
    __v:Number
  } 
}
```
* ### Falha
```javascript
{
  message: String,
  asteroid: null
}
```  
## Exemplos de uso
$ curl https://asterinfo.herokuapp.com/asteroid/1  
$ curl https://asterinfo.herokuapp.com/asteroid/random





