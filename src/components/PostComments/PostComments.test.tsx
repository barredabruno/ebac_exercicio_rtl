import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './index'; // Importando o componente PostComment

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument(); // Verifica se o botão "Comentar" está na tela
  });

  it('Deve permitir a inserção de dois comentários', () => {
    render(<PostComment />);

    // Encontrar os elementos do formulário
    const textarea = screen.getByTestId('textarea'); // Seleciona o textarea com o data-testid 'textarea'
    const button = screen.getByTestId('submit-button'); // Seleciona o botão de submit com o data-testid 'submit-button'

    // Inserir o primeiro comentário
    fireEvent.change(textarea, { target: { value: 'Este é o primeiro comentário' } });
    fireEvent.click(button);

    // Verificar se o primeiro comentário foi adicionado
    expect(screen.getByText('Este é o primeiro comentário')).toBeInTheDocument();

    // Inserir o segundo comentário
    fireEvent.change(textarea, { target: { value: 'Este é o segundo comentário' } });
    fireEvent.click(button);

    // Verificar se o segundo comentário foi adicionado
    expect(screen.getByText('Este é o segundo comentário')).toBeInTheDocument();
  });
});
