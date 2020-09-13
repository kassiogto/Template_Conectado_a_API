import React, { useState } from "react";
import {
  Container1,
  Headers,
  IconSearch,
  Content,
  IconDelete,
  IconEdit,
  Footer,
  IconPrev,
  IconNext,
} from "./styles";
import { Container, Grid } from "../Painel/styles";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { Link } from "react-router-dom";

const Category: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Grid>
      <Sidebar />
      <Navbar />
      <Container>
        <Container1>
          <Headers>
            <h3>Categorias</h3>
            <div>
              {open && <input type="text" placeholder="Escreva sua pesquisa" />}
              <IconSearch onClick={() => setOpen(!open)} />
              <button className="new-category"><Link to='/painel/categoria/new'>+Nova categoria</Link></button>
            </div>
          </Headers>
          <Content>
            <table>
              <thead>
                <tr>
                  <td>
                    <strong>Categorias</strong>
                  </td>

                  <td>
                    <strong>Qtd Produtos</strong>
                  </td>
                  <td>
                    <strong>Data de criação</strong>
                  </td>
                  <td>
                    <strong>Criado por</strong>
                  </td>
                  <td>
                    <strong>Ações</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Roupas infantis</p>
                  </td>
                  <td>
                    <p>23</p>
                  </td>
                  <td>
                    <p>19/04/2019</p>
                  </td>
                  <td>
                    <p>Richard Rasmussen</p>
                  </td>
                  <td>
                    <IconEdit />
                    <IconDelete />
                  </td>
                </tr>
              </tbody>
            </table>
          </Content>
          <Footer>
            <p>Mostrando Categorias 1 de 10</p>
            <ul>
              <li>
                <IconPrev />
              </li>
              <li className="select">1</li>
              <li>2</li>
              <li>
                <IconNext />
              </li>
            </ul>
          </Footer>
        </Container1>
      </Container>
    </Grid>
  );
};

export default Category;
