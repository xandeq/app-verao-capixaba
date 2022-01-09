import { IBairro } from './bairro';

export interface ILocal {
  id: number;
  nome: string;
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  cep: string;
  logo: string;
  latitude: number;
  longitude: number;
  bairroId: number;
  bairro: IBairro;
}
