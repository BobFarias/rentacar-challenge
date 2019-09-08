# **Detalhe da solução**

# **Api e Front**

Primeiramente, tive que analisar como iria funcionar o backend para a construção de uma api simples. Dessa forma, pensei em um modelo relacional onde cada vaga, poderia ter um carro e cada carro um recibo, com um relátorio.

Dessa forma, a primeira ação depois da construção da API foi a criação da tela Home que mostrava a quantidade de vagas disponíveis, ocupadas e totais, tendo em vista se dentro de sua array, teria objeto.

Em seguida, partir para a construção do front da tela de cadastro, o qual deveria se realizada no url especifico de cada vaga. Dessa forma, tive que descrever uma função para pegar todas as vagas livres e me retornar a apenas uma para a inserção do novo veículo que será adicionado.

Na tela de pagamento, o qual lista todos os carros e suas respectivas placas, tive que descrever uma funcao para pegar todos os carros das vagas ocupadas. Dessa lista, coloquei a função map para o front fazer uma lista com parametros de cada carro listado. Dessa forma, ao clicar, conseguiria ter as informações especificas daquele carro e poderia passar para um metodo e pagamento e um breve relatorio de sua atividade.

Ao clicar no carro que ira fazer o pagamento, ele reconhece que o pagamento no inicio dessa função como falso, e ao sucesso do metodo de pagamento, ele declara como true o pagamento e exclui automaticamente o carro do banco de dados.
