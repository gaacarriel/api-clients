<h1 align="center"> api-clients </h1>

<br>

Para utilizar esta API em ambiente de desenvolvimento, siga os seguintes passos:

<br>


<br>

Execute no terminal: <u>yarn</u> para instalar as dependencias do projeto.

<br>

Apos a instalação das dependencias, crie um arquivo <u>.env</u> com as mesma variaveis do arquivo <u>.env.example</u>, porem com as suas informações. Você tambem deve criar um banco de dados com o mesmo nome atribuido a variavel "<u>PGDATABASE</u>".

<br>

Após isso, execute no seu terminal: <u>yarn typeorm migration:run -d src/data-source</u> para persistir as migrações no seu banco de dados.

<br>

Por fim, execute: <u>yarn run dev</u> para rodar a API localmente

<br>

Consulte nossa documentação em: http://localhost:3001/docs