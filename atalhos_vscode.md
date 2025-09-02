# PDP — Atalhos Essenciais do VS Code para Desenvolvedores Node.js (Linux/Ubuntu)

**Horizonte:** 2 semanas  
**Tempo diário sugerido:** 10–15 min (drills) + uso no trabalho real

---

## 1) Objetivo
Dominar os atalhos essenciais do VS Code para acelerar **edição**, **navegação**, **refatoração**, **terminal**, **debug** e **Git** em projetos Node.js.

### Resultados‑chave (KRs)
- **KR1:** Usar ≥ 30 atalhos “de cabeça” (sem abrir menus) ao final de 2 semanas.
- **KR2:** Reduzir em **30–50%** o tempo de tarefas comuns (abrir arquivos, pular símbolos, multi‑cursor, refatorar).
- **KR3:** Realizar um **refactor completo** (extrair função/constante, renomear símbolos, organizar imports) só com teclado.
- **KR4:** Debugar um script Node.js com breakpoints e stepping **sem tocar no mouse**.

---

## 2) Plano de estudo (2 semanas)

### Semana 1 — Fundamentos (15–20 min/dia)
- **Dia 1–2 (Navegação e busca):** Quick Open, Outline, símbolos, ir para linha; alternar sidebar/painéis.
- **Dia 3–4 (Edição rápida):** mover/duplicar/apagar linha, comentar, formatar, wrap de linha.
- **Dia 5 (Seleções & multi‑cursor):** expandir seleção, `Ctrl+D`, `Ctrl+Shift+L`, cursores verticais.
- **Dia 6 (Terminal integrado):** abrir/fechar, split, alternar instâncias.
- **Dia 7 (Revisão):** fazer um “Sprint de Atalhos” de 10 minutos cronometrado.

### Semana 2 — Refactor, Debug & Git (15–20 min/dia)
- **Dia 8–9 (Refactor/Code Actions):** `Ctrl+.`, `Ctrl+Shift+R`, `F2`, organizar imports.
- **Dia 10–11 (Debug Node.js):** F5/Ctrl+F5, F9, F10/F11/Shift+F11, Console de Depuração.
- **Dia 12 (Git integrado):** staging, commit, diff, navegação por mudanças.
- **Dia 13 (Atalhos pessoais):** adicionar 3–5 keybindings custom no `keybindings.json`.
- **Dia 14 (Avaliação):** repetir o “Sprint de Atalhos” e medir ganho de velocidade.

> **Sprint de Atalhos (10 min):** pegue uma tarefa real (ex.: refatorar uma função) e **só use teclado**. Marque quais atalhos você usou e onde ficou travado.

---

## 3) Cheat Sheet — Atalhos essenciais (Linux)

### Navegação & busca
- **Command Palette:** `Ctrl+Shift+P`
- **Quick Open (arquivo):** `Ctrl+P`
- **Símbolo no arquivo:** `Ctrl+Shift+O`
- **Símbolo no workspace:** `Ctrl+T`
- **Ir para linha:** `Ctrl+G`
- **Pesquisar no projeto:** `Ctrl+Shift+F`
- **Substituir no projeto:** `Ctrl+Shift+H`
- **Alternar Sidebar:** `Ctrl+B`
- **Alternar Painel (abaixo):** `Ctrl+J`
- **Alternar Terminal:** `` Ctrl+` ``
- **Zen Mode:** `Ctrl+K`, depois `Z` (atalho encadeado)

### Edição
- **Comentar linha:** `Ctrl+/`
- **Comentar bloco:** `Shift+Alt+A`
- **Formatar documento:** `Shift+Alt+F`
- **Mover linha:** `Alt+↑ / Alt+↓`
- **Duplicar linha:** `Shift+Alt+↑ / Shift+Alt+↓`
- **Apagar linha:** `Ctrl+Shift+K`
- **Reabrir editor fechado:** `Ctrl+Shift+T`
- **Quebra de linha (wrap):** `Alt+Z`

### Seleções & multi‑cursor
- **Próxima ocorrência (multi‑cursor):** `Ctrl+D`
- **Selecionar todas as ocorrências:** `Ctrl+Shift+L`
- **Cursor acima/abaixo:** `Ctrl+Alt+↑ / Ctrl+Alt+↓`
- **Expandir/Reduzir seleção:** `Shift+Alt+→ / Shift+Alt+←`
- **Multi‑cursor com mouse:** `Alt+Clique`

### Navegação de código (JS/TS)
- **Ir para definição:** `F12` (ou `Ctrl+Clique`)
- **Peek definição:** `Alt+F12`
- **Voltar/Avançar navegação:** `Alt+← / Alt+→`
- **Renomear símbolo:** `F2`
- **Quick Fix / Code Action:** `Ctrl+.`
- **Menu de Refactor:** `Ctrl+Shift+R`  
  (inclui **Extract to constant/function**, **Convert to arrow function**, etc.)

### Terminal integrado
- **Novo terminal:** `Ctrl+Shift+` ` (Shift + a tecla do acento grave)
- **Alternar terminal:** `` Ctrl+` ``
- **Split terminal:** `Ctrl+Shift+5` *(se não funcionar, busque “Terminal: Split” em Keybindings)*
- **Próx./Ant. terminal:** `Ctrl+PageDown / Ctrl+PageUp`
- **Interromper processo:** `Ctrl+C` (no próprio terminal)

### Debug Node.js
- **Iniciar debug:** `F5`
- **Executar sem debug:** `Ctrl+F5`
- **Breakpoint:** `F9`
- **Step Over / Into / Out:** `F10 / F11 / Shift+F11`
- **Console de Depuração:** `Ctrl+Shift+Y`

### Git
- **Abrir Source Control:** `Ctrl+Shift+G`
- **Commit (na caixa de mensagem do SCM):** `Ctrl+Enter`
- **Diff do arquivo selecionado:** `Enter` (na view de mudanças)

### Miscelânea
- **Configurações:** `Ctrl+,`
- **Keybindings:** `Ctrl+K` depois `Ctrl+S`
- **Split editor:** `Ctrl+\`
- **Focar grupo 1/2/3:** `Ctrl+1 / Ctrl+2 / Ctrl+3`

> **Dica:** Em PT‑BR, a tecla **`** (acento grave/backtick) fica ao lado do **1** em muitos teclados. No VS Code, ela é usada para o Terminal.

---

## 4) Exercícios práticos (5–10 min cada)

1. **Refactor de expressão → constante**  
   Selecione uma expressão, use `Ctrl+Shift+R` → *Extract to constant*, renomeie com `F2` e mova linhas com `Alt+↑/↓`.
2. **Navegação só por símbolos**  
   Abra 3 arquivos com `Ctrl+P`; em cada um, salte para uma função com `Ctrl+Shift+O` e volte com `Alt+←`.
3. **Multi‑cursor em massa**  
   Use `Ctrl+D` repetidamente para renomear variáveis locais e `Ctrl+Shift+L` para alterar todas de uma vez.
4. **Debug Node.js em 3 minutos**  
   Coloque um `debugger;` ou `F9`, rode `F5`, faça `F10/F11`, avalie expressões no **Debug Console** (`Ctrl+Shift+Y`).

---

## 5) Keybindings recomendados (adicione em `keybindings.json`)

```jsonc
// Organizar imports (JS/TS)
{
  "key": "ctrl+alt+o",
  "command": "editor.action.organizeImports",
  "when": "editorTextFocus && !editorReadonly"
},
// Extrair para constante (aplica se só houver 1 ação possível)
{
  "key": "ctrl+alt+c",
  "command": "editor.action.codeAction",
  "args": { "kind": "refactor.extract.constant", "apply": "ifSingle" },
  "when": "editorHasSelection && editorTextFocus && !editorReadonly"
},
// Extrair para função
{
  "key": "ctrl+alt+m",
  "command": "editor.action.codeAction",
  "args": { "kind": "refactor.extract.function", "apply": "ifSingle" },
  "when": "editorHasSelection && editorTextFocus && !editorReadonly"
},
// Alternar Terminal rápido
{
  "key": "ctrl+alt+`",
  "command": "workbench.action.terminal.toggleTerminal"
}
```

> Abra **File → Preferences → Keyboard Shortcuts** e clique no ícone de `{}` (canto sup.) para editar o `keybindings.json` diretamente.

---

## 6) Settings úteis (adicione em `settings.json`)

```jsonc
{
  "editor.formatOnSave": true,
  "files.trimTrailingWhitespace": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "javascript.suggest.completeFunctionCalls": true,
  "typescript.suggest.completeFunctionCalls": true,
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "terminal.integrated.defaultProfile.linux": "bash" // ou "zsh" se preferir
}
```

---

## 7) Como medir progresso (simples e objetivo)
- **Contador de atalhos usados/dia:** faça um risco na sua lista toda vez que usar um atalho novo.
- **Tempo de tarefas:** meça (cronômetro) hoje e no Dia 14: abrir arquivo, pular para símbolo, extrair constante, iniciar debug. Busque **30–50%** de redução.
- **Checklist KR:** no fim de cada semana, marque quantos itens você consegue fazer **sem mouse**.

Boa prática: imprima/cole este cheat sheet no seu setup por 2 semanas. Depois disso, os atalhos viram reflexo.
