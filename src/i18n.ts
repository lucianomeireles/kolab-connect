import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        add_a_comment: 'Add a comment',
        add_post: 'Add post',
        back: 'Back',
        comments: 'Comments',
        delete: 'Delete',
        edit: 'Edit',
        email: 'Email',
        enter_your_email: 'Enter your email',
        find_user_by_name: 'Find user by name',
        login: 'Login',
        name: 'Name',
        no_users_found: 'No users found',
        nothing_to_see_here_yet: 'Nothing to see here yet',
        options: 'Options',
        profile: 'Profile',
        register: 'Register',
        save: 'Save',
        search: 'Search',
        see_comments: 'See comments',
        sign_out: 'Sign out',
        username: 'Username',
        whats_up: 'Whats up?'
      }
    },
    es: {
      translation: {
        add_a_comment: 'Añadir un comentario',
        add_post: 'Añadir publicación',
        back: 'Atrás',
        comments: 'Comentarios',
        delete: 'Eliminar',
        edit: 'Editar',
        email: 'Correo electrónico',
        enter_your_email: 'Introduce tu correo electrónico',
        find_user_by_name: 'Buscar usuario por nombre',
        login: 'Iniciar sesión',
        name: 'Nombre',
        no_users_found: 'No se encontraron usuarios',
        nothing_to_see_here_yet: 'Nada que ver aquí todavía',
        options: 'Opciones',
        profile: 'Perfil',
        register: 'Registrarse',
        save: 'Guardar',
        search: 'Buscar',
        see_comments: 'Ver comentarios',
        sign_out: 'Cerrar sesión',
        username: 'Nombre de usuario',
        whats_up: '¿Qué pasa?'
      }
    },
    pt: {
      translation: {
        add_a_comment: 'Adicionar um comentário',
        add_post: 'Adicionar publicação',
        back: 'Voltar',
        comments: 'Comentários',
        delete: 'Excluir',
        edit: 'Editar',
        email: 'Email',
        enter_your_email: 'Digite seu email',
        find_user_by_name: 'Encontrar usuário pelo nome',
        login: 'Entrar',
        name: 'Nome',
        no_users_found: 'Nenhum usuário encontrado',
        nothing_to_see_here_yet: 'Nada para ver aqui ainda',
        options: 'Opções',
        profile: 'Perfil',
        register: 'Registrar-se',
        save: 'Salvar',
        search: 'Buscar',
        see_comments: 'Ver comentários',
        sign_out: 'Sair',
        username: 'Nome de usuário',
        whats_up: 'O que está acontecendo?'
      }
    },
    zh: {
      translation: {
        add_a_comment: '添加评论',
        add_post: '添加帖子',
        back: '返回',
        comments: '评论',
        delete: '删除',
        edit: '编辑',
        email: '电子邮件',
        enter_your_email: '输入您的电子邮件',
        find_user_by_name: '按姓名查找用户',
        login: '登录',
        name: '姓名',
        no_users_found: '未找到用户',
        nothing_to_see_here_yet: '这里还没有任何内容',
        options: '选项',
        profile: '个人资料',
        register: '注册',
        save: '保存',
        search: '搜索',
        see_comments: '查看评论',
        sign_out: '退出',
        username: '用户名',
        whats_up: '有什么新鲜事？'
      }
    },
    fr: {
      translation: {
        add_a_comment: 'Ajouter un commentaire',
        add_post: 'Ajouter un post',
        back: 'Retour',
        comments: 'Commentaires',
        delete: 'Supprimer',
        edit: 'Modifier',
        email: 'Email',
        enter_your_email: 'Entrez votre email',
        find_user_by_name: 'Trouver un utilisateur par nom',
        login: 'Connexion',
        name: 'Nom',
        no_users_found: 'Aucun utilisateur trouvé',
        nothing_to_see_here_yet: "Rien à voir ici pour l'instant",
        options: 'Options',
        profile: 'Profil',
        register: "S'inscrire",
        save: 'Sauvegarder',
        search: 'Rechercher',
        see_comments: 'Voir les commentaires',
        sign_out: 'Déconnexion',
        username: "Nom d'utilisateur",
        whats_up: 'Quoi de neuf ?'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
