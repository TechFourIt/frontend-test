### Sobre o R7.com
O R7.com é um portal mantido pela Record TV, com quase 9 anos de vida. Possui mais de 50 milhões de visitantes únicos e 200 milhões de pageviews mensalmente e conta coma uma equipe de quase 300 pessoas.

### Teste FrontEnd para o R7.com!
Essa teste consiste em entendermos um pouco mais sobre seus conhecimentos com HTML, CSS,
JavaScript, Código responsivo, suporte a crossbrowser e lógica.

### Orientações
Primeiramente, faça um fork e clone do projeto;
Crie uma branch (pode ser com seu nome mesmo) e depois instale as dependências:

```sh
npm install
```

Após isso, rode a aplicação:
```sh
npm start
```

Depois do seu setup você precisará seguir as seguintes instruções, para construir a aplicação:

1. Desenvolver a página, que tem o seu layout em **a-fazenda.psd**.(A única fonte usada foi a Montserrat, disponível no Google Fonts)
2. Criar um JavaScript que faça a requisição para **/fazenda.json**
  * Apresentar os dados requisitados pelo layout.
  * Calcular a porcentagem de "positives" e "negatives".
  * Ordernar os items do json a partir da porcentagem calculada acima.
3.  **NÃO** alterar o arquivo **fazenda.json**. Em hipótese nenhuma!
4. Se for preciso modificar a estrutura e workflow, atualizar o README.
5. Submeta o Pull Request e envie um email para apinto@rederecord.com.br :D

### Requisitos obrigatórios
1. Escreva o código com BackboneJS ou VanillaJS  ;)
2. Utilizar um pré-processador CSS de sua preferência.
3. Testes e documentação.
4. Automação de tarefas. (Gulp? Grunt? Webpack? :D)
5. Semântica Web
6. Template Engines (underscore, mustache, ou outras de sua preferência)
7. Ser fiel ao .psd.
8. Suporte para IE11 e multiplataforma (crossbrowser web / mobile - Responsivo).
9. Não usar geradores como yeoman, angular-cli, create-react-app, etc..
10. Procure manter a estrutura do projeto.

### Requisitos extras 
1. Acessibilidade
2. SEO
3. Performance

<sub>Os dados presentes neste teste são totalmente fictícios.</sub>

---

# Sobre o Teste Front End - Tammy

## Estrutura do Projeto

O projeto acompanha os seguintes critérios/tecnologias:

* Jade (para HTML) + Component Based Pattern
* SCSS (para CSS) + Component Based Pattern
* Vanilla JavaScript (opc: jQuery) + Module Pattern (Dojo)

Todos os arquivos a serem editados, devem ser feitos na pasta única e exclusivamente ***src***.

---

## Iniciando o projeto

Antes de tudo, clone o projeto para a sua máquina.

Após clonar, crie um arquivo chamado ***.config.json*** no root do seu projeto (pasta **pai**) e copie o conteúdo de ***.config-example.json***. Altere os parâmetros de acordo com o seu ambiente, como o browser que será executado o servidor, porta, etc...

Após realizar as modificações e inserir as configurações necessárias para o Gulp, acesse o terminal e execute o "package manager" abaixo:

NPM (Node Package Management):

```
# Executa o NPM para instalação das dependências do projeto
npm install

# Executa o Gulp para compilação e execução do browser-sync
npm start

```