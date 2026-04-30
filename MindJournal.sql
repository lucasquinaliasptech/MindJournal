create database mindjournal;

use mindjournal;

create table usuario (
  id_usuario int not null auto_increment primary key,
  nome varchar(45) not null,
  email varchar(45) not null,
  senha varchar(45) not null,
  status_usuario tinyint(1) not null,
  apelido varchar(45) not null,
  -- 0 inativo e 1 ativo
  constraint chkStatusUsuario check(status_usuario in (0,1)),
  unique index id_usuario_UNIQUE (id_usuario asc) visible,
  unique index email_UNIQUE (email asc) visible,
  unique index apelido_UNIQUE (apelido asc) visible)
;

create table postagem (
  id_postagem int not null auto_increment primary key,
  titulo varchar(255) not null,
  conteudo text not null,
  data_criacao datetime not null default current_timestamp,
  data_postagem datetime,
  status_postagem tinyint(1) not null default 0,
  id_autor int not null,
  visibilidade tinyint(1) not null,
  -- 0 rascunho, 1 postado
  constraint chkStatusPostagem check(status_postagem in (0,1)),
  -- 0 privado, 1 público
  constraint chkVisibilidadePostagem check(visibilidade in (0,1)),
  unique index id_postagem_UNIQUE (id_postagem asc) visible,
  index fk_postagem_usuario_idx (id_autor asc) visible,
  constraint fk_postagem_usuario foreign key (id_autor) references usuario(id_usuario)
);

create table comentario (
  id_comentario int not null auto_increment primary key,
  id_postagem int not null,
  id_autor_comentario int not null,
  data_criacao datetime default current_timestamp,
  conteudo text not null,
  id_resposta int,
  unique index id_comentario_UNIQUE (id_comentario asc) visible,
  index fk_comentario_postagem1_idx (id_postagem asc) visible,
  index fk_comentario_usuario1_idx (id_autor_comentario asc) visible,
  index fk_comentario_comentario1_idx (id_resposta asc) visible,
  constraint fk_comentario_postagem1 foreign key (id_postagem) references postagem(id_postagem),
  constraint fk_comentario_usuario1 foreign key (id_autor_comentario) references usuario(id_usuario),
  constraint fk_comentario_comentario1 foreign key (id_resposta) references comentario(id_comentario)
);

create table curtida (
  id_curtida int not null auto_increment,
  id_postagem int,
  id_usuario int not null,
  id_comentario int,
  primary key (id_curtida, id_usuario),
  unique index id_curtida_UNIQUE (id_curtida asc) visible,
  index fk_curtida_postagem1_idx (id_postagem asc) visible,
  index fk_curtida_usuario1_idx (id_usuario asc) visible,
  index fk_curtida_comentario1_idx (id_comentario asc) visible,
  constraint fk_curtida_postagem1 foreign key (id_postagem) references postagem(id_postagem),
  constraint fk_curtida_usuario1 foreign key (id_usuario) references usuario(id_usuario),
  constraint fk_curtida_comentario1 foreign key (id_comentario) references comentario (id_comentario)
);
