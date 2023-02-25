const handlerElephants = require('../src/handlerElephants');
const computeData = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it('Testa se handlerElephnats é uma função', () => {
      expect(typeof handlerElephants).toEqual('function');
    });
  
    it('Testa se o parametro passado for === count, retorna o valor 4', () => {
      const actual = handlerElephants('count');
      const expected = 4;
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se o parametro passado for === averageAge, retorna a media da idade', () => {
      const actual = handlerElephants('averageAge');
      const expected = 10.5;
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se o parametro passado for === location, retorna a localizaçãodos elefantes dentro do zoo', () => {
      const actual = handlerElephants('location');
      const expected = 'NW';
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se o parametro passado for === popularity, retorna a popularidade dos elefantes', () => {
      const actual = handlerElephants('popularity');
      const expected = 5;
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se o parametro passado for === availability, retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
      const actual = handlerElephants('availability');
      const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se não for passado um parametro retorna undefined', () => {
      const actual = handlerElephants();
      const expected = undefined;
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se o parametro passado não for uma string retorna "Parâmetro inválido, é necessário uma string"', () => {
      const actual = handlerElephants(true);
      const expected = 'Parâmetro inválido, é necessário uma string';
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se quando o primeiro parametro passado na função computeData for === names, retorna uma array com o nome dos elefantes', () => {
      const actual = computeData('names', 'elephants');
      const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
  
      expect(actual).toEqual(expected);
    });
  
    it('Testa se  não alterar o parametro da função computeData, retorna null', () => {
      const actual = computeData('param', 'elephants');
      const expected = null;
  
      expect(actual).toEqual(expected);
    });
  });
