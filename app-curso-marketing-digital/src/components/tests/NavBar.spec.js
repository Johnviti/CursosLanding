import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import NavBar from "../NavBar/NavBar";

test('verificar links', () => { 
    const { getByText } = render(<NavBar />);
    expect(getByText('Início')).toBeInTheDocument();
    expect(getByText('Sobre')).toBeInTheDocument();
    expect(getByText('Informações')).toBeInTheDocument();
    expect(getByText('Formulário')).toBeInTheDocument();
 });