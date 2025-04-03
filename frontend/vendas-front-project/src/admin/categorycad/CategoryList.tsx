import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import '../StyleList.css'
import CategoryCadModal from './CategoryCadModal';
import { deleteCategory, fetchCategories } from '../../services/category-service';

interface Category {
  id: number;
  name: string;
}

const CategoryList: React.FC = () => {
  const [categorySel, setCategorySel] = useState<Category | null>(null)
  const [category, setCategory] = useState<Category[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false)

  const OpenEditMode = (categorySel : Category | null) => {
    setCategorySel(categorySel);
    setModalOpen(true);
  };
  
  const Delete = async (categoryParam: Category) => {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
      try {
        const { data, message, success } = await deleteCategory(categoryParam)
        if (!success) {
          setErro(message || 'Ocorreu um erro ao tentar excluir o registro!');
        } else {
          setCategory(data);
        }
      } catch (erro) {
        setErro(`Ocorreu um erro: ` + erro);
      } finally {
      }
    }
  }

  useEffect(() => {
    const GetCategory = async () => {
      try {
        const { data, message, success } = await fetchCategories();
        if (!success) {
          setErro(message || 'Nenhuma categoria encontrada.');
        } else {
          setCategory(data);
        }
      } catch (erro) {
        if (axios.isAxiosError(erro))
          setErro(`Ocorreu um erro: ` + erro);
      } finally {
        setCarregando(false);
      }
    };

    GetCategory();
  }, []);

  if (carregando) {
    return <p>Carregando categorias...</p>;
  }

  /*if (erro) {
    return <p>{erro}</p>;
  }*/

  return (
    <div className='list table-wrapper'>
      <h2>Lista de Categorias</h2>
      <br></br>

      {erro && <p>{erro}</p>}

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(category) && category.map((cat) => (
            <tr key={cat.id}>
              <td>
                {cat.id}
              </td>
              <td>
                {cat.name}
              </td>
              <td className='actions'>
                <button className='edit-btn' onClick={() => OpenEditMode(cat)}><FaEdit></FaEdit></button>
                <button className='delete-btn' onClick={() => Delete(cat)}><FaTrashAlt></FaTrashAlt></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='btn' onClick={() => OpenEditMode(null)}>Adicionar</button>

      {modalOpen && (
                    <CategoryCadModal 
                      closeModal={() => {
                        setModalOpen(false) 
                        setCategorySel(null)}}
                      refreshData={(data) => {setCategory(data)}}
                      categorySel={categorySel}
                    />)}
    </div>
  );
};

export default CategoryList;