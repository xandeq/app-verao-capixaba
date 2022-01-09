import { ICidade } from './cidade';

export interface IBairro {
  id: number;
  nome: string;
  cidadeId: number;
  cidade: ICidade;
}
