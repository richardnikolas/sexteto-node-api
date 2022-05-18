// Executar dentro da pasta "utils": apidoc -i apiDocs -e "(node_modules|public)" -o ../public/apiDoc

/**
 * @api {get} /empresas/:cpfcnpj GET Empresa
 * @apiGroup Empresa
 * @apiName GET Empresa
 * @apiParam {String} cpfcnpj <code>cpfcnpj</code> Identificador único da empresa
 *
 * @apiDescription Neste endpoint é possível obter todas as informações da uma empresa
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
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
