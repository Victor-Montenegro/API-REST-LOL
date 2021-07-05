# Projeto de criação de API-Rest para consumir a API da riot games 
 API-Rest capaz de de casdastrar, busca, atualizar e apagar os jogadores, utilizando a consulta da API da riot games para trazer os dados dos jogadores que serão cadastrados em uma base de dados.

## Instruções :wave:
    url: http://localhost:3000

    Route para cadastrar usuarios: METHOD POST http://localhost:3000/users
    Ex: Passando os dados em json 
    body:
        {
            "name: "gabriel",
            "email": "gabriel@gabriel.com",
            "password": "1213141516",
        }
--------
    Route para realizar o login do usuario: METHOD POST http://localhost:3000/login
    Ex: Passando os dados em json
    body:
        {
            "email": "gabriel@gabriel.com",
            "password": "1213141516",
        }
    response:
        {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTYyNTQ4NDA0MywiZXhwIjoxNjI1NTcwNDQzLCJzdWIiOiI0YzMzYmE1YS1kODAyLTQwZWYtYjlmMi1kNDk1OGFjMjhjZmYifQ.oXzGZvoQYdP2N08OkCCG7gMO6lnLfSC16NpgL1SNfic"
        }
----
    Route para cadastrar o summoner/jogador: METHOD POST http://localhost:3000/summoners
    Ex:
    Selecione o metodo de autentificação bearer e passe o token

    Passe a chave api_key do leagueOfleagends na query:

        http://localhost:3000/summoners/?api_key=R29sf-2ddsf
    
    Passando os dados em json no body
    
    body: 
        {
            "summonerName": "OldWolfKing"
        }
---    
    Route para visualizar a lista de summoners/jogadores: METHOD GET http://localhost:3000/summoner
    Ex:
    Selecione o metodo de autentificação bearer e passe o token
---
    Router para atualizar dados do jogador: METHOD PUT http://localhost:3000/summoner
    Ex:
    Selecione o metodo de autentificação bearer e passe o token
    
    Passando os dados em json no body
    
    body: 
        {
            "summonerName":"OldWolfKingMaster",
            "summonerLevel": 550
        }
----
    Router para remove o jogador/summoner: METHOD DELETE http://localhost:3000/summoner/:summonerId
    
    Deve passar como params o summonerId do jogador/summoner

    EX: 
    http://localhost:3000/summoner/7AMCHa09UVSoSIqOF3rMtyCoI1HZMYXH3spsOh7tqo_OmQ
    


    
 

# Victor Montenegro 

## Olá, tudo bem! :wave:
    Eu sou João Victor Montenegro Rocha, mas pode me chamar de João, mesmo eu sendo super tímido, estou aprendendo e tentado 
    ser o mais compreensivo é comunicativo possivel.

    Estou me desenvolvendo é crescendo para me tornar um profissional e uma pessoa mais responsável e organizada. Estou pronto 
    para receber todo conhecimento para ser o melhor profissional para empresa e colegas.

 <br/> :purple_heart: Buscando colaborar com projetos no back-end.
 <br/> :blush: Com o que eu puder ajudar vou ajudar! Buscando juntos a resposta.
 <br/> :computer: O que pretendo aprender: javaScript, mongoDB, nodejs, API Rest, typeScript
 <br/> 💬  &nbsp; Sobre mim: Curto tecnologias, games RPG, the witcher 3, seriados e animes. 
 <br/> :email: Entre em contato comigo: [![Linkedin Badge](https://img.shields.io/badge/-VictorMontenegro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/joao-victor-montenegro-595791194/)](https://www.linkedin.com/in/joao-victor-montenegro-595791194/) 
 [![Gmail Badge](https://img.shields.io/badge/-jvcmontenegro67@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=victor:jvcmontenegro67@gmail.com)](victor:jvcmontenegro67@gmail.com)

