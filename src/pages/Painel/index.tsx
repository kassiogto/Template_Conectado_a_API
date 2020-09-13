import React from "react";
import {
  Grid,
  Container,
  ContentCategory,
  Category,
  ContentAddCateg,
  ContentHelp,
  ContentRow,
  IconSearch,
} from "./styles";
import SiderBar from "../../components/sidebar";
import NavBar from "../../components/navbar";

const Painel: React.FC = () => {
  return (
    <Grid>
      <SiderBar />
      <NavBar />
      <Container>
        <ContentCategory>
            <div id='title'>
                <h3>Categorias recentes</h3>
            </div>
            <div id='content'>
                <Category>
                    <strong>Roupas Infantis</strong>
                    <span>19/04/2019</span>
                    <p>Criado por:</p>
                    <strong>Richard Rasmussen</strong>
                </Category>
                <Category>
                    <strong>Roupas Masculinas</strong>
                    <span>13/04/2019</span>
                    <p>Criado por:</p>
                    <strong>Richard Rasmussen</strong>
                </Category>
                <Category>
                    <strong>Roupas femininas</strong>
                    <span>05/03/2019</span>
                    <p>Criado por:</p>
                    <strong>Richard Rasmussen</strong>
                </Category> 
            </div>
          
        </ContentCategory>
        <ContentRow>
            <ContentAddCateg>
            <h3>Adicione sua primeira categoria</h3>
            <p>
              Crie todos seus catalogos com categorias para vender novos
              produtos
            </p>
            <button className="addProduto">+Adicionar produto</button>
          </ContentAddCateg>

          <ContentHelp>
            <h3>Ajuda</h3>
            <hr />
            <IconSearch />
            <input type="text" placeholder='Procure' />
            <p>
              Faça sua pesquisa ou Contate-nos Clicando <a href="#">Aqui</a>
            </p>
          </ContentHelp>
        </ContentRow>
          

      </Container>
    </Grid>
  );
};

export default Painel;
