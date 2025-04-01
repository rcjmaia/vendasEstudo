import React from 'react';
import { FaTimes  } from 'react-icons/fa';
import '../StyleCadModal.css'

interface CategoryCadModalProps {
    closeModal: () => void;
  }

const CategoryCadModal = ({ closeModal }: CategoryCadModalProps) => {
    return (
        <div className='modal-container'>                            
            <div className='modal'>                
                <div className=''>
                    <button onClick={closeModal} className='close-button'><FaTimes /></button>
                </div>

                <form>
                    <div className='form-group'>
                        <label htmlFor='id'>Id</label>
                    </div>
                    <div className='form-group'>
                        <input name="id"></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Categoria</label>                        
                    </div>
                    <div className='form-group'>
                        <input name="name"></input>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn'>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CategoryCadModal;