import React, { useState, useEffect } from 'react';
import PersonForm from '../components/PersonForm';
import { fetchPeople, createPerson, updatePerson, deletePerson } from '../services/api';

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchPeople();
      setPeople(response.data);
    } catch (err) {
      setError('Erro ao carregar pessoas: ' + (err.message || 'Tente novamente'));
      console.error('Erro ao carregar:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      if (editingId) {
        await updatePerson(editingId, formData);
        setSuccessMessage('Pessoa atualizada com sucesso!');
        setEditingId(null);
        setEditingData(null);
      } else {
        await createPerson(formData);
        setSuccessMessage('Pessoa cadastrada com sucesso!');
      }

      setTimeout(() => setSuccessMessage(''), 3000);
      loadPeople();
    } catch (err) {
      setError('Erro ao salvar: ' + (err.message || 'Tente novamente'));
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (person) => {
    setEditingId(person.id);
    setEditingData(person);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingData(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Deseja realmente remover esta pessoa?')) return;

    setLoading(true);
    setError(null);

    try {
      await deletePerson(id);
      setSuccessMessage('Pessoa removida com sucesso!');
      setTimeout(() => setSuccessMessage(''), 3000);
      loadPeople();
    } catch (err) {
      setError('Erro ao remover: ' + (err.message || 'Tente novamente'));
      console.error('Erro:', err);
      setLoading(false);
    }
  };

  return (
    <div className="people-container">
      <h1>Cadastro de Pessoas</h1>

      {error && <div className="alert alert-error">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <div className="content-wrapper">
        <div className="form-section">
          <h2>{editingId ? 'Editar Pessoa' : 'Adicionar Nova Pessoa'}</h2>
          <PersonForm
            onSubmit={handleFormSubmit}
            initialData={editingData}
            isLoading={loading}
          />
          {editingId && (
            <button onClick={handleCancelEdit} className="btn-cancel">
              Cancelar Edição
            </button>
          )}
        </div>

        <div className="list-section">
          <h2>Pessoas Cadastradas ({people.length})</h2>

          {loading && !people.length ? (
            <p className="loading">Carregando...</p>
          ) : people.length === 0 ? (
            <p className="no-data">Nenhuma pessoa cadastrada ainda.</p>
          ) : (
            <div className="table-wrapper">
              <table className="people-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Data de Cadastro</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {people.map(person => (
                    <tr key={person.id}>
                      <td>{person.id}</td>
                      <td>{person.name}</td>
                      <td>{person.email}</td>
                      <td>{person.phone || '-'}</td>
                      <td>
                        {person.createdAt
                          ? new Date(person.createdAt).toLocaleString('pt-BR', {
                              timeZone: 'America/Sao_Paulo',
                              dateStyle: 'short',
                              timeStyle: 'short',
                            })
                          : '-'}
                      </td>


                      <td className="actions">
                        <button
                          onClick={() => handleEdit(person)}
                          className="btn-edit"
                          disabled={loading}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(person.id)}
                          className="btn-delete"
                          disabled={loading}
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default People;
