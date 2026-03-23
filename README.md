# Lista de Tarefas

Uma aplicação web simples e intuitiva para gerenciar sua lista de tarefas do dia com um design temático de motocross.

## 🎨 Características

- ✅ **Adicionar Tarefas**: Adicione novas tarefas à sua lista
- ✏️ **Editar Tarefas**: Modifique tarefas existentes
- 🗑️ **Excluir Tarefas**: Remova tarefas concluídas ou desnecessárias
- 🎯 **Validação**: Impede a adição de tarefas vazias
- 🏍️ **Design Temático**: Tema motocross com cores vibrantes (laranja e ouro)
- 📱 **Interface Responsiva**: Layout centrado e acessível

## 📁 Estrutura do Projeto

```
AV1-1BIM-ENZOF/
├── index.html          # Arquivo HTML principal
├── CSS/
│   └── style.css       # Estilos da aplicação
├── JS/
│   └── script.js       # Lógica da aplicação
├── img/
│   └── motocross.jpg   # Imagem de fundo (tema motocross)
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Abra o arquivo `index.html` no seu navegador**
2. **Digite uma tarefa** no campo de entrada
3. **Clique em "Adicionar"** ou pressione Enter
4. **Gerenciar tarefas:**
   - Clique em **"Editar"** para modificar uma tarefa
   - Clique em **"Excluir"** para remover uma tarefa

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Styling com tema motocross
  - Cores: Orange Red (#FF4500), Gold (#FFD700)
  - Efeitos de sombra e gradiente
  - Fundo com imagem (motocross.jpg)
- **JavaScript Vanilla**: Lógica interativa sem dependências externas

## 📋 Funcionalidades Detalhadas

### Validação de Tarefas
Tarefas vazias ou com apenas espaços em branco não são permitidas. Uma mensagem de erro é exibida se o usuário tentar adicionar uma tarefa vazia.

### Array de Tarefas
As tarefas são armazenadas em um array JavaScript chamado `tarefas`.

### Renderização Dinâmica
A lista de tarefas é renderizada dinamicamente com botões para editar e excluir cada tarefa.

## 🎨 Estilo Visual

- **Container**: Fundo laranja (#FF4500) com borda preta
- **Título**: Ouro (#FFD700) com sombra
- **Input**: Fundo creme (#FFF8DC)
- **Fundo da Página**: Imagem motocross com gradiente para fallback
- **Elementos**: Bordas arredondadas e sombras para profundidade

## 📝 Notas

- O projeto utiliza apenas JavaScript vanilla, sem frameworks externos
- Os dados são armazenados em memória (não persiste após recarregar a página)
- Para versões futuras, considere adicionar localStorage para persistência de dados

## 👨‍💻 Contribuições

Este é um projeto educacional desenvolvido como atividade academica (AV1-1BIM).

---

**Última atualização:** Março 2026
