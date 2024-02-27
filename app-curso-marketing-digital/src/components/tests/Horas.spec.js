import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Horas from "../Horas/Horas";

describe("Horas", () => {
    test("renderiza o componente Horas", () => {
        render(<Horas />);
        const horas = screen.getByText("+100 Horas");
        expect(horas).toBeInTheDocument();
    });
});
