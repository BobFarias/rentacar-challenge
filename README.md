# **Desafio do Estacionamento de Carros**

# Motivação
Avaliar o desempenho de desenvolvedores ao utilizar o framework ASP.NET Core para implementar uma API RESTful documentada e testada.

# Introdução 
Você foi procurado para implementar uma API que gerencie um estaciomento privado de veículos. 

O cliente precisa que o sistema seja feito em ASP.NET Core já que ele é produtivo, eficiente e multi-plataforma.

# Descrição do sistema
Criar uma API para gerenciamento de carros em um estacionamento, que deve ter pelo menos 15 vagas. 
Através dos métodos da API será possível ver quantas vagas estão disponíveis, estacionar um carro, realizar o pagamento do ticket e emitir um relatório de recebimentos.
|Permanência|Valor (R$)|
|-----------|---------:|
|Até 3 horas|7,00      |
|Hora extra |3,00      |

Métodos a serem criados:
- Consultar quantidade de vagas disponíveis
- Listar posição das vagas disponíveis
- Estacionar um carro numa vaga
- Pagar ticket
- Relatório com ocupação atual do estacionamento
- Relatório com valor arrecadado por período

**Caso algum aspecto do problema não tenha sido detalhado, solucione da forma que achar melhor, e justifique sua decisão.**

# Tecnologias requeridas
- ASP.NET Core (C#) rodando em Windows ou Linux
- Banco de dados à sua escolha (relacional ou não)
- Testes unitários em todos os métodos da API
- Documentação dos métodos com Swagger/OpenAPI
- *(extra)* CI/CD
- *(extra)* Monitoramento da API
- *(extra)* FrontEnd em um framework à sua escolha

# Como entregar o desafio?
Faça um fork desse repositório e mande o link de clonagem para anderson@vsoft.com.br.
Troque o item final (*Como entregar o desafio?*) por *Detalhe da solução*, onde você explicará as decisões de arquitetura que tomou e como executar seu projeto.
Depois você será convocado para apresentar sua solução presencialmente.

