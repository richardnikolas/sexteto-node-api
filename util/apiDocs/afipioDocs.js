// Executar dentro da pasta "utils": apidoc -i apiDocs -e "(node_modules|public)" -o ../public/apiDoc

//* EMPRESA

/**
 * @api {get} /empresas/:cpfcnpj Obter dados de uma Empresa
 * @apiGroup Empresa
 * @apiName GET Empresa
 * @apiParam {String} cpfcnpj <code>cpfcnpj</code> Identificador único da empresa
 *
 * @apiDescription Neste endpoint é possível obter todas as informações da uma empresa
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         "cpfcnpj": "00000000000123",
 *         "nomeEmpresa": "Nome Empresa",
 *         "nomeRepresentante": "Nome Representante",
 *         "emailRepresentante": "email@empresa.com",
 *         "mensagemEmail": "Mensagem padrão do email",
 *         "assuntoEmail": "Assunto padrão do email",
 *         "createdAt": "2022-01-01T00:00:00.000Z",
 *         "updatedAt": "2022-01-01T00:00:00.000Z"
 *     }
 *
 * @apiError (404 Not Found) EmpresaNotFound  Nenhuma Empresa encontrada com este CPF/CNPJ.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Nenhuma Empresa encontrada com este CPF/CNPJ."
 *     }
 */
function getEmpresa() {
    return;
}

/**
 * @api {post} /empresa Criar nova Empresa
 * @apiGroup Empresa
 * @apiName POST Empresa
 *
 * @apiDescription Neste endpoint é possível criar uma nova empresa
 *
 * @apiBody {String} cpfcnpj CNPJ da nova empresa
 * @apiBody {String} nomeEmpresa Nome da nova empresa
 * @apiBody {String} nomeRepresentante Nome do Representante da empresa
 * @apiBody {String} emailRepresentante Email do Representante da empresa
 * @apiBody {String} assuntoEmail Assunto padrão de todos os emails que serão enviados aos devedores
 * @apiBody {String} mensagemEmail Mensagem padrão de todos os emaisl que serão enviados aos devedores
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 201 OK
 *     {
 *         "message": "Empresa criada com sucesso!"
 *     }
 *
 * @apiError (400 Bad Request) BadRequest Verifique os dados de criação da Empresa.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Verifique os dados de criação da Empresa."
 *     }
 */
function createEmpresa() {
    return;
}

//* DEVEDOR

/**
 * @api {get} /devedor/:cpfcnpj Obter dados de um Devedor
 * @apiGroup Devedor
 * @apiName GET Devedor
 * @apiParam {String} cpfcnpj <code>cpfcnpj</code> Identificador único do Devedor
 *
 * @apiDescription Neste endpoint é possível obter todas as informações de um devedor
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         "cpfcnpj": "00000000000123",
 *         "nome": "Nome Devedor",
 *         "email": "Email Devedor",
 *         "cnpjEmpresa": "00000000000456",
 *         "createdAt": "2022-01-01T00:00:00.000Z",
 *         "updatedAt": "2022-01-01T00:00:00.000Z"
 *     }
 *
 * @apiError (404 Not Found) DevedorNotFound  Nenhum Devedor encontrada com este CPF/CNPJ.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Nenhum Devedor encontrado com este CPF/CNPJ."
 *     }
 */
function getDevedor() {
    return;
}

/**
 * @api {get} /devedores/:cnpjEmpresa Obter dados dos Devedores de uma Empresa
 * @apiGroup Devedor
 * @apiName GET Devedor por Empresa
 * @apiParam {String} cnpjEmpresa <code>cnpjEmpresa</code> Identificador único da Empresa
 *
 * @apiDescription Neste endpoint é possível obter todas as informações dos devedores de uma empresa
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "cpfcnpj": "00000000000123",
 *              "nome": "Nome Devedor",
 *              "email": "Email Devedor",
 *              "cnpjEmpresa": "00000000000456",
 *              "createdAt": "2022-01-01T00:00:00.000Z",
 *              "updatedAt": "2022-01-01T00:00:00.000Z"
 *          }
 *     ]
 *
 * @apiError (404 Not Found) DevedorNotFound Nenhum Devedor encontrado para esta Empresa.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Nenhum Devedor encontrado para esta Empresa."
 *     }
 */
function getDevedoresPorEmpresa() {
    return;
}

/**
 * @api {post} /devedor Criar novo Devedor
 * @apiGroup Devedor
 * @apiName POST Devedor
 *
 * @apiDescription Neste endpoint é possível criar um novo devedor
 *
 * @apiBody {String} cpfcnpj CPF/CNPJ da novo devedor
 * @apiBody {String} nome Nome do novo devedor
 * @apiBody {String} email Email do novo devedor
 * @apiBody {String} cnpjEmpresa Email a qual este devedor pertence
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 201 OK
 *     {
 *         "message": "Devedor criado com sucesso!"
 *     }
 *
 * @apiError (400 Bad Request) Verifique os dados de criação do Devedor.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Verifique os dados de criação do Devedor."
 *     }
 */
function createDevedor() {
    return;
}

//* TITULO

/**
 * @api {get} /titulos/:cpfcnpj Obter dados dos Titulos de um Devedor
 * @apiGroup Titulo
 * @apiName GET Titulos por Devedor
 * @apiParam {String} cpfcnpj <code>cpfcnpj</code> Identificador único do Devedor
 *
 * @apiDescription Neste endpoint é possível obter todas as informações dos titulos de um devedor
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "cpfcnpj": "00000000000888",
 *              "valor": "999.90",
 *              "dataVencimento": "01/01/2022",
 *              "codigoDeBarras": "0000000000000000000000000000000000000000000000",
 *              "dataPagamento": "01/01/2022",
 *              "createdAt": "2022-01-01T00:00:00.000Z",
 *              "updatedAt": "2022-01-01T00:00:00.000Z"
 *          }
 *     ]
 *
 * @apiError (404 Not Found) DevedorNotFound Nenhum Titulo encontrado para esta Devedor.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Nenhum Titulo encontrado para esta Devedor."
 *     }
 */
function getTitulosPorDevedor() {
    return;
}

/**
 * @api {post} /titulo Criar novo Titulo
 * @apiGroup Titulo
 * @apiName POST Titulo
 *
 * @apiDescription Neste endpoint é possível criar um novo titulo
 *
 * @apiBody {String} cpfcnpj CPF/CNPJ de quem é o dono deste titulo
 * @apiBody {Number} valor Valor do titulo
 * @apiBody {String} codigoDeBarras Codigo de barras do boleto
 * @apiBody {String} dataVencimento Date de vencimento do boleto
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 201 OK
 *     {
 *         "message": "Titulo criado com sucesso!"
 *     }
 *
 * @apiError (400 Bad Request) Verifique os dados de criação do Titulo.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Verifique os dados de criação do Titulo."
 *     }
 */
function createTitulo() {
    return;
}
