const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('Testa se getOpeningHours é uma função', () => {
      expect(typeof getOpeningHours).toEqual('function');
    });
  
    it('Testa se ao receber um parametro  vazio retorna o objeto hours', () => {
      const actual = getOpeningHours();
      const expected = {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      };
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se ao receber como parametro minutos maior que 59 e menor que 0, retorna Erro com a frase The minutes must be between 0 and 59', () => {
      const actual = () => getOpeningHours('Monday', '10:93-am');
      const expected = 'The minutes must be between 0 and 59';
  
      expect(actual).toThrow(expected);
    });
    it('Testa se ao receber como parametro horas maior que 12 e menor que 0, etorna Erro com a frase The hour must be between 0 and 12', () => {
      const actual = () => getOpeningHours('Monday', '13:53-am');
      const expected = 'The hour must be between 0 and 12';
  
      expect(actual).toThrow(expected);
    });
  
    it('Testa se horas e minutos não receberem numeros como parametro, retorna Erro The hour should represent a number', () => {
      const actual = () => getOpeningHours('Monday', 'Ola-am');
      const expected = 'The hour should represent a number';
  
      expect(actual).toThrow(expected);
    });
  
    it('Testa se ao receber como parametro uma abreviação incorreta, retorne Erro The abbreviation must be \'AM\' or \'PM\'', () => {
      const actual = () => getOpeningHours('Monday', '09:09-AE');
      const expected = 'The abbreviation must be \'AM\' or \'PM\'';
  
      expect(actual).toThrow(expected);
    });
    it('Testa se ao receber um dia de semana que não existe, retorna um Erro The day must be valid. Example: Monday', () => {
      const actual = () => getOpeningHours('EA', '10:20-PM'); // mentoria idea.
      const expected = 'The day must be valid. Example: Monday';
  
      expect(actual).toThrow(expected);
    });
  
    it('Testa se ao receber como parametro vazio um horario não funcional, retorna "The zoo is closed', () => {
      const actual = getOpeningHours('Friday', '08:00-AM');
      const expected = 'The zoo is closed';
  
      expect(actual).toBe(expected);
    });
  
    it('Testa se ao receber como parametro vazio um horario  funcional, retorna The zoo is open', () => {
      const actual = getOpeningHours('Friday', '10:30-AM');
      const expected = 'The zoo is open';
  
      expect(actual).toBe(expected);
    });
  });
