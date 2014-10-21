DROP DATABASE IF EXISTS worktab;
CREATE DATABASE worktab;
USE worktab;

CREATE TABLE usuarios(
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
email VARCHAR(100) NOT NULL,
senha VARCHAR(255) NOT NULL,
nome VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE acessos(
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
descricao VARCHAR(100) NOT NULL,
url VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE usuarios_acessos(
usuario_id INT UNSIGNED NOT NULL,
acesso_id INT UNSIGNED NOT NULL,
PRIMARY KEY(usuario_id, acesso_id),
FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
FOREIGN KEY(acesso_id) REFERENCES acessos(id)
);

CREATE TABLE cargos(
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
nome VARCHAR(100) NOT NULL,
mediaValorHora DOUBLE(9,2) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE colaboradores(
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
nome VARCHAR(100) NOT NULL,
dataInicio DATE NULL,
dataFim DATE NULL,
valorHora DOUBLE(9,2),
telefone VARCHAR(12) NOT NULL,
telefone2 VARCHAR(12) NULL,
email VARCHAR(100) NOT NULL,
email2 VARCHAR(100) NULL,
observacoes TEXT NULL,
cargo_id INT UNSIGNED NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(cargo_id) REFERENCES cargos(id)
);

CREATE TABLE clientes(
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
nome VARCHAR(100) NOT NULL,
documento VARCHAR(20) NOT NULL,
tipoPessoa VARCHAR(100) NOT NULL,
colaborador_responsavel_id INT UNSIGNED NOT NULL,
dataCadastro DATE NOT NULL,
telefone VARCHAR(12) NOT NULL,
telefone2 VARCHAR(12) NULL,
email VARCHAR(100) NOT NULL,
email2 VARCHAR(100) NULL,
observacoes TEXT NULL,
PRIMARY KEY(id),
FOREIGN KEY(colaborador_responsavel_id) REFERENCES colaboradores(id)
);

CREATE TABLE servicos(
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
descricao TEXT NOT NULL,
preco DOUBLE(9,2),
contrato VARCHAR(255) NOT NULL,
cliente_id INT UNSIGNED NOT NULL,
observacoes TEXT NULL,
prazo DATETIME NOT NULL,
dataInicio DATE NULL,
dataFim DATE NULL,
PRIMARY KEY(id),
FOREIGN KEY(cliente_id) REFERENCES clientes(id)
);

CREATE TABLE os(
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
descricao TEXT NOT NULL,
dataInicio DATE NULL,
dataFim DATE NULL,
prazo DATETIME NOT NULL,
horasTrabalhadas DOUBLE(9,2),
usuario_solicitante_id INT UNSIGNED NOT NULL,
observacoes TEXT NULL,
PRIMARY KEY(id),
FOREIGN KEY(usuario_solicitante_id) REFERENCES usuarios(id)
);

CREATE TABLE os_colaboradores_responsaveis(
os_id INT UNSIGNED NOT NULL,
colaborador_id INT UNSIGNED NOT NULL,
PRIMARY KEY(os_id, colaborador_id),
FOREIGN KEY(os_id) REFERENCES os(id),
FOREIGN KEY(colaborador_id) REFERENCES colaboradores(id)
);

CREATE TABLE faturas(
id INT UNSIGNED AUTO_INCREMENT NOT NULL,
descricao TEXT NOT NULL,
usuario_cadastrou_id INT UNSIGNED NOT NULL,
valor DOUBLE(9,2) NOT NULL,
dataCadastro DATETIME NOT NULL,
dataVencimento DATE NOT NULL,
itemAnexado VARCHAR(255) NULL,
PRIMARY KEY(id),
FOREIGN KEY(usuario_cadastrou_id) REFERENCES usuarios(id)
);
