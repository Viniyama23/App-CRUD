 # 📱 Projeto CRUD com React Native + AsyncStorage

Aplicativo simples de CRUD (Create, Read, Update, Delete) de usuários utilizando **React Native**, **Typescript**, **React Navigation** e **AsyncStorage** para persistência local.

---

## 🚀 Tecnologias Utilizadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage)

---

## 📦 Pré-requisitos

Antes de rodar o projeto, instale:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Expo Go](https://expo.dev/client) no seu celular **OU** emulador Android/iOS
- NPM ou Yarn

---

## 🔧 Instalação do Projeto

Clone o repositório:

```sh
git clone https://github.com/seu-usuario/cp1Mobile.git
cd cp1Mobile
Instale as dependências:

sh
Copiar código
npm install
# ou
yarn install
📚 Dependências principais
Se você abriu o projeto do zero, instale também as libs necessárias:

sh
Copiar código
# React Navigation (navegação)
npm install @react-navigation/native
npm install @react-navigation/native-stack

# Dependências obrigatórias do React Navigation
npx expo install react-native-screens react-native-safe-area-context

# Async Storage (persistência)
npx expo install @react-native-async-storage/async-storage
▶️ Rodando o Projeto
Execute o servidor de desenvolvimento com cache limpo:

sh
Copiar código
npx expo start -c
Abra o aplicativo:

Escaneie o QRCode no Expo Go (Android/iOS), ou

Rode no emulador Android/iOS pelo menu do Expo.

📂 Estrutura de Pastas
bash
Copiar código
cp1Mobile/
│── src/
│   ├── context/        # Context API (UsersContext.tsx)
│   ├── screens/        # Telas (UserList.tsx, UserForm.tsx)
│── App.tsx             # Arquivo principal
│── package.json
│── tsconfig.json
│── README.md
📝 Funcionalidades
📋 Listar usuários

➕ Adicionar novo usuário

✏️ Editar usuário existente

❌ Excluir usuário

💾 Persistência com AsyncStorage

⚠️ Problemas Comuns
Erro: Unable to resolve @react-navigation/native
→ Instale novamente com:

sh
Copiar código
npm install @react-navigation/native
Erro: Unable to resolve @react-native-async-storage/async-storage
→ Instale com:

sh
Copiar código
npx expo install @react-native-async-storage/async-storage
Erro de cache
→ Rode:

sh
Copiar código
npx expo start -c
👨‍💻 Autor Vinicius Yamashita
Projeto desenvolvido para estudo de CRUD com React Native e AsyncStorage.

yaml
Copiar código
