import React from "react";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useRequestData } from "./hooks/useRequestData";


function App() {

  const [nomeUsuarios, loading, error] = useRequestData(`characters`, [])
  const [postagens, loadingPosts] = useRequestData(`comments`, [])


  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      {error && <p>Erro na requisição aguarde</p>}
      {!loading ?
          <NameContainer>
          {nomeUsuarios.map((usuario) => {
            return (
              <Card
                key={usuario.id}
                text={usuario.name}
                backgroudColor={'nome'}
                textColor={'nome'}
              />)
          })}
        </NameContainer> :
        <p>carragando...</p>
      }
      
      <hr />
      <Title>Comentários dos usuários</Title>
      {!loadingPosts ?
        <PostContainer>

          {postagens.map((post) => {
            return (
              <Card
                key={post.id}
                text={post.body}
                backgroudColor={'#1dc690'}
                textColor={'#ffffff'}
              />)
          })}
        </PostContainer> :
        <p>carragando...</p>
      }
    </div>
  );
}

export default App;



