import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../StyleCadModal.css'
import { insertCategory, updateCategory } from '../../services/category-service';

interface Category {
    id: number;
    name: string;
}

interface CategoryCadModalProps {
    closeModal: () => void;
    refreshData: (category: Category[]) => void;
    categorySel: Category | null;
}

const CategoryCadModal = ({ closeModal, refreshData, categorySel }: CategoryCadModalProps) => {
    const [id, setId] = useState(categorySel?.id || 0)
    const [name, setName] = useState(categorySel?.name || '')

    const Edit = async () => {
        if (name.trim() == '') {
            window.alert("Preencha todos campos obrigatórios!")
            return
        }
        if (categorySel) {
            try {
                const edtiCat: Category = {
                    id: id,
                    name: name
                };

                const { data, message, success } = await updateCategory(edtiCat)

                if (success) {
                    refreshData(data)
                    closeModal()
                } else {
                    window.alert(`Não foi possível realizar o processo! \nErro: ${message}`)
                }
            } catch (erro) {
                window.alert(`Não foi possível realizar o processo! \nErro: ${erro}`)
            } finally {
            }
        } else {
            Insert()
        }
    }

    const Insert = async () => {
        try {
            const edtiCat: Category = {
                id: 0,
                name: name
            };

            const { data, message, success } = await insertCategory(edtiCat)

            if (success) {
                refreshData(data)
                closeModal()
            } else {
                window.alert(`Não foi possível realizar o processo! \nErro: ${message}`)
            }
        } catch (erro) {
            window.alert(`Não foi possível realizar o processo! \nErro: ${erro}`)
        } finally {
        }
    }

    useEffect(() => {
        if (categorySel) {
            setId(categorySel.id)
            setName(categorySel.name)
        } else {
            setId(0)
            setName('')
        }
    }, [categorySel])

    return (
        <div className='modal-container'>
            <div className='modal'>
                <div className=''>
                    <button onClick={closeModal} className='close-button'><FaTimes /></button>
                </div>

                <form>
                    <div className='form-group'>
                        <label htmlFor="id">Id</label>
                    </div>
                    <div className='form-group'>
                        <input id="id" value={id} onChange={(e) => setName(e.target.value)} readOnly></input>
                    </div>
                    <div className='form-group required'>
                        <label htmlFor='name'>Categoria</label>
                    </div>
                    <div className='form-group'>
                        <input id="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div className='form-group'>
                        <button type="button" onClick={Edit} className='btn'>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CategoryCadModal;