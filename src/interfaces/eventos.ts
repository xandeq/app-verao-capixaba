import { ILocal } from './local';
export interface IEvento {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  data: Date;
  urlEvento: string;
  urlIngresso: string;
  localId: number;
  local: ILocal;
}
