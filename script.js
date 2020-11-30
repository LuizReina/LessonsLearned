const listaBlocos = document.getElementById('blocos');
const listaChecks = document.getElementById('checks');
const blocosConcluidos = 7;

for (let index = 0; index < 40; index += 1) {
  if (index > 0) {
    const novoBloco = document.createElement('td');
    novoBloco.innerText = index;
    listaBlocos.append(novoBloco);
  } else {
    const novoBloco = document.createElement('td');
    novoBloco.innerText = 'Blocos';
    listaBlocos.appendChild(novoBloco);
  }
}

for (let index = 0; index < 40; index += 1) {
  if (index > 0) {
    if (index <= blocosConcluidos) {
    const novoBloco = document.createElement('td');
    novoBloco.innerText = '✓';
    novoBloco.className = 'check-ok';
    listaChecks.append(novoBloco);
    } else {
      const novoBloco = document.createElement('td');
      novoBloco.innerText = '';
      novoBloco.className = 'check-not-ok';
      listaChecks.append(novoBloco);
    }
  } else {
    const novoBloco = document.createElement('td');
    novoBloco.innerText = 'Concluídos';
    novoBloco.className = 'check-ok';
    listaChecks.appendChild(novoBloco);
  }
}