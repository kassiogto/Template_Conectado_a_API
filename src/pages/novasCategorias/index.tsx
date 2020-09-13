import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavColection,
  ButtonDelete,
  DropDelete,
  ProductContent,
  InfoCategory,
  ContainerProduct,
  MediaButton,
} from "./style";
import { Container, Grid } from "../Painel/styles";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const NewCategory: React.FC = (history) => {
  const [open, setOpenNotificantion] = useState(false);

  return (
    <Grid>
      <Sidebar />
      <Navbar />
      <Container>
          <div>
            <NavColection>
            <ul className="navgation-list">
                <li>Coleçao</li>
                <li>Coleçao 1</li>
            </ul>
            <div className="div-action">
                <input type="text" placeholder="Coleção sem titulo" />
                <div className="margin-delete">
                <ButtonDelete onClick={() => setOpenNotificantion(!open)} />
                </div>

                <button id="cancel">Cancelar</button>
                <button id="save">
                <Link to="/painel/categoria">Salvar</Link>
                </button>
            </div>
            </NavColection>
            <ContainerProduct>
            {open && (
                <DropDelete>
                <li>Apagar coleção</li>
                </DropDelete>
            )}
            <ProductContent>
                <h3>Produtos na Coleção 0</h3>
                <hr />
                <p>Comece adicionando produtos a sua coleção</p>
                <span>Crie uma nova coleção para mostrar no seu site.</span>
                <br />
                <button>+Adicionar produtos</button>
            </ProductContent>

            <InfoCategory>
                <h3>Informações da coleção</h3>
                <hr />
                <label>Nome da coleção</label>
                <input type="text" placeholder="Nome da sua Categoria" />
                <label>Imagem da coleção</label>
                <div>
                <MediaButton />
                </div>
                <hr />
                <button>+Adicionar produtos</button>
            </InfoCategory>
            </ContainerProduct>
          </div>
      </Container>
    </Grid>
  );
};

export default NewCategory;
