import './style.css'

const salas = [
    {
      turma: "A",
      alunos: [{ nota: 10 }, { nota: 7 }, { nota: 1 }],
    },
    {
      turma: "B",
      alunos: [{ nota: 8 }, { nota: 10 }, { nota: 7.5 }, { nota: 10 }, { nota: 2 }, { nota: 3 }],
    },
    {
      turma: "C",
      alunos: [{ nota: 4 }, { nota: 6 }, { nota: 7.5 }, { nota: 10 }, { nota: 5 }],
    },
  ];

  function getMediaTurmas() {
    return salas.reduce((acc, item) => {
      const somaNotas = item.alunos.reduce((acc, item) => {
        return acc + item.nota;
      }, 0);
      const media = somaNotas / item.alunos.length;
      return { ...acc, [item.turma]: media };
    }, {});
  }
  
  
  function main() {
    const mediaSalas = getMediaTurmas();
    const salasComMaisInformacoes = salas.map((sala) => {
      return { ...sala, media: mediaSalas[sala.turma] };
    });
    const turmasOrdenadas = salasComMaisInformacoes.sort((primeiraSala, segundaSala) => {
      if (primeiraSala.media > segundaSala.media) {
        return -1;
      }
  
      return 1;
    });
  
    console.log(turmasOrdenadas);
  }
main()